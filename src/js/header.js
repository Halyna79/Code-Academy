document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.nav-menu');
  const navItem = document.querySelector('.nav-item');
  const submenu = document.getElementById('submenu');
  const scrollToFooterBtn = document.getElementById('scroll-to-footer');
  const footerSection = document.getElementById('footer');

  menuButton.addEventListener('click', function (event) {
    event.preventDefault();
    const isExpanded = navItem.classList.toggle('active');
    menuButton.setAttribute('aria-expanded', isExpanded);
    submenu.hidden = !isExpanded;
  });

  document.addEventListener('click', function (event) {
    if (!navItem.contains(event.target) && !menuButton.contains(event.target)) {
      navItem.classList.remove('active');
      submenu.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelectorAll('.submenu a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      const targetId = this.getAttribute('href').substring(1);
      navItem.classList.remove('active');
      submenu.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
});
