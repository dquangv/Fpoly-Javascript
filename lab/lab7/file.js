let opeButtons = document.querySelectorAll(".operator");
let calButton = document.querySelector(".calculate");
let clrButton = document.querySelector(".clear");
let display = document.querySelector("#display");
let resultDisplay = document.querySelector("#result");

function appendDisplay(value) {
    display.value += value;
}

function calculate() {
    let result = null;
    
    try {
        result = eval(display.value);
    } catch (e) {
        result = 'Error';
    }

    resultDisplay.textContent = result;
}

function clear() {
    display.value = '';
    resultDisplay.textContent = '';
}

opeButtons.forEach(button => {
    button.addEventListener("click", () => appendDisplay(button.textContent));
});

calButton.addEventListener("click", calculate);

clrButton.addEventListener("click", clear);