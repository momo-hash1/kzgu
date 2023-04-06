import Swiper from "swiper";
// import Swiper styles
import "swiper/css";

const initGallery = (name) => {
  const main = new Swiper(`.${name}-thumbs`, {
    direction: "horizontal",
    slidesPerView: 10,
    breakpoints: {
      1399: {
        slidesPerView: 10,
      },
      768: {
        slidesPerView: 5,
      },
      0: {
        slidesPerView: 3,
      },
    },
    spaceBetween: 4,
  });

  const thumbs = new Swiper(`.${name}-main`, {
    direction: "horizontal",
    slidesPerView: 1,
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
};

export default initGallery