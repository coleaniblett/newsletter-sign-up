const handleClick = () => {
  const EMAIL_FORMAT = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  let userInput = document.getElementById('email-input').value,
    main = document.getElementById('main'),
    form = document.getElementById('sign-up-form');

  // alert user if no input is given
  if (userInput.length === 0) {
    window.alert("Please enter an email");
    return;
  }
  // alert user if input is not formatted correctly
  if (!EMAIL_FORMAT.test(userInput)) {
    window.alert("Please enter a valid email");
    return;
  }
  main.removeChild(form);
  const successMessage = document.createElement("div"),
    successImage = document.createElement("img"),
    successText = document.createElement("div"),
    successTitle = document.createElement("h1"),
    successDesc = document.createElement("p"),
    successButton = document.createElement("button");
  successImage.src = "./assets/images/icon-success.svg";
  successImage.id = "success-icon";
  successText.id = "success-text";
  successButton.id = "success-button";
  successTitle.textContent = "Thanks for subscribing!";
  successDesc.textContent = "A confirmation email has been sent to" +
  " ash@loremcompany.com. Please open it and click the button inside to " +
  "confirm your subscription.";
  successButton.textContent = "Dismiss message";
  successText.appendChild(successImage);
  successText.appendChild(successTitle);
  successText.appendChild(successDesc);
  successMessage.appendChild(successText);
  successMessage.appendChild(successButton);
  successMessage.id = "success-message";
  main.appendChild(successMessage);
}