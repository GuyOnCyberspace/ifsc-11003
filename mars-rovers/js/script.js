(function () {
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const KEY = 'mars-theme';
  const prefersLight = () =>
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches;

  function applyTheme(theme) {
    const isLight = theme === 'light';

    if (isLight) {
      body.setAttribute('data-theme', 'light');
    } else {
      body.removeAttribute('data-theme'); // dark = default
    }

    toggle.textContent = isLight ? 'Light Mode' : 'Dark Mode';
    toggle.setAttribute('aria-label', `Theme: ${isLight ? 'light' : 'dark'}`);
    toggle.setAttribute('aria-pressed', String(isLight));
  }

  const saved = window.localStorage.getItem(KEY);
  const initial = saved || (prefersLight() ? 'light' : 'dark');
  applyTheme(initial);

  toggle.addEventListener('click', function () {
    const next = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    window.localStorage.setItem(KEY, next);
    applyTheme(next);
  });
})();


