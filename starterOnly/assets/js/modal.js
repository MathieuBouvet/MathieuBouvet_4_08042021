let isMenuVisible = false;
const siteNavbar = document.getElementById("site-navbar");

function toggleMenuVisibility() {
  isMenuVisible = !isMenuVisible;
  if (isMenuVisible) {
    siteNavbar.classList.add("menu-visible");
  } else {
    siteNavbar.classList.remove("menu-visible");
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".signup-button");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach(btn => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
