import Swiper from 'swiper/bundle';
import 'swiper/css';

const projectSwiper = new Swiper('.projects-swiper', {
  speed: 400,
  spaceBetween: 100,
  navigation: {
    prevEl: '.projects-swiper-prev',
    nextEl: '.projects-swiper-next',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

});
