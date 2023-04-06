const initModalWindow = (windowName) => {
  document
    .querySelectorAll(`.${windowName}-initiator`)
    .forEach(initiator => {
        initiator.addEventListener("click", () => {
          document
            .querySelector(`.${windowName}-modal`)
            .classList.toggle("modal-window-active");
        });
    })
    document.querySelector(`.${windowName}-close`).addEventListener("click", () => {
        document
            .querySelector(`.${windowName}-modal`)
            .classList.remove("modal-window-active");
    })
};

export default initModalWindow;
