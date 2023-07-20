const form = document.getElementById("form");
const email = document.getElementById("email");
const submit = document.getElementById("submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInput();
});

function setError(element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-text");
  const iconError = inputControl.querySelector(".icon-error");

  errorDisplay.innerText = message;
  errorDisplay.classList.remove("green");
  iconError.classList.add("display");
  inputControl.classList.add("error");
}

function setSuccess(element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-text");
  const iconError = inputControl.querySelector(".icon-error");

  errorDisplay.innerText = "Congrats !";
  errorDisplay.classList.add("green");
  iconError.classList.remove("display");
  inputControl.classList.remove("error");
}

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLocaleLowerCase());
}

function validateInput() {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Email cannot be empty");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Looks like this is not an email");
  } else {
    setSuccess(email);
  }
}
