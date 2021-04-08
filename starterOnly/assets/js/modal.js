function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "site-header") {
    x.className += " responsive";
  } else {
    x.className = "site-header";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".signup-button");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


