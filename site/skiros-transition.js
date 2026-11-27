import symbolUrl from './assets/skiros/simbolo.png';

const transition = document.querySelector('.skiros-transition');
const scene = transition.querySelector('.skiros-scene');
const gym = transition.querySelector('.gym');
const symbol = document.querySelector('.skiros-symbol');
const skiros = document.querySelector('#skiros');
const canvas = transition.querySelector('canvas');
const ctx = canvas.getContext('2d');
const motion = matchMedia('(prefers-reduced-motion: no-preference)');
const clamp = (value) => Math.min(1, Math.max(0, value));
const mix = (from, to, amount) => from + (to - from) * amount;
const ease = (value) => {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
};

const colorSteps = 32;
const toneStep = 17;
const particlePalette = Array.from({ length: 16 }, (_, shade) => {
  const tone = shade * toneStep;
  return Array.from({ length: colorSteps + 1 }, (_, step) => {
    const move = step / colorSteps;
    const light = ease(move);
    const red = Math.round(mix(tone, mix(188, 245, light), move));
    const green = Math.round(mix(tone, mix(197, 247, light), move));
    const blue = Math.round(mix(tone, mix(206, 251, light), move));
    return { color: `rgb(${red} ${green} ${blue})`, positions: [] };
  });
});

function seededRandom() {
  let state = 149;
  return () => {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0;
    return state / 2 ** 32;
  };
}

function drawText(context, element, origin) {
  const range = document.createRange();
  const nodes = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  while (nodes.nextNode()) {
    const text = nodes.currentNode;
    const style = getComputedStyle(text.parentElement);
    context.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    context.fillStyle = style.color;
    context.textBaseline = 'middle';
    context.letterSpacing = style.letterSpacing === 'normal' ? '0px' : style.letterSpacing;
    for (const word of text.textContent.matchAll(/\S+/gu)) {
      range.setStart(text, word.index);
      range.setEnd(text, word.index + word[0].length);
      const rect = range.getBoundingClientRect();
      context.fillText(word[0], rect.left - origin.left, rect.top + rect.height / 2 - origin.top);
    }
  }
}

function sampleGym(paintedSymbol, windowWidth, pin, compact) {
  const bounds = gym.getBoundingClientRect();
  const reference = scene.getBoundingClientRect();
  const sampler = document.createElement('canvas');
  const scale = Math.min(.85, 850 / Math.max(bounds.width, bounds.height));
  sampler.width = Math.ceil(bounds.width * scale);
  sampler.height = Math.ceil(bounds.height * scale);
  const source = sampler.getContext('2d', { willReadFrequently: true });
  source.scale(scale, scale);
  for (const text of gym.querySelectorAll('h2, p')) drawText(source, text, bounds);
  source.fillStyle = getComputedStyle(gym).borderTopColor;
  source.fillRect(0, 0, bounds.width, 1.8);

  const data = source.getImageData(0, 0, sampler.width, sampler.height).data;
  const random = seededRandom();
  const points = [];
  const step = 2;
  for (let y = 0; y < sampler.height; y += step) {
    for (let x = 0; x < sampler.width; x += step) {
      const sx = x + Math.floor(random() * Math.min(step, sampler.width - x));
      const sy = y + Math.floor(random() * Math.min(step, sampler.height - y));
      const index = (sy * sampler.width + sx) * 4;
      const tone = data[index];
      if (data[index + 3] < 64 || tone < 37) continue;
      points.push({
        x: bounds.left - reference.left + sx / scale,
        y: bounds.top - reference.top + sy / scale,
        tone,
      });
    }
  }

  const sourceCount = Math.min(points.length, compact ? 850 : 2000);
  const spread = compact ? 88 : 150;
  const particles = [];
  for (let index = 0; index < sourceCount; index++) {
    const other = index + Math.floor(random() * (points.length - index));
    [points[index], points[other]] = [points[other], points[index]];
    const point = points[index];
    const edge = Math.min(1, Math.hypot(
      (point.x - windowWidth / 2) / (windowWidth / 2),
      (point.y + pin - innerHeight / 2) / (innerHeight / 2),
    ));
    for (let copy = 0; copy < 6; copy++) {
      particles.push({
        x: point.x + random() - .5,
        y: point.y + random() - .5,
        colors: particlePalette[Math.round(point.tone / toneStep)],
        target: paintedSymbol.points[Math.floor(random() * paintedSymbol.points.length)],
        delay: (1 - edge) * .17 + random() * .10,
        driftX: (random() - .5) * spread,
        driftY: (random() - .5) * spread,
        size: (compact ? .9 : 1.1) + random() * 1.7,
      });
    }
  }
  return particles;
}

function prepareSymbol(image) {
  const paint = document.createElement('canvas');
  paint.width = image.width;
  paint.height = image.height;
  const context = paint.getContext('2d', { willReadFrequently: true });
  context.drawImage(image, 0, 0);
  const data = context.getImageData(0, 0, paint.width, paint.height).data;
  const points = [];
  for (let y = 0; y < paint.height; y++) {
    for (let x = 0; x < paint.width; x++) {
      if (data[(y * paint.width + x) * 4 + 3] >= 128) {
        points.push([(x + .5) / paint.width - .5, (y + .5) / paint.height - .5]);
      }
    }
  }
  context.globalCompositeOperation = 'source-in';
  context.fillStyle = '#f5f7fb';
  context.fillRect(0, 0, paint.width, paint.height);
  return { paint, points };
}

