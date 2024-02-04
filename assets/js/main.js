//#region why-choose-us--animation-active
function wCUAnimationActive() {
  let items = document.querySelectorAll(".why-choose-us__item");

  items.forEach((item) => {
    item.addEventListener("mousemove", () => {
      item.classList.add("move-up");
      item.classList.remove("move-down");
    });
    item.addEventListener("mouseleave", () => {
      item.classList.add("move-down");
      item.classList.remove("move-up");
    });
  });
}
wCUAnimationActive();
//#endregion

//#region operation-center--active
function oSActive() {
  let items = document.querySelectorAll(".operation-center__item");

  items.forEach((item) => {
    item.addEventListener("mousemove", () => {
      item.classList.add("move-up");
      item.classList.remove("move-down");
    });
    item.addEventListener("mouseleave", () => {
      item.classList.add("move-down");
      item.classList.remove("move-up");
    });
  });
}
oSActive();
//#endregion
