// DOM Elements
const signupButton = document.getElementById("signup-button");
const signupFormModal = document.getElementById("signup-form-modal");
const signupFormModalCloseButton = document.getElementById("signup-form-modal-close-button");

function openSignupFormModal() {
  signupFormModal.classList.add("opened");
}
function closeSignupFormModal() {
  signupFormModal.classList.remove("opened");
}

// control modal presence
signupButton.addEventListener("click", openSignupFormModal);
signupFormModalCloseButton.addEventListener("click", closeSignupFormModal);
