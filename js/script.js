function add() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  result = num1 + num2;
  document.getElementById("result").textContent = result;
  document.getElementById("operator").textContent = "+";
}

function subtract() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  result = num1 - num2;
  document.getElementById("result").textContent = result;
  document.getElementById("operator").textContent = "-";
}

function multiply() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  result = num1 * num2;
  document.getElementById("result").textContent = result;
  document.getElementById("operator").textContent = "x";
}

function divide() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  result = num1 / num2;
  document.getElementById("result").textContent = result;
  document.getElementById("operator").textContent = "÷";
}

function modulo() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  result = num1 % num2;
  document.getElementById("result").textContent = result;
  document.getElementById("operator").textContent = "%";
}

function clearInput() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").textContent = "0";
  document.getElementById("operator").textContent = "+";
}

function closeApp() {
  var calculatorContainer = document.getElementById("calculator-container");
  calculatorContainer.innerHTML =
    "<h2>Thank you for using this calculator app!</h2>";
}