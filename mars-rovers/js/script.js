document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');

  if (!toggle) {
    console.warn('Theme toggle button not found.');
    return;
  }

  const savedTheme = localStorage.getItem('mars-theme');
  if (savedTheme === 'light') body.setAttribute('data-theme', 'light');

  const syncLabel = () => {
    const isLight = body.getAttribute('data-theme') === 'light';
    toggle.textContent = isLight ? 'Light Mode' : 'Dark Mode';
    toggle.setAttribute('aria-pressed', String(isLight));
  };

  toggle.addEventListener('click', () => {
    const isLight = body.getAttribute('data-theme') === 'light';
    if (isLight) {
      body.removeAttribute('data-theme');
      localStorage.setItem('mars-theme', 'dark');
    } else {
      body.setAttribute('data-theme', 'light');
      localStorage.setItem('mars-theme', 'light');
    }
    syncLabel();
  });

  syncLabel();
});

