// DOM Elements
function signupModal() {
  const signupButton = document.getElementById("signup-button");
  const signupFormModal = document.getElementById("signup-form-modal");
  const signupFormModalCloseButton = document.getElementById(
    "signup-form-modal-close-button"
  );

  function openSignupFormModal() {
    signupFormModal.classList.add("opened");
    document.body.classList.add("no-scroll");
  }
  function closeSignupFormModal() {
    signupFormModal.classList.remove("opened");
    document.body.classList.remove("no-scroll");
  }

  // control modal presence
  signupButton.addEventListener("click", openSignupFormModal);
  signupFormModalCloseButton.addEventListener("click", closeSignupFormModal);
}
