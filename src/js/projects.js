import Swiper from 'swiper/bundle';
import 'swiper/css';

const projectSwiper = document.querySelector('.project-swiper')

const swiper = new Swiper(projectSwiper, {
  speed: 400,
  spaceBetween: 100,
});

const rightBtn = document.querySelector('.next');
const leftBtn = document.querySelector('.back');

rightBtn.addEventListener('click',() => {
    swiper.slideNext()
    if (swiper.isEnd) {
       rightBtn.setAttribute('disabled', 'disabled')
    }
    if (!swiper.isBeginning) {
        leftBtn.removeAttribute('disabled')
    }
}
)
leftBtn.addEventListener('click',() => {
    swiper.slidePrev()
    if (!swiper.isEnd) {
        rightBtn.removeAttribute('disabled')
    }
    if (swiper.isBeginning) {
       leftBtn.setAttribute('disabled', 'disabled')
    }
}
) 
if (swiper.isBeginning) {
       leftBtn.setAttribute('disabled', 'disabled')
    }
