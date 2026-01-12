(function () {
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');

  const savedTheme = window.localStorage.getItem('mars-theme');
  if (savedTheme === 'light') {
    body.setAttribute('data-theme', 'light');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      const isLight = body.getAttribute('data-theme') === 'light';
      if (isLight) {
        body.removeAttribute('data-theme');
        window.localStorage.setItem('mars-theme', 'dark');
        toggle.textContent = 'Dark Mode';
        toggle.setAttribute =('aria-pressed', 'false');
      } else {
        body.setAttribute('data-theme', 'light');
        window.localStorage.setItem('mars-theme', 'light');
        toggle.textContent = 'Light Mode';
        toggle.setAttribute =('aria-pressed', 'true');
      }
    });

    const isLightNow = body.getAttribute('data-theme') === 'light';
    toggle.textContent = isLightNow ? 'Light Mode' : 'Dark Mode';
    toggle.setAttribute('aria-pressed', isLightNow);
  }
})();
