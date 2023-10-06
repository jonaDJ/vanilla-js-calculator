let display = document.getElementById("display");
let expression = "";

function appendToDisplay(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = "";
  display.value = "";
}

function clearEntry() {
  expression = expression.slice(0, -1);
  display.value = expression;
}

function backspace() {
  expression = expression.slice(0, -1);
  display.value = expression;
}

function calculateResult() {
  try {
    expression = eval(expression);
    display.value = expression;
  } catch (error) {
    display.value = "Error";
  }
}

function calculateSquareRoot() {
  try {
    expression = Math.sqrt(eval(expression));
    display.value = expression;
  } catch (error) {
    display.value = "Error";
  }
}

function calculateExponentiation(power) {
  try {
    expression = eval(expression + "**" + power);
    display.value = expression;
  } catch (error) {
    display.value = "Error";
  }
}

function calculateSin() {
  try {
    expression = Math.sin(eval(expression));
    display.value = expression;
  } catch (error) {
    display.value = "Error";
  }
}

function calculateCos() {
  try {
    expression = Math.cos(eval(expression));
    display.value = expression;
  } catch (error) {
    display.value = "Error";
  }
}

function calculateTan() {
  try {
    expression = Math.tan(eval(expression));
    display.value = expression;
  } catch (error) {
    display.value = "Error";
  }
}
