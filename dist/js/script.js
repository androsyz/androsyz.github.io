const html = document.querySelector("html");

// Menu
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");
const arrowOnMenu = document.querySelector("#arrow");
const viewMoreButton = document.querySelector("#view-button");
const arrowOnViewMore = document.querySelector("#arrow-view-more");
const additionProject = document.querySelector("#addition-project");
const textMore = document.querySelector("#text-view-button");

// Click on menu
menuButton.addEventListener("click", () => {
  arrowOnMenu.classList.toggle("menu-active");
  navMenu.classList.toggle("hidden");
});

// Click on view more
viewMoreButton.addEventListener("click", () => {
  arrowOnViewMore.classList.toggle("more-menu-active");
  additionProject.classList.toggle("hidden");
  textMore.innerHTML === "more" ? textMore.innerHTML = "less" : textMore.innerHTML = "more";
});

// Toggle Button
const toggleButton = document.getElementById("toggle");
const checkbox = document.getElementById("checkbox");
const firstIcon = document.getElementById("first-icon");
const secondIcon = document.getElementById("second-icon");

toggleButton.addEventListener("click", function () {
  checkbox.checked = !checkbox.checked;

  if (checkbox.checked) {
    html.classList.add("dark");
    firstIcon.classList.add("hidden");
    secondIcon.classList.remove("hidden");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    firstIcon.classList.remove("hidden");
    secondIcon.classList.add("hidden");
    localStorage.theme = "light";
  }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  checkbox.checked = true;
} else {
  checkbox.checked = false;
}
