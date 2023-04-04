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
  const slider_bottom = document.querySelector("#slider-bottom");
  const start_input = slider_bottom.querySelector(".start");
  const end_input = slider_bottom.querySelector(".end");

  slider.noUiSlider.on("update", () => {
    const range = slider.noUiSlider.get();
    start_input.value = `От ${range[0]}`;
    end_input.value = `До ${range[1]}`;
  });

  start_input.addEventListener("click", () => {
    start_input.value = slider.noUiSlider.get()[0];
    start_input.select()
  });

  end_input.addEventListener("click", () => {
    end_input.value = slider.noUiSlider.get()[1];
    end_input.select()
  });

  document.addEventListener("click", (e) => {
    const target_class = e.target.classList;
    const contains_essential_classes = target_class.contains("end") || target_class.contains("start")
    const isInput = e.target.tagName.toLowerCase() === "input"
    if (contains_essential_classes && isInput) return;

    slider.noUiSlider.set([start_input.value, end_input.value]);
    start_input.value = `От ${slider.noUiSlider.get()[0]}`;
    end_input.value = `До ${slider.noUiSlider.get()[1]}`;
  });

  end_input.addEventListener("keydown", (e) => {
    if(e.key !== "Enter") return 

    slider.noUiSlider.set([start_input.value, end_input.value]);
    start_input.value = `От ${slider.noUiSlider.get()[0]}`;
    end_input.value = `До ${slider.noUiSlider.get()[1]}`;

    end_input.blur()
  })

  start_input.addEventListener("keydown", (e) => {
    if(e.key !== "Enter") return 

    slider.noUiSlider.set([start_input.value, end_input.value]);
    start_input.value = `От ${slider.noUiSlider.get()[0]}`;
    end_input.value = `До ${slider.noUiSlider.get()[1]}`;

    start_input.blur()
  })
});

document.querySelectorAll(".checkbox-main").forEach((checkbox_main) => {
  const checkbox = checkbox_main.querySelector(".checkbox");
  checkbox_main.addEventListener("click", () => {
    checkbox.classList.toggle("checkbox-active");
    checkbox.dataset.checked = checkbox.dataset.checked ? false : true;
  });
});

initAccordion()