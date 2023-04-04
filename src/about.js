import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const reviewSwiper = new Swiper(".partner-review-swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  simulateTouch: false,
});

document
  .querySelector(".swiper-header-review-prev")
  .addEventListener("click", () => reviewSwiper.slidePrev());
document
  .querySelector(".swiper-header-review-next")
  .addEventListener("click", () => reviewSwiper.slideNext());

const thumbsSwiper = new Swiper(".swiper-gallery-thumbs", {
  direction: "horizontal",
  slidesPerView: 10,
  breakpoints: {
    768: {
      slidesPerView: 5,
    },
    0: {
      slidesPerView: 3,
    }
  },
  spaceBetween: 4,
});

const mainGallerySwiper = new Swiper(".swiper-gallery-main", {
  direction: "horizontal",
  slidesPerView: 1,
  thumbs: {
    swiper: thumbsSwiper
  }
});
