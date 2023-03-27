import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

var slider = document.getElementById("slider");

document.addEventListener("DOMContentLoaded", () => {
  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
  });
});

document.querySelectorAll(".checkbox").forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    checkbox.classList.toggle("checkbox-active");
    checkbox.dataset.checked = checkbox.dataset.checked ? false : true;
  });
});

document.querySelectorAll(".accordion-header").forEach((accordion) => {
  accordion.addEventListener("click", () => {
    console.log(accordion.style);
    if (accordion.style.borderBottom === "none") {
      accordion.style = null;
    } else {
      accordion.style.borderBottom = "none";
    }
    accordion.parentElement.classList.toggle("accordion-active");
  });
});