function loadImage(url) {
  const image = new Image();
  image.src = url;
  return image.decode().then(() => image);
}

let materials;
let geometry;
let frame = 0;

function measure() {
  const width = document.documentElement.clientWidth;
  const height = innerHeight;
  const compact = width <= 768;
  const pin = Math.min(0, height - scene.offsetHeight);
  const travel = Math.round(height * (compact ? 1.85 : 2.7));
  const ratio = Math.min(devicePixelRatio || 1, 1.5);
  transition.style.setProperty('--particle-pin', pin + 'px');
  transition.style.setProperty('--particle-travel', travel + 'px');
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  geometry = {
    pin, travel, width, height, logoWidth: Math.min(width * .52, height * .55, 296),
    particles: sampleGym(materials, width, pin, compact),
  };
}

function clearEffect() {
  canvas.classList.remove('is-visible');
  symbol.classList.remove('is-handing-off');
}

function draw(time) {
  const { width, height, logoWidth, particles } = geometry;
  const stage = scene.getBoundingClientRect();
  const symbolBox = symbol.getBoundingClientRect();
  const sectionTop = skiros.getBoundingClientRect().top;
  const symbolOffset = symbolBox.top - sectionTop + symbolBox.height / 2;
  const handoffStart = height + symbolOffset;
  const arrivalY = Math.max(height * .62, symbolOffset + 16);
  const handoff = clamp((handoffStart - symbolBox.top - symbolBox.height / 2) / (handoffStart - arrivalY));
  const leaving = time >= 1;
  const shown = time > 0 && (!leaving || handoff < 1) && sectionTop > 0;
  if (!shown) {
    clearEffect();
    return;
  }

  canvas.classList.add('is-visible');
  symbol.classList.toggle('is-handing-off', leaving);
  ctx.clearRect(0, 0, width, height);
  const blend = leaving ? ease(handoff) : 0;
  const logoX = mix(width / 2, symbolBox.left + symbolBox.width / 2, blend);
  const logoY = mix(height / 2, symbolBox.top + symbolBox.height / 2, blend);
  const wide = mix(logoWidth, symbolBox.width, blend);
  const high = wide * materials.paint.height / materials.paint.width;
  const solid = ease((time - .72) / .12);
  if (solid < 1) {
    ctx.globalAlpha = ease(time / .14) * (1 - solid);
    for (const point of particles) {
      const move = ease((time - point.delay - .04) / .66);
      const arc = Math.sin(move * Math.PI);
      const x = mix(stage.left + point.x, logoX + wide * point.target[0], move) + arc * point.driftX;
      const y = mix(stage.top + point.y, logoY + high * point.target[1], move) + arc * point.driftY;
      point.colors[Math.round(move * colorSteps)].positions.push(x, y, point.size);
    }
    for (const shades of particlePalette) {
      for (const { color, positions } of shades) {
        if (!positions.length) continue;
        ctx.fillStyle = color;
        for (let index = 0; index < positions.length; index += 3) {
          const size = positions[index + 2];
          ctx.fillRect(positions[index], positions[index + 1], size, size);
        }
        positions.length = 0;
      }
    }
  }
  if (solid > 0) {
    ctx.globalAlpha = solid;
    ctx.drawImage(materials.paint, logoX - wide / 2, logoY - high / 2, wide, high);
  }
  ctx.globalAlpha = 1;
}

function update() {
  frame = 0;
  if (!materials || !motion.matches) {
    transition.classList.remove('particles-ready');
    geometry = undefined;
    clearEffect();
    return;
  }

  if (!geometry) {
    // Scroll offsets are rounded, so the transition can end a fraction of a pixel below the anchor.
    if (transition.getBoundingClientRect().bottom < 1) return;
    transition.classList.add('particles-ready');
    measure();
  }

  const time = clamp((geometry.pin - transition.getBoundingClientRect().top) / geometry.travel);
  const color = ease((time - .05) / .7);
  transition.style.setProperty('--gym-opacity', 1 - ease(time / .28));
  transition.style.setProperty('--particle-tone', color * 100 + '%');
  draw(time);
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(update);
}

function resize() {
  if (geometry && motion.matches) measure();
  schedule();
}

let loading = false;
function prepare() {
  if (!motion.matches || loading) return;
  loading = true;
  Promise.all([loadImage(symbolUrl), document.fonts.ready])
    .then(([symbolImage]) => {
      const painted = prepareSymbol(symbolImage);
      if (painted.points.length) {
        materials = painted;
        schedule();
      }
    })
    .catch(() => { /* The static gym and Skiros sections are the fallback. */ });
}

if (ctx && 'IntersectionObserver' in window && 'ResizeObserver' in window && CSS.supports('position', 'sticky')) {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) prepare();
  }, { rootMargin: '700px 0px' });
  observer.observe(gym);
  motion.addEventListener('change', () => {
    if (transition.getBoundingClientRect().top < innerHeight + 700) prepare();
    schedule();
  });
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', resize, { passive: true });
  const layout = new ResizeObserver(resize);
  layout.observe(scene);
}
