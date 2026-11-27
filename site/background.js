import runtimeUrl from './assets/asimov/unicornStudio.umd.js?url';
import sceneUrl from './assets/asimov/aura-scene.js?url';

const stage = document.querySelector('.site-backdrop__scene');
const motion = matchMedia('(prefers-reduced-motion: no-preference)');
let assets;
let scene;
let starting = false;

function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.append(script);
  });
}

function supportsWebGL() {
  try {
    const context = document.createElement('canvas').getContext('webgl2', { failIfMajorPerformanceCaveat: true });
    if (!context) return false;
    context.getExtension('WEBGL_lose_context')?.loseContext();
    return true;
  } catch {
    return false;
  }
}

function loadSceneAssets() {
  return Promise.all([loadScript(runtimeUrl), loadScript(sceneUrl)]).then(() => {
    // Unicorn Studio reads the embedded scene data directly from the DOM.
    const data = document.createElement('script');
    data.type = 'application/json';
    data.id = 'asimov-aura-scene';
    data.textContent = JSON.stringify(window.AsimovAuraScene);
    document.head.append(data);
  });
}

function stopBackground() {
  if (scene) window.UnicornStudio.destroy();
  scene = undefined;
}

async function updateBackground() {
  if (!motion.matches) {
    stopBackground();
    return;
  }
  if (scene || starting || navigator.connection?.saveData) return;
  if (!assets && !supportsWebGL()) return;

  starting = true;
  try {
    assets ??= loadSceneAssets();
    await assets;
    if (!motion.matches) return;

    scene = await window.UnicornStudio.addScene({
      element: stage,
      filePath: 'asimov-aura-scene',
      dpi: 1,
      fps: 30,
      scale: 1,
      production: true,
      lazyLoad: false,
      fixed: true,
      interactivity: { mouse: { disabled: true } },
    });
    if (!motion.matches) stopBackground();
  } catch {
    window.UnicornStudio?.destroy?.();
    stage.replaceChildren();
  } finally {
    starting = false;
  }
}

motion.addEventListener('change', updateBackground);

if ('requestIdleCallback' in window) requestIdleCallback(updateBackground, { timeout: 800 });
else requestAnimationFrame(updateBackground);
