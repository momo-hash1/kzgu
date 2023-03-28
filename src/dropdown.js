const register_dropdowns = () => {
  const dropdowns = {};
  document.querySelectorAll(".dropdown").forEach((x) => {
    console.log(x.dataset.name);
  });
  return dropdowns
};


export {register_dropdowns}