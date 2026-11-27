const root = document.documentElement;
const stage = document.querySelector('.intro');
const portrait = document.querySelector('.hero .portrait');
const dial = stage.querySelector('.intro-dial');
const studioWatch = stage.querySelector('.intro-watch');
const meter = stage.querySelector('.intro-meter');
const progress = meter.querySelector('progress');
const percentage = meter.querySelector('span');
const loadingDuration = 2500;
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
  frame.style.setProperty('--dial-width', watch.width * fit + 'px');
  for (const image of [dial, studioWatch]) {
    Object.assign(image.style, { left: pivotX + 'px', top: pivotY + 'px' });
  }
  frame.append(photo, dial, studioWatch);
  stage.insertBefore(frame, meter);
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
  if (studioWatch.hidden) {
    animate(dial, [{ opacity: 1 }, { opacity: 1, offset: .25 }, { opacity: 0 }], move);
  } else {
    animate(studioWatch, [{ opacity: 1 }, { opacity: 0, offset: .53 }, { opacity: 0 }], move);
    animate(dial, [{ opacity: 0 }, { opacity: 1, offset: .29 }, { opacity: 0, offset: .73 }, { opacity: 0 }], move);
  }
  animate(stage.querySelector('.intro-backdrop'), [
    { opacity: 1 }, { opacity: 1, offset: .42 }, { opacity: 0 },
  ], move);
  await travel.finished;
}

function loadPortrait() {
  const started = performance.now();
  const { signal } = events;
  let decoded = false;
  let frame;

  const studio = studioWatch.decode().catch(() => {
    studioWatch.hidden = true;
    stage.classList.add('is-watch-fallback');
  });
  const images = Promise.all([studio, dial.decode(), portrait.decode()]).then(() => {
    decoded = true;
  });
  const presentation = new Promise(resolve => {
    const stop = () => {
      cancelAnimationFrame(frame);
      resolve();
    };
    signal.addEventListener('abort', stop, { once: true });

    function update(now) {
      const elapsed = Math.max(0, now - started);
      const value = Math.min(decoded ? 100 : 94, Math.floor(elapsed / loadingDuration * 100));
      if (value !== progress.value) {
        progress.value = value;
        percentage.textContent = value + '%';
      }
      if (value === 100) {
        signal.removeEventListener('abort', stop);
        resolve();
      } else {
        frame = requestAnimationFrame(update);
      }
    }

    frame = requestAnimationFrame(update);
  });

  return Promise.all([images, presentation]);
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
  timeout = setTimeout(finish, 5000);

  try {
    await loadPortrait();
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
