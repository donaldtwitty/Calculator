"use strict";

let firstNumber = null;
let secondNumber = null;
let operatorValue = null;
let result = null;
let display = document.getElementById('display');

function number(num) {
    if (operatorValue === null) {
        firstNumber = (firstNumber === null) ? num : firstNumber + num;
        display.innerHTML = firstNumber;
    } else {
        secondNumber = (secondNumber === null) ? num : secondNumber + num;
        display.innerHTML = secondNumber;
    }
}

function operator(op) {
    if (result !== null) {
        firstNumber = result; // Store the previous result as the new first number
        result = null; // Reset the result
    }
    operatorValue = op;
}

function calculate() {
    if (firstNumber !== null && secondNumber !== null && operatorValue !== null) {
        switch (operatorValue) {
            case '+':
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case '-':
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case '*':
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case '/':
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
        }
        display.innerHTML = result;
        firstNumber = result; // Store the result as the new first number
        secondNumber = null; // Reset the second number
        operatorValue = null; // Reset the operator
    }
}

function equal() {
    if (result !== null && operatorValue !== null) {
        secondNumber = firstNumber; // Use the previous result as the new second number
        calculate(); // Perform the last operation with the current result and the new second number
    }
}

function clearDisplay() {
    firstNumber = null;
    secondNumber = null;
    operatorValue = null;
    result = null;
    display.innerHTML = '';
}
