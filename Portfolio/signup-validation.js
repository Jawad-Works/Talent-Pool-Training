document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    console.log("Form submit event triggered");
    event.preventDefault(); // Prevents the default form submission

    // Reset errors and borders
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    // Reset border colors
    nameInput.style.borderColor = "";
    emailInput.style.borderColor = "";
    passwordInput.style.borderColor = "";

    // Get form values
    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    // Validate name
    if (name.trim() === "") {
      document.getElementById("nameError").textContent = "Name is required";
      nameInput.style.borderColor = "red";
      return false; // Prevents form submission
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      document.getElementById("emailError").textContent = "Email is required";
      emailInput.style.borderColor = "red";
      return false; // Prevents form submission
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent =
        "Invalid email address";
      emailInput.style.borderColor = "red";
      return false; // Prevents form submission
    }

    // Validate password
    if (password.trim() === "") {
      document.getElementById("passwordError").textContent =
        "Password is required";
      passwordInput.style.borderColor = "red";
      return false; // Prevents form submission
    } else if (password.trim().length < 8) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters";
      passwordInput.style.borderColor = "red";
      return false; // Prevents form submission
    }

    // If all validations pass, you can perform further actions
    document.getElementById("successMessage").textContent =
      "Registration Successful 🙂";
    clearForm();
    return true;
  });

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}
