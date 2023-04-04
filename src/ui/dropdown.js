const register_dropdowns = () => {
  const dropdowns = {};
  document.querySelectorAll(".dropdown").forEach((x) => {
    dropdowns[x.dataset.name] = { element: x, onMouse: false};
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
    opened_dropdowns: 0,
    begin_pos: null,
    parent_initiator: null,
    init() {
      this.initiators.forEach((initiator) => {
        initiator.addEventListener("mouseenter", (e) => {
          if (this.cascade.length !== 0) {
            this.cascade = [];
            this.handleClose()
            this.parent_initiator.classList.remove("dropdown-active")
            this.parent_initiator = null
          }
          const to = initiator.dataset.to;
          this.cascade.push(to);
          this.begin_pos = initiator.getBoundingClientRect().left;
          this.handleOpen();
          this.opened_dropdowns += 1
          initiator.classList.add("dropdown-active");
          this.parent_initiator = initiator
        });
      });

      document
        .querySelectorAll(".dropdown-initiator-cascade")
        .forEach((initiator) => {
          initiator.addEventListener("mouseenter", (e) => {
            const to = e.target.dataset.to;
            if(this.cascade.includes(to)) return
            this.cascade.push(to);
            this.handleOpen();

          });
          // TODO: multiple cascade initiators in dropdown
        });
      // determine dropdown in over mouse or not
      Object.keys(this.dropdowns).forEach((x) => {
        const dropdown = this.dropdowns[x];

        dropdown.element.addEventListener("mouseenter", () => {
          this.dropdowns[x].onMouse = true;
        });

        dropdown.element.addEventListener("mouseleave", () => {
          this.dropdowns[x].onMouse = false;
        });
      });

      // hide all dropdowns when mouse clicked not in dropdown
      document.addEventListener("click", () => {
        if(this.parent_initiator === null) return 
        if (this.onAnyDropdown()) return;
        this.handleClose();
        this.cascade = [];
        this.parent_initiator.classList.remove("dropdown-active")
        this.parent_initiator = null
      });
    },
    handleOpen() {
      const header_rect = document
        .querySelector(".header-nav")
        .getBoundingClientRect();

      this.cascade.forEach((x, index) => {
        const dropdown = this.dropdowns[x];

        dropdown.element.style.cssText = `
            left: ${this.begin_pos + 390 * index}px;
            display: block; 
            top: ${header_rect.top +  window.scrollY + header_rect.height}px
            `;
      });
    },
    handleClose() {
      Object.values(this.dropdowns).forEach((x) => {
        x.element.style = "";
      });
      this.beginPos = null;
    },
    onAnyDropdown() {
      return false;
    },
    onDropdown(dropdown_name) {
      return this.dropdowns[dropdown_name].onMouse;
    },
  };
};
