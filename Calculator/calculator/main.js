let btn0 = document.getElementById("n0")
let btn1 = document.getElementById("n1");
let btn2 = document.getElementById("n2");
let btn3 = document.getElementById("n3");
let btn4 = document.getElementById("n4");
let btn5 = document.getElementById("n5");
let btn6 = document.getElementById("n6");
let btn7 = document.getElementById("n7");
let btn8 = document.getElementById("n8");
let btn9 = document.getElementById("n9");

let btnDivide = document.getElementById("divide")
let btnTimes = document.getElementById("times")
let btnMinus = document.getElementById("minus")
let btnPlus = document.getElementById("plus")
let btnEqual = document.getElementById("equal")
let btnPoint = document.getElementById("point")

let buttons = document.querySelector("button")

let firstNum
let secundNum 
let operator

let displayValue = ""

/*Basic functions*/

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Can't divide by 0";
    }
    return a / b;
}

/*---------------*/

let operate = function(num1, num2, operator){

    switch(operator){
        case "plus": 
            return add(num1, num2);
        case "minus":
            return subtract(num1, num2);
        case "times":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}

function showOnDisplay(item){
    displayValue += item
}

buttons.addEventListener("click", showOnDisplay(buttons.va))