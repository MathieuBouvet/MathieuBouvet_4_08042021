const signupForm = document.getElementById("signup-form");

function validateInputs(e) {
  const form = e.target;
  const isFormValid = form.checkValidity();

  form.classList.add("was-validated"); // allow us to style invalid inputs only after user submission
  if (!isFormValid) {
    e.preventDefault(); // don't send the form if it has invalid inputs
  }
}
signupForm.addEventListener("submit", validateInputs);
