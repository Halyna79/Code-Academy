document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const closeButton = document.querySelector('.close');
  const mobileBox = document.querySelector('.mobile-box');
  const body = document.body;
  const menuLinks = document.querySelectorAll('.mob-nav a');
  const mobileOrderButton = document.querySelector(
    '.mobile-box .header-button'
  );

  function openMenu() {
    body.classList.add('menu-open', 'no-scroll');
    mobileBox.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    body.classList.remove('menu-open', 'no-scroll');
    mobileBox.setAttribute('aria-hidden', 'true');
  }

  if (burger) {
    burger.addEventListener('click', openMenu);
    burger.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        openMenu();
      }
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', closeMenu);
    closeButton.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        closeMenu();
      }
    });
  }

  menuLinks.forEach(item => {
    item.addEventListener('click', closeMenu);
    item.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        closeMenu();
      }
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  if (mobileOrderButton) {
    mobileOrderButton.addEventListener('click', function (event) {
      closeMenu();
    });

    mobileOrderButton.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        closeMenu();
      }
    });
  }
});
