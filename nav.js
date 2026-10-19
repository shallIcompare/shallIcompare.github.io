/* Closes the Projects dropdown after a link in it is chosen,
   on a click elsewhere on the page, and on the Escape key. */

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
