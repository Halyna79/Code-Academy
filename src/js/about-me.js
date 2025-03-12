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
          ? '/Code-Academy/assets/icons-BXQt0PIq.svg#icon-accordion-opensvg'
          : '/Code-Academy/assets/icons-BXQt0PIq.svg#icon-accordion-closesvg'
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
    loopAddBlankSlides: true,
    // loopAdditionalSlides: 10,
    navigation: {
      nextEl: '.swiper-button-next',
    },
    // resizeObserver: true,
    // observer: true,
    // observeParents: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      320: { slidesPerView: 2 },
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
      init: function () {
        let firstActiveSlide = document.querySelector(
          '.about-me-swiper .swiper-slide.swiper-slide-active'
        );
        if (firstActiveSlide) {
          firstActiveSlide.classList.add('isActive');
        }
      },

      slideChangeTransitionEnd: function () {
        document
          .querySelectorAll('.about-me-swiper .swiper-slide')
          .forEach(function (slide) {
            slide.classList.remove('isActive');
          });

        let activeSlide = document.querySelector(
          '.about-me-swiper .swiper-slide.swiper-slide-active'
        );
        if (activeSlide) {
          activeSlide.classList.add('isActive');
        }
      },
    },
  });
});
