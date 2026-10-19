/* Site menu behaviour.
   - On narrow screens the menu button opens and closes the menu.
   - The Projects dropdown closes after a link in it is chosen,
     on a click elsewhere on the page, and on the Escape key.
   - The phone menu also closes after a link is chosen. */

document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  if (!header || !toggle) return;

  function setOpen(open) {
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function () {
    setOpen(!header.classList.contains('nav-open'));
  });

  header.querySelectorAll('.site-nav a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && header.classList.contains('nav-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
});

document.addEventListener('click', function (event) {
  document.querySelectorAll('details.nav-menu[open]').forEach(function (menu) {
    if (!menu.contains(event.target) || event.target.closest('a')) {
      menu.removeAttribute('open');
    }
  });
});

document.addEventListener('keydown', function (event) {
  if (event.key !== 'Escape') return;
  document.querySelectorAll('details.nav-menu[open]').forEach(function (menu) {
    menu.removeAttribute('open');
    menu.querySelector('summary').focus();
  });
});
