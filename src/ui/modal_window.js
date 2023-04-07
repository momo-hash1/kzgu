const initModalWindow = (windowName) => {
  document
    .querySelectorAll(`.${windowName}-initiator`)
    .forEach(initiator => {
        initiator.addEventListener("click", () => {
          document
            .querySelector(`.${windowName}-modal`)
            .classList.toggle("modal-window-active");
            document.querySelector("body").style.overflow = "hidden"
        });
    })
    document.querySelector(`.${windowName}-close`).addEventListener("click", () => {
        document
            .querySelector(`.${windowName}-modal`)
            .classList.remove("modal-window-active");
            document.querySelector("body").style.overflow = ""
    })
};

export default initModalWindow;
