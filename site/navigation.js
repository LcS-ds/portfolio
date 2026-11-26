const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav');
const compact = window.matchMedia('(max-width: 48rem)');

function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
}

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});

navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (link && compact.matches) {
    closeMenu();
    document.getElementById(link.hash.slice(1)).focus({ preventScroll: true });
  }
});

compact.addEventListener('change', closeMenu);
document.documentElement.classList.add('menu-ready');
