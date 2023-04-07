import Swiper from "swiper";
import initGallery from "./ui/gallery";
import "./style/pages/about.scss";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

const reviewSwiper = new Swiper(".partner-review-swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  simulateTouch: false,
});

const partnerSwiper = new Swiper(".partner-info-swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  allowTouchMove: false
});

reviewSwiper.on("slideChange", (e) => {
  partnerSwiper.slideTo(e.activeIndex)
})

document
  .querySelector(".swiper-header-review-prev")
  .addEventListener("click", () => reviewSwiper.slidePrev());
document
  .querySelector(".swiper-header-review-next")
  .addEventListener("click", () => reviewSwiper.slideNext());

initGallery("swiper-gallery");

const video_window = document.querySelector(".video video");
const video_parent = document.querySelector(".watch-video");

document.querySelector(".play-button").addEventListener("click", () => {
  video_parent.classList.add("show-video");
  video_window.play();
});

let its_seeked = false;

video_window.addEventListener("pause", () => {
  if (video_window.seeking) return;
  video_parent.classList.remove("show-video");
});
video_window.addEventListener("seeking", () => {
  its_seeked = true;
  console.log(video_window.paused);
});

video_window.addEventListener("seeked", () => {});
