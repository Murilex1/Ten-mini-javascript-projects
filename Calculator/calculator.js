'use strict';

const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=key]');
const operators = document.querySelectorAll('[id*=Operator]');

let newNumber = true;
let operator;
let previousNumber;
// const insertNumber = (event) => display.textContent = event.target.textContent;

const pendingOperation = () => operator !== undefined;

//function that does the calculation
const calculate = () => {
    if (pendingOperation()) {
        const currentNumber = parseFloat(display.textContent.replace(',','.'));
        newNumber = true;
        const resullt = eval(`${previousNumber}${operator}${currentNumber}`)
        updateDisplay(resullt);

        //Replaced by the eval function abose
        // if(operator === '+') {            
        //     updateDisplay(previousNumber + currentNumber);
        // }else if(operator === '-') {
        //     updateDisplay(previousNumber - currentNumber);            
        // }else if(operator === '*') {
        //     updateDisplay(previousNumber * currentNumber);            
        // }else if(operator === '/') {
        //     updateDisplay(previousNumber / currentNumber);            
        // }
    }
}

const updateDisplay = (text) => {
    if (newNumber) {
        display.textContent = text.toLocaleString('BR');    
        newNumber = false;
    }else{
        display.textContent += text.toLocaleString('BR');
    }
}
//adds numbers to the display
const insertNumber = (event) => updateDisplay(event.target.textContent);
numbers.forEach (number => number.addEventListener('click',insertNumber));    

//Keys of operators (/,*,-,+)
const selectOperator = (event) => {
    if (!newNumber) {
        calculate();
        newNumber = true;
        operator = event.target.textContent;
        previousNumber = parseFloat(display.textContent.replace(',','.'));    
    }
}
operators.forEach(operator => operator.addEventListener('click', selectOperator))

//Key "="
const activeEqual = () => {
    calculate(); 
    operator = undefined;
}
document.getElementById('equal').addEventListener('click',activeEqual);

//Key "CE"
const cleanDisplay = () => display.textContent = '';
document.getElementById('cleanDisplay').addEventListener('click',cleanDisplay);

//Key "C" 
const cleanCalculation = () => {
    cleanDisplay();
    operator = undefined;
    newNumber = true;
    previousNumber = undefined;
}
document.getElementById('cleanCalculation').addEventListener('click',cleanCalculation);

const removeLastNumber = () => display.textContent = display.textContent.slice(0, -1);
    
//Key "«"
document.getElementById('backspace').addEventListener('click',removeLastNumber)

//Key "±"
const revertSignal = () => {
    newNumber = true;
    updateDisplay(display.textContent * -1);
};
document.getElementById('reverse').addEventListener('click',revertSignal);

//Key ","
const existDecimal = () => display.textContent.indexOf(',') !== -1;
const existValue = () => display.textContent.length > 0;
const insertDecimal = () => {
    if(!existDecimal()) {
        if(existValue()) {
            updateDisplay(',')
        }else{
            updateDisplay('0,')
        }
    }
};    
document.getElementById('decimal').addEventListener('click',insertDecimal)

const keyboardMap = {
    '0': 'key0',
    '1': 'key1',   
    '2': 'key2',       
    '3': 'key3',
    '4': 'key4',
    '5': 'key5',
    '6': 'key6',
    '7': 'key7',
    '8': 'key8',
    '9': 'key9',
    '/': 'divideOperator',
    '*': 'multiplyOperator',
    '-': 'subtractOperator',
    '+': 'sumOperator',
    '=': 'equal',
    Enter: 'equal',
    Backspace: 'backspace',
    c: 'cleanDisplay',
    Escape: 'cleanCalculation',
    ',': 'decimal',
}
const mapKeyboard = (event) => {
    const key = event.key;    
    const allowedKey = () => Object.keys(keyboardMap).indexOf(key) !== -1;
    if(allowedKey()) document.getElementById(keyboardMap[key]).click();
}
document.addEventListener('keydown', mapKeyboard)