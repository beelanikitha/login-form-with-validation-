function validate() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var remember = document.getElementById("remember").checked;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" && password === "") {
        alert("Email and Password cannot be empty");
    }
    else if (email === "") {
        alert("Please enter email");
    }
    else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
    }
    else if (password === "") {
        alert("Please enter password");
    }
    else if (password.length < 6) {
        alert("Password must be at least 6 characters");
    }
    else {
        if (remember) {
            localStorage.setItem("savedEmail", email);
        } else {
            localStorage.removeItem("savedEmail");
        }
        alert("Login Successful!");
    }
}

/* Remember Me */
function loadRemembered() {
    var savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
        document.getElementById("email").value = savedEmail;
        document.getElementById("remember").checked = true;
    }
}

/* Show / Hide Password */
function togglePassword() {
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
