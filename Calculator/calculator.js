var display = document.getElementById("display");
function appendValue(value) {
    let operators = ['+', '-', '*', '/'];
    let lastChar = display.value.slice(-1);

    if (operators.includes(lastChar) && operators.includes(value)) {
        display.value = display.value.slice(0, -1) + value;
        return;
    }

    display.value += value;
}

function clearDisplay() {
    display.value = '';
}
function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let lastChar = display.value.slice(-1);

    if (['+', '-', '*', '/'].includes(lastChar)) {
        return;
    }

    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

document.addEventListener("keydown", function(event) {

    let key = event.key;

    if (!isNaN(key)) {
        appendValue(key);
    }

    if (["+", "-", "*", "/"].includes(key)) {
        appendValue(key);
    }

    if (key === "Enter") {
        calculate();
    }

    if (key === "Backspace") {
        backspace();
    }

    if (key === ".") {
        appendValue(".");
    }

});