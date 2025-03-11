import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function () {
  const accordion = new Accordion('.about-me-info-list', {
    duration: 400,
    openOnInit: [0],
    showMultiple: true,

    onOpen: currentElement => {
      setTimeout(() => {
        updateIcon(currentElement, 'open');
      }, 0);
    },

    onClose: currentElement => {
      setTimeout(() => {
        updateIcon(currentElement, 'close');
      }, 0);
    },
  });

  function updateIcon(element, state) {
    const icon = element.querySelector('.accordion-close-icon use');
    if (icon) {
      icon.setAttribute(
        'href',
        state === 'open'
          ? '/img/icons.svg#icon-accordion-opensvg'
          : '/img/icons.svg#icon-accordion-closesvg'
      );
    }
  }

  document.querySelectorAll('.about-me-info-item').forEach((item, index) => {
    updateIcon(item, index === 0 ? 'open' : 'close');
  });
});

//! === swiper ===

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.about-me-swiper', {
    modules: [Navigation],
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
    },
    resizeObserver: true,
    slidesPerView: 2,
    breakpoints: {
      768: { slidesPerView: 3 },
      1440: { slidesPerView: 6 },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      invert: true,
    },
    on: {
      slideChangeTransitionEnd: function () {
        document
          .querySelectorAll('.about-me-skill-item')
          .forEach(item => item.classList.remove('active'));

        let activeSlides = document.querySelectorAll(
          '.swiper-slide-active .about-me-skill-item'
        );

        activeSlides.forEach(slider => slider.classList.add('active'));
      },
    },
  });

  setTimeout(() => {
    document
      .querySelectorAll('.swiper-slide-active .about-me-skill-item')
      .forEach(item => item.classList.add('active'));
  }, 100);
});
