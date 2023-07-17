document.addEventListener("DOMContentLoaded", () => {
  //Get Input Elements
  const billInput = document.getElementById("bill-input");
  const numOfPeople = document.getElementById("num-of-people");

  //Get Tip Btn
  const tipBtn = document.querySelectorAll(".tip-btn");
  const customTipInput = document.getElementById("custom-tip");

  //Get Tip Amount & Total Text
  const tipAmountDisplay = document.getElementById("tip-amount");
  const totalAmountDisplay = document.getElementById("total-amount");

  //Get Reset Button
  const btnReset = document.getElementById("btn-reset");

  //Tip Buttons
  tipBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
      const tip = e.target.value;
      validateInput(tip);
    });
  });

  //Custom Tip Input
  customTipInput.addEventListener("change", (e) => {
    customTipValue = e.target.value;
    console.log(customTipValue);
    if (customTipValue === "") {
      reset();
      customTipInput.value = null;
    } else {
      validateInput(customTipValue);
    }
  });

  //Reset Button
  btnReset.addEventListener("click", () => {
    reset();
    billInput.value = "";
    numOfPeople.value = "";
    customTipInput.value = null;
  });

  //Calculate Bill
  function calculateBillPerPerson(tip) {
    const people = parseFloat(numOfPeople.value);
    const bill = parseFloat(billInput.value);

    //Calculate Tip Amount per Person
    const totalTip = (bill * tip) / 100;
    const tipPerPerson = totalTip / people;

    tipAmountDisplay.innerText = tipPerPerson.toFixed(2);

    //Calculate Total Amount per Person
    const totalAmount = bill + totalTip;
    const totalAmountPerPerson = totalAmount / people;

    totalAmountDisplay.innerText = totalAmountPerPerson.toFixed(2);
  }

  //Reset Calculated Values
  function reset() {
    tipAmountDisplay.innerText = "0.00";
    totalAmountDisplay.innerText = "0.00";
  }

  // Validate Input
  function validateInput(tip) {
    if (billInput.value === "0") {
      setError(billInput, "Can't be 0");
    } else if (billInput.value === "") {
      setError(billInput, "Please insert a value");
    } else {
      setSuccess(billInput);
      calculateBillPerPerson(tip);
    }

    if (numOfPeople.value === "0") {
      setError(numOfPeople, "Can't be 0");
    } else if (numOfPeople.value === "") {
      setError(numOfPeople, "Please insert a value");
    } else {
      setSuccess(numOfPeople);
      calculateBillPerPerson(tip);
    }
  }

  //Set Error
  function setError(element, message) {
    const errorText =
      element.parentElement.parentElement.querySelector(".error-text");
    errorText.classList.remove("hidden");
    errorText.innerText = message;
    element.classList.add("error");
    reset();
  }

  //Set Success
  function setSuccess(element) {
    const errorText =
      element.parentElement.parentElement.querySelector(".error-text");
    errorText.classList.add("hidden");
    element.classList.remove("error");
  }
});
