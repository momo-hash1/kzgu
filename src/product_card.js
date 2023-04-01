const thumbsSwiper = new Swiper(".swiper-gallery-thumbs", {
  direction: "horizontal",
  slidesPerView: 10,
  spaceBetween: 4,
});

const mainGallerySwiper = new Swiper(".swiper-gallery-main", {
  direction: "horizontal",
  slidesPerView: 1,
  thumbs: {
    swiper: thumbsSwiper,
  },
});

document
  .querySelector(".nav-button-next")
  .addEventListener("click", () => thumbsSwiper.slideNext());
document
  .querySelector(".nav-button-prev")
  .addEventListener("click", () => thumbsSwiper.slidePrev());

const product_description = new Swiper(".product-description", {
  direction: "horizontal",
  slidesPerView: 1,
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
