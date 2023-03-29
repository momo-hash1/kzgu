const register_dropdowns = () => {
  const dropdowns = {};
  document.querySelectorAll(".dropdown").forEach((x) => {
    dropdowns[x.dataset.name] = { element: x };
  });
  return dropdowns;
};

const register_dropdown_initiators = () => {
  return [...document.querySelectorAll(".dropdown-initiator")];
};

const initDropdowns = () => {
  return {
    dropdowns: register_dropdowns(),
    initiators: register_dropdown_initiators(),
    cascade: [],
    init() {
      this.initiators.forEach((initiator) => {
        initiator.addEventListener("mouseenter", (e) => {
          const to = initiator.dataset.to;
          this.cascade.push(to);
          this.handleOpen(initiator);
        });
        initiator.addEventListener("mouseleave", () => {
          this.cascade.pop()
          this.handleClose()
        })
      });

      Object.keys(this.dropdowns).forEach((x) => {
        const dropdown = this.dropdowns[x];
        dropdown.element.addEventListener("mouseenter", () => {
          this.dropdowns[x].onMouse = true;
        });
      });

      Object.keys(this.dropdowns).forEach((x) => {
        const dropdown = this.dropdowns[x];
        dropdown.element.addEventListener("mouseleave", () => {
          this.dropdowns[x].onMouse = false;
          const next = this.cascade.pop();
          if (this.dropdowns[this.cascade.at(-1)]?.onMouse) {
            next.style.display = "none";
          }else{
            this.cascade = []
            this.handleClose()
          }
        });
      });
    },
    handleOpen() {
      const header_rect = document
        .querySelector(".header-nav")
        .getBoundingClientRect();
      console.log(this.cascade);
      const dropdown = this.dropdowns[this.cascade.at(-1)];

      dropdown.element.style.cssText = `
        left: ${header_rect.left + (390 * (this.cascade.length - 1))}px;
        display: block; 
        top: ${header_rect.top + header_rect.height}px
        `;
    },
    handleClose(){
      Object.values(this.dropdowns).forEach((x) => {
        console.log(x);
       x.element.style = ''
      });
    }
  };
};