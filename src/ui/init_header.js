import initAccordion from "./accordion";
import menu_init from "./modal";
import initModalWindow from "./modal_window";

const init_header = () => {
  initAccordion();
  menu_init();
  initModalWindow("leave-request");
};

export default init_header;
