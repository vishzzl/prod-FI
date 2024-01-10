document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        logo.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
        logo.classList.remove('scrolled');
      }
    });
  });
  