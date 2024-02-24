let listOfWanders = [];
let result = 0;

const display = document.querySelector('#display');

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

// functions section

function displayNum(a) {
    let pressedButton = a.textContent;
    listOfWanders.push(pressedButton);
    
    const content = document.createElement('div');
    content.classList.toggle('content');
    content.textContent = pressedButton;
    content.setAttribute('style', 'font-size: 25px;');

    display.appendChild(content);

    // console.log(listOfWanders);
}

function displayEspecial (b) {

    let pressedEspecial = b.textContent;    

    if (listOfWanders.length === 0 || isNaN(parseFloat(listOfWanders[listOfWanders.length -1]))) {
        
        return null;
        
    }else{

        listOfWanders.push(pressedEspecial);

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
    const operators = ["+", "-", "x", "÷"];

    for (let i=0; i < operators.length; i++) {

        indexOperator = listOfWanders.findIndex((j) => j === operators[i]);

        if (indexOperator === -1 ) {
            continue;            
        }else{
            operator = operators[i];
            numOne = parseFloat(listOfWanders.slice(0, indexOperator).join(""));
            numTwo = parseFloat(listOfWanders.slice(indexOperator + 1).join(""));
            
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
        result = parseFloat(listOfWanders.join(""));
    }

    listOfWanders = [];
    listOfWanders.push(result);

    const remuveOperation = document.querySelectorAll('.content');
    remuveOperation.forEach((item) => item.remove());

    const content = document.createElement('div');
    content.classList.toggle('content');
    content.textContent = result;
    content.setAttribute('style', 'font-size: 25px;');

    display.appendChild(content);

    
}