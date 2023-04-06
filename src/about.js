import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
import initGallery from "./ui/gallery";

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

initGallery("swiper-gallery")
