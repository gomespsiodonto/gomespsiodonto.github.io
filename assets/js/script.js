const btnOpen = document.querySelector("#menu-open");
btnOpen.addEventListener("click", (e) => {
  const header = document.querySelector("#header");
  header.classList.toggle("open-menu");
});
const btnClose = document.querySelector("#menu-close");
btnClose.addEventListener("click", (e) => {
  const header = document.querySelector("#header");
  header.classList.toggle("open-menu");
});
