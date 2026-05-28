document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let message = document.getElementById("message");

  if (name === "" || email === "" || password === "") {
    message.innerText = "Error: All fields are required!";
    message.style.color = "red";
  } else {
    message.innerText = "Success: Form submitted successfully!";
    message.style.color = "green";
  }
});
