import Swiper from "swiper";
// import Swiper styles
import "swiper/css";

const initGallery = (name, amountSlides=10) => {
  const thumbs = new Swiper(`.${name}-thumbs`, {
    direction: "horizontal",
    slidesPerView: 10,
    breakpoints: {
      1399: {
        slidesPerView: amountSlides,
      },
      768: {
        slidesPerView: 5,
      },
      0: {
        slidesPerView: 3,
      },
    },
    spaceBetween: 4,
    simulateTouch: true
  });

  
  const main = new Swiper(`.${name}-main`, {
    direction: "horizontal",
    slidesPerView: 1,
  });
  main.on("update", (e) => {
    thumbs.slides[0].classList.add("slide-active")
  })

  main.on("slideChange", (e) => {
    thumbs.slides.forEach((slide, index) => {
      if(e.activeIndex === index){
        slide.classList.add("slide-active")
      }else{
        slide.classList.remove("slide-active")
      }
    })
  })
  thumbs.on("click", (e) => {
    if(e.clickedIndex > main.slides.length-1) return
    e.slides.forEach((slide, index) => {
      if(e.clickedIndex === index){
        slide.classList.add("slide-active")
      }else{
        slide.classList.remove("slide-active")
      }
    })
    main.slideTo(e.clickedIndex)
  })

  return {main, thumbs}
};

export default initGallery