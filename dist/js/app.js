const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navList = document.getElementsByClassName("nav__list")[0];

toggleButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});
