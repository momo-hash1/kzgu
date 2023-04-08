import noUiSlider from "nouislider";
import initAccordion from "./ui/accordion";
import menu_init from "./ui/modal";
import initModalWindow from "./ui/modal_window";

var slider = document.getElementById("slider");
import "./style/pages/catalog.scss";

document.addEventListener("DOMContentLoaded", () => {
  let maximum_price = parseInt(slider.dataset.maximum_price);
  let minimum_price = parseInt(slider.dataset.minimum_price);
  if (isNaN(maximum_price) ) {
    maximum_price = 100
  };
  if(isNaN(minimum_price)){
    minimum_price = 0
  }
  console.log(minimum_price);
  noUiSlider.create(slider, {
    start: [minimum_price, maximum_price],
    connect: true,
    range: {
      min: [minimum_price],
      max: [maximum_price],
    },
  });
  const slider_bottom = document.querySelector("#slider-bottom");
  const start_input = slider_bottom.querySelector(".start");
  const end_input = slider_bottom.querySelector(".end");

  slider.noUiSlider.on("update", () => {
    const range = slider.noUiSlider.get();
    start_input.value = `От ${Math.trunc(range[0])}`;
    end_input.value = `До ${Math.trunc(range[1])}`;
  });

  start_input.addEventListener("click", () => {
    start_input.value = Math.trunc(slider.noUiSlider.get()[0]);
    start_input.select();
  });

  end_input.addEventListener("click", () => {
    end_input.value = Math.trunc(slider.noUiSlider.get()[1]);
    end_input.select();
  });

  document.addEventListener("click", (e) => {
    const target_class = e.target.classList;
    const contains_essential_classes =
      target_class.contains("end") || target_class.contains("start");
    const isInput = e.target.tagName.toLowerCase() === "input";
    if (contains_essential_classes && isInput) return;

    slider.noUiSlider.set([start_input.value, end_input.value]);
    start_input.value = `От ${Math.trunc(slider.noUiSlider.get()[0])}`;
    end_input.value = `До ${Math.trunc(slider.noUiSlider.get()[1])}`;
  });

  end_input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    slider.noUiSlider.set([start_input.value, end_input.value]);
    start_input.value = `От ${Math.trunc(slider.noUiSlider.get()[0])}`;
    end_input.value = `До ${Math.trunc(slider.noUiSlider.get()[1])}`;

    end_input.blur();
  });

  start_input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    slider.noUiSlider.set([start_input.value, end_input.value]);
    start_input.value = `От ${Math.trunc(slider.noUiSlider.get()[0])}`;
    end_input.value = `До ${Math.trunc(slider.noUiSlider.get()[1])}`;

    start_input.blur();
  });
});

document.querySelectorAll(".checkbox-main").forEach((checkbox_main) => {
  const checkbox = checkbox_main.querySelector(".checkbox");
  checkbox_main.addEventListener("click", () => {
    checkbox.classList.toggle("checkbox-active");
    checkbox.dataset.checked = checkbox.dataset.checked ? false : true;
  });
});

initAccordion();

const showModal = (initiator, window_) => {
  const modal_window = document.querySelector("." + window_);
  document.querySelector("." + initiator).addEventListener("click", () => {
    modal_window.classList.toggle("window-active");
    document.querySelector("body").classList.toggle("hide-scroll");
  });
  modal_window
    .querySelector(".hamburger-menu")
    .addEventListener("click", () => {
      modal_window.classList.toggle("window-active");
      document.querySelector("body").classList.toggle("hide-scroll");
    });
};

showModal("show-catalog", "filters");
showModal("show-power-select", "quick-power-select");

menu_init();

initModalWindow("leave-request");
