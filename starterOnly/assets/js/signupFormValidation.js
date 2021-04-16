function signupFormValidation() {
  const signupForm = document.getElementById("signup-form");
  const submitFeedback = document.getElementById("submit-feedback");

  function validateInputs(e) {
    const form = e.target;
    const isFormValid = form.checkValidity();

    form.classList.add("was-validated"); // allow us to style invalid inputs only after user submission

    e.preventDefault(); // don't send the form;

    if (isFormValid) {
      submitFeedback.classList.add("visible"); // show the submit message if the form is valid
    }
  }
  signupForm.addEventListener("submit", validateInputs);
}
