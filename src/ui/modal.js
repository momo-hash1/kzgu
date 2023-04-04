const menu_initiator = document.querySelector(".hamburger-menu");

menu_initiator.addEventListener("click", () => {
  menu_initiator.classList.toggle("hamburger-menu-active");

  document.querySelector("body").classList.toggle("modal-active");
});
