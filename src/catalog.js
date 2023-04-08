import noUiSlider from "nouislider";
import initAccordion from "./ui/accordion";
import menu_init from "./ui/modal";
import initModalWindow from "./ui/modal_window";
import "./style/pages/catalog.scss";

const register_slider = (slider_element) => {
  let maximum_price = parseInt(slider_element.dataset.maximum_price);
  let minimum_price = parseInt(slider_element.dataset.minimum_price);
  if (isNaN(maximum_price)) {
    maximum_price = 100;
  }
  if (isNaN(minimum_price)) {
    minimum_price = 0;
  }
  const slider_main = noUiSlider.create(slider_element, {
    start: [minimum_price, maximum_price],
    connect: true,
    range: {
      min: [minimum_price],
      max: [maximum_price],
    },
  });
  const slider_bottom = document.querySelector(
    `[data-for="${slider_element.dataset.sliderName}"]`
  );

  const start_input = slider_bottom.querySelector(".start");

  const end_input = slider_bottom.querySelector(".end");

  slider_main.on("update", () => {
    const range = slider_main.get();
    start_input.value = `От ${Math.trunc(range[0])}`;
    end_input.value = `До ${Math.trunc(range[1])}`;
  });

  start_input.addEventListener("click", () => {
    start_input.value = Math.trunc(slider_main.get()[0]);
    start_input.select();
  });

  end_input.addEventListener("click", () => {
    end_input.value = Math.trunc(slider_main.get()[1]);
    end_input.select();
  });

  document.addEventListener("click", (e) => {
    const target_class = e.target.classList;
    const contains_essential_classes =
      target_class.contains("end") || target_class.contains("start");

    const isInput = e.target.tagName.toLowerCase() === "input";

    if (contains_essential_classes && isInput) return;

    slider_main.set([start_input.value, end_input.value]);
    start_input.value = `От ${Math.trunc(slider_main.get()[0])}`;
    end_input.value = `До ${Math.trunc(slider_main.get()[1])}`;
  });

  end_input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    slider.noUiSlider.set([start_input.value, end_input.value]);
    start_input.value = `От ${Math.trunc(slider_main.get()[0])}`;
    end_input.value = `До ${Math.trunc(slider_main.get()[1])}`;

    end_input.blur();
  });

  start_input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    slider.noUiSlider.set([start_input.value, end_input.value]);
    start_input.value = `От ${Math.trunc(slider_main.get()[0])}`;
    end_input.value = `До ${Math.trunc(slider_main.get()[1])}`;

    start_input.blur();
  });
  return slider;
};

document.addEventListener("DOMContentLoaded", () => {
  const sliders = [...document.querySelectorAll(".slider")];
  sliders.map((slider) => {
    if (slider.dataset.sliderName) {
      return register_slider(slider);
    }
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
