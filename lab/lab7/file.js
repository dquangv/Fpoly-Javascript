let numButtons = document.querySelectorAll(".number");
let opeButtons = document.querySelectorAll(".operation");
let calButton = document.querySelector(".calculate");
let clrButton = document.querySelector(".clear");
let display = document.querySelector("#display");
let resultDisplay = document.querySelector("#result");

let firstNumber = null;
let operator = null;
let flagClear = false;
let flagCal = false;

numButtons.forEach(button => {
    button.addEventListener("click", function () {
        appendNumDisplay(button.textContent);
    });
});

opeButtons.forEach(button => {
    button.addEventListener("click", function () {
        operation(button.textContent);
    });
});

function appendNumDisplay(value) {
    if (flagClear) {
        display.value = "";
        flagClear = false;
    }
    display.value += value;
}

function operation(value) {
    if (flagCal && value !== '=') {
        calculate(value);
    }

    firstNumber = parseFloat(display.value);
    operator = value;
    flagClear = true;
    flagCal = true;
}

function calculate(value) {
    flagCal = false;
    let secondNumber = parseFloat(display.value);
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "x":
            result = firstNumber * secondNumber;
            break;
        case ":":
            result = firstNumber / secondNumber;
            break;
        default:
            result = null;
    }

    display.value = result;
}

function clear() {
    display.value = "";
    resultDisplay.textContent = "";
    firstNumber = null;
    operator = null;
    countCal = 0;
}

calButton.addEventListener("click", calculate);

clrButton.addEventListener("click", clear);
