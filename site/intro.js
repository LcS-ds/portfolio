const root = document.documentElement;
const stage = document.querySelector('.intro');
const portrait = document.querySelector('.hero .portrait');
const dial = stage.querySelector('.intro-dial');
const meter = stage.querySelector('.intro-meter');
const progress = meter.querySelector('progress');
const percentage = meter.querySelector('span');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

// Source pixels of the hands' pivot and the transparent crop in docs/ds-01.
const watch = { x: 731, y: 1269, width: 136 };
const events = new AbortController();
const animations = [];
let timeout;

function finish() {
  events.abort();
  clearTimeout(timeout);
  root.classList.remove('intro-pending');
  document.body.classList.remove('intro-revealing');
  for (const animation of animations) animation.cancel();
  stage.remove();
}

function animate(element, frames, options) {
  const animation = element.animate(frames, { fill: 'both', ...options });
  animations.push(animation);
  return animation;
}

async function openPortrait() {
  const bounds = portrait.getBoundingClientRect();
  const viewportWidth = stage.clientWidth;
  const viewportHeight = stage.clientHeight;
  // Mobile browsers may emit resize at first paint without changing the layout.
  window.addEventListener('resize', () => {
    if (stage.clientWidth !== viewportWidth || stage.clientHeight !== viewportHeight) finish();
  }, { signal: events.signal });
  const { objectFit, objectPosition } = getComputedStyle(portrait);
  const fitImage = objectFit === 'cover' ? Math.max : Math.min;
  const fit = fitImage(bounds.width / portrait.naturalWidth, bounds.height / portrait.naturalHeight);
  if (!fit) return;

  // Use the same crop and percentage position as the static portrait.
  const [alignX, alignY] = objectPosition.split(' ').map(value => parseFloat(value) / 100);
  const pivotX = (bounds.width - portrait.naturalWidth * fit) * alignX + watch.x * fit;
  const pivotY = (bounds.height - portrait.naturalHeight * fit) * alignY + watch.y * fit;
  const dialWidth = dial.getBoundingClientRect().width;
  const zoom = dialWidth / (watch.width * fit);
  const dx = stage.clientWidth / 2 - (bounds.left + pivotX);
  const dy = stage.clientHeight / 2 - (bounds.top + pivotY);
  const pivot = `${pivotX}px ${pivotY}px`;
  const frame = document.createElement('div');
  frame.className = 'intro-frame';
  Object.assign(frame.style, {
    left: bounds.left + 'px', top: bounds.top + 'px',
    width: bounds.width + 'px', height: bounds.height + 'px', transformOrigin: pivot,
  });

  const photo = portrait.cloneNode(false);
  photo.alt = '';
  frame.append(photo, dial);
  stage.insertBefore(frame, meter);
  Object.assign(dial.style, { left: pivotX + 'px', top: pivotY + 'px', width: watch.width * fit + 'px' });
  document.body.classList.add('intro-revealing');

  const move = { duration: 800, easing: 'cubic-bezier(.4,0,.16,1)' };
  const travel = animate(frame, [
    { transform: `translate(${dx}px, ${dy}px) scale(${zoom})` },
    { transform: 'translate(0, 0) scale(1)' },
  ], move);

  // The dial and its photographic surroundings travel in the same frame.
  animate(photo, [
    { clipPath: `circle(0px at ${pivot})` },
    { clipPath: `circle(${Math.hypot(bounds.width, bounds.height)}px at ${pivot})` },
  ], move);
  animate(dial, [{ opacity: 1 }, { opacity: 1, offset: .25 }, { opacity: 0 }], move);
  animate(stage.querySelector('.intro-backdrop'), [
    { opacity: 1 }, { opacity: 1, offset: .42 }, { opacity: 0 },
  ], move);
  await travel.finished;
}

async function start() {
  if (!root.classList.contains('intro-pending') || reducedMotion.matches || location.hash || scrollY) {
    finish();
    return;
  }

  const options = { signal: events.signal, passive: true };
  for (const event of ['keydown', 'pointerdown', 'wheel', 'hashchange', 'pagehide', 'scroll']) {
    window.addEventListener(event, finish, options);
  }
  reducedMotion.addEventListener('change', finish, options);
  timeout = setTimeout(finish, 3500);

  try {
    await Promise.all([dial, portrait].map(async image => {
      await image.decode();
      if (events.signal.aborted) return;
      progress.value += 1;
      percentage.textContent = (progress.value / progress.max * 100) + '%';
    }));
    if (events.signal.aborted || !root.classList.contains('intro-pending')) return;
    await animate(meter, [{ opacity: 1 }, { opacity: 0 }], { duration: 120 }).finished;
    await openPortrait();
  } catch {
    // Decoding errors and interrupted animations both lead to the static hero.
  } finally {
    finish();
  }
}

start();
