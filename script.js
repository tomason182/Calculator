let calculatorList = [];

const display = document.querySelector('#display');
let initialValue = 0;

let initialContent = contentInitial(initialValue);

display.appendChild(initialContent);

let pressNum = document.querySelectorAll('.number');

pressNum.forEach((button) => {
    button.addEventListener('click', () => displayNum(button));
});

let pressEspecial = document.querySelectorAll('.special');
pressEspecial.forEach((button) => {
    button.addEventListener('click', () => displayEspecial(button));
})

let pressEquals = document.querySelector('.equals');
pressEquals.addEventListener('click', () => makeCalculus());

let pressReset = document.querySelector('.reset');
pressReset.addEventListener('click', () => reset());

// functions section

function displayNum(a) {
    let pressedButton = a.textContent;
    calculatorList.push(pressedButton);

    const removeInitial = document.querySelector('.initial');
    if (removeInitial != null){
        removeInitial.remove();
    }
    
    
    const content = document.createElement('div');
    content.classList.toggle('content');
    content.textContent = pressedButton;
    content.setAttribute('style', 'font-size: 25px;');

    display.appendChild(content);

    // console.log(listOfWanders);
}

function displayEspecial (b) {

    let pressedEspecial = b.textContent;    

    if (calculatorList.length === 0 || isNaN(parseFloat(calculatorList[calculatorList.length -1]))) {
        
        return null;
        
    }else{

        calculatorList.push(pressedEspecial);

        const content = document.createElement('div');
        content.classList.toggle('content');
        content.textContent = pressedEspecial;
        content.setAttribute('style', 'font-size: 25px;');
    
        display.appendChild(content);
    };

}

function makeCalculus() {

    let numOne;
    let numTwo;
    let operator;
    let indexOperator;
    let result;
    const operators = ["+", "-", "x", "÷"];

    for (let i=0; i < operators.length; i++) {

        indexOperator = calculatorList.findIndex((j) => j === operators[i]);

        if (indexOperator === -1 ) {
            continue;            
        }else{
            operator = operators[i];
            numOne = parseFloat(calculatorList.slice(0, indexOperator).join(""));
            numTwo = parseFloat(calculatorList.slice(indexOperator + 1).join(""));
            
            if (operator === '+'){
                result = numOne + numTwo;
            }else if(operator === '-'){
                result = numOne - numTwo;
            }else if (operator === 'x'){
                result = numOne * numTwo;
            }else{
                result = numOne / numTwo;
            };
        }
    }

    if (operator === undefined){
        result = parseFloat(calculatorList.join(""));
    }

    calculatorList = [];
    calculatorList.push(result);

    const removeOperation = document.querySelectorAll('.content');
    removeOperation.forEach((item) => item.remove());

    const content = document.createElement('div');
    content.classList.toggle('content');
    content.textContent = result;
    content.setAttribute('style', 'font-size: 25px;');

    display.appendChild(content);   
}

function reset () {

    calculatorList = [];
    const cleanDisplay = document.querySelectorAll('.content');
    cleanDisplay.forEach((item) => item.remove());

    display.appendChild(initialContent);

}

function contentInitial(value) {

    let element = document.createElement('div');
    element.classList.toggle('initial');
    element.textContent = value;
    element.setAttribute('style', 'font-size: 25px; padding-right: 5px');

    return element
}