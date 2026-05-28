document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "") {
      message.style.color = "red";
      message.innerText = "Name cannot be empty";
      return;
    }

    if (!email.match(emailPattern)) {
      message.style.color = "red";
      message.innerText = "Enter valid email";
      return;
    }

    if (password.length < 6) {
      message.style.color = "red";
      message.innerText = "Password must be at least 6 characters";
      return;
    }

    if (password !== confirmPassword) {
      message.style.color = "red";
      message.innerText = "Passwords do not match";
      return;
    }

    message.style.color = "green";
    message.innerText = "Signup Successful!";
  });
