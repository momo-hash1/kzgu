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

const first_section_swiper = new Swiper(".first-section", {
  direction: "horizontal",
  slidesPerView: 1,
  simulateTouch: false,
});
const lead_slides = document.querySelectorAll(".lead-slide")

lead_slides.forEach((lead_slide, index) => {
  lead_slide.addEventListener("click", () => {
    lead_slides.forEach((x, index_x) => {
      if (index == index_x) {
        x.classList.add("active");
      } else {
        x.classList.remove("active");
      }
    });
    first_section_swiper.slideTo(index);
  });
});
