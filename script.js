/* Remember Me - Load Saved Email */
function loadRemembered() {
  var savedEmail = localStorage.getItem("savedEmail");
  if (savedEmail) {
    document.getElementById("email").value = savedEmail;
    document.getElementById("remember").checked = true;
  }
}

/* Show / Hide Password */
function togglePassword(event) {
  var pwd = document.getElementById("password");
  var text = event.target;

  if (pwd.type === "password") {
    pwd.type = "text";
    text.innerText = "Hide";
  } else {
    pwd.type = "password";
    text.innerText = "Show";
  }
}

/* Form Validation */
function validate(event) {
  event.preventDefault(); // Stop page refresh

  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var remember = document.getElementById("remember").checked;

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "" && password === "") {
    alert("Email and Password cannot be empty");
    return;
  }

  if (email === "") {
    alert("Please enter email");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (password === "") {
    alert("Please enter password");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  // Remember Me functionality
  if (remember) {
    localStorage.setItem("savedEmail", email);
  } else {
    localStorage.removeItem("savedEmail");
  }

  alert("Login Successful!");
}
