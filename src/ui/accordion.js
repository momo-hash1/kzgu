const initAccordion = () => {
  document.querySelectorAll(".accordion-item").forEach((accordion) => {
    const accordionInitiator = accordion.querySelector(".accordion-initiator")
    const accordionHeader = accordion.querySelector(".accordion-header")
    const accordionBody = accordion.querySelector(".accordion-body")
    accordionInitiator.addEventListener("click", () => {
      if (accordionHeader.style.borderBottom === "none") {
        accordionHeader.style = null;
      } else {
        accordionHeader.style.borderBottom = "none";
      }
      accordionHeader.classList.toggle("accordion-header-active");
      accordionBody.classList.toggle("accordion-body-active");
    });
  });
};
