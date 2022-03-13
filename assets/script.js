const navBar = document.querySelector(".navlinks");
const menu = document.querySelector(".hamburger");

menu.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
