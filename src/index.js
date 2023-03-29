const projectPrevBtn = document.querySelector(".swiper-header-project-prev");
const projectNextBtn = document.querySelector(".swiper-header-project-next");
const productPrevBtn = document.querySelector(".swiper-header-product-prev");
const productNextBtn = document.querySelector(".swiper-header-product-next");

const swiper = new Swiper(".popular-product-swiper", {
  direction: "horizontal",
  slidesPerView: 4,
  simulateTouch: false,
  spaceBetween: 4,
});

const projectsSwiper = new Swiper(".completed-projects-swiper", {
  direction: "horizontal",
  slidesPerView: 2,
  simulateTouch: false,
  spaceBetween: 4,
});

productNextBtn.addEventListener("click", () => swiper.slideNext());
productPrevBtn.addEventListener("click", () => swiper.slidePrev());
projectNextBtn.addEventListener("click", () => projectsSwiper.slideNext());
projectPrevBtn.addEventListener("click", () => projectsSwiper.slidePrev());

const dropdowns = initDropdowns();
dropdowns.init();


document.querySelector("#expand-seo").addEventListener("click", (e) => {
  document.querySelector("#seo-text-paragraph").classList.toggle("show")
  console.log(document.querySelector("#seo-text-paragraph").classList);
})