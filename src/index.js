import initAccordion from "./ui/accordion";
import menu_init from "./ui/modal";
import Swiper from "swiper";
import './style/pages/index.scss'

const projectPrevBtn = document.querySelector(".swiper-header-project-prev");
const projectNextBtn = document.querySelector(".swiper-header-project-next");
const productPrevBtn = document.querySelector(".swiper-header-product-prev");
const productNextBtn = document.querySelector(".swiper-header-product-next");

const swiper = new Swiper(".popular-product-swiper", {
  direction: "horizontal",
  slidesPerView: 4,
  simulateTouch: false,
  spaceBetween: 4,
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

const projectsSwiper = new Swiper(".completed-projects-swiper", {
  direction: "horizontal",
  slidesPerView: 2,
  simulateTouch: false,
  spaceBetween: 4,
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

productNextBtn.addEventListener("click", () => swiper.slideNext());
productPrevBtn.addEventListener("click", () => swiper.slidePrev());
projectNextBtn.addEventListener("click", () => projectsSwiper.slideNext());
projectPrevBtn.addEventListener("click", () => projectsSwiper.slidePrev());

document.querySelector("#expand-seo").addEventListener("click", (e) => {
  document.querySelector("#seo-text-paragraph").classList.toggle("show");
  console.log(document.querySelector("#seo-text-paragraph").classList);
});

const first_section_swiper = new Swiper(".first-section", {
  direction: "horizontal",
  slidesPerView: 1,
  simulateTouch: false,
});

const lead_slides = document.querySelectorAll(".lead-slide");

const toggleActiveSlides = (index) => {
  lead_slides.forEach((x, index_x) => {
    if (index == index_x) {
      x.classList.add("active");
    } else {
      x.classList.remove("active");
    }
  });
};

const scrollToActiveSlide = () => {
  const parent = document.querySelector(".lead-section-slides");
  let offset = 0;
  let activeFound = false;
  lead_slides.forEach((x, index) => {
    if (x.classList.contains("active")) {
      activeFound = true;
    }
    if (activeFound) return;

    offset += x.getBoundingClientRect().width + 20 * index;
  });

  parent.scrollTo(offset, 0);
};

first_section_swiper.on("slideChange", (e) => {
  toggleActiveSlides(e.activeIndex);
});

lead_slides.forEach((lead_slide, index) => {
  lead_slide.addEventListener("click", () => {
    toggleActiveSlides(index);
    scrollToActiveSlide();
    first_section_swiper.slideTo(index);
  });
});

initAccordion();
menu_init();
