import initGallery from "./ui/gallery";
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";

const {thumbs} = initGallery("swiper-gallery")


document
  .querySelector(".nav-button-next")
  .addEventListener("click", () => thumbs.slideNext());
document
  .querySelector(".nav-button-prev")
  .addEventListener("click", () => thumbs.slidePrev());

const product_description = new Swiper(".product-description", {
  direction: "horizontal",
  slidesPerView: 1,
  autoHeight: true
});

const header_items = document.querySelectorAll(
  ".product-description-header .item"
);

product_description.on("slideChange", (e) => {
  header_items.forEach((x, index_x) => {
    if (e.activeIndex == index_x) {
      x.classList.add("item-active");
    } else {
      x.classList.remove("item-active");
    }
  });
})

header_items.forEach((product_item, index) => {
  product_item.addEventListener("click", () => {
    header_items.forEach((x, index_x) => {
      if (index == index_x) {
        x.classList.add("item-active");
      } else {
        x.classList.remove("item-active");
      }
    });
    product_description.slideTo(index);
  });
});
