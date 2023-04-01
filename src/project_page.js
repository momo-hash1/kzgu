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

const thumbs = document.querySelectorAll(".gallery-thumbs");

mainGallerySwiper.on("slideChange", (e) => {
  thumbs.forEach((x, index_x) => {
    if (e.activeIndex == index_x) {
      x.classList.add("active");
    } else {
      x.classList.remove("active");
    }
  });
});
