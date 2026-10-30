document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('[data-testid="menu-toggle"]');
  var nav = document.getElementById('menu-principale');
  if (toggle && nav) {
    toggle.hidden = false;
    nav.classList.add('menu-con-js');
    toggle.setAttribute('aria-label', 'Apri menu');
    toggle.addEventListener('click', function () {
      var aperto = nav.classList.toggle('aperto');
      toggle.setAttribute('aria-expanded', aperto ? 'true' : 'false');
      toggle.setAttribute('aria-label', aperto ? 'Chiudi menu' : 'Apri menu');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('aperto');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Apri menu');
      });
    });
  }

  document.querySelectorAll('[data-testid="anno-corrente"]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
