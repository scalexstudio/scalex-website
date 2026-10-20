// SCALE X — small progressive enhancements; core content works without JavaScript.
(function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        const id = link.getAttribute('href');
        const target = id && document.querySelector(id);
        if (target) {
          event.preventDefault();
          const header = document.querySelector('.site-header');
          const offset = (header ? header.getBoundingClientRect().height : 0) + 10;
          const y = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
          if (history.replaceState) history.replaceState(null, '', id);
        }
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('a[href^="#"]:not(.nav-links a)').forEach(function (link) {
    link.addEventListener('click', function (event) {
      const id = link.getAttribute('href');
      const target = id && document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      const header = document.querySelector('.site-header');
      const offset = (header ? header.getBoundingClientRect().height : 0) + 10;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      if (history.replaceState) history.replaceState(null, '', id);
    });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();