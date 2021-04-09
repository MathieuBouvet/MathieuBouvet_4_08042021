let isMenuVisible = false;

const toggleNavigationButton = document.getElementById("toggle-navigation-button");
const siteNavbar = document.getElementById("site-navbar");

function toggleMenuVisibility() {
  isMenuVisible = !isMenuVisible;
  if (isMenuVisible) {
    siteNavbar.classList.add("menu-visible");
  } else {
    siteNavbar.classList.remove("menu-visible");
  }
}

toggleNavigationButton.addEventListener("click", toggleMenuVisibility);
