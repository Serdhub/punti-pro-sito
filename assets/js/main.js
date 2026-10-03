document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('[data-testid="menu-toggle"]');
  var nav = document.getElementById('menu-principale');
  if (toggle && nav) {
    toggle.hidden = false;
    nav.classList.add('menu-con-js');
    toggle.addEventListener('click', function () {
      var aperto = nav.classList.toggle('aperto');
      toggle.setAttribute('aria-expanded', aperto ? 'true' : 'false');
    });
  }

  document.querySelectorAll('[data-testid="anno-corrente"]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
