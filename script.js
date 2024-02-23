const display = document.querySelector('#display');

const content = document.createElement('p');
content.classList.toggle('content');
content.textContent = "0";
content.setAttribute('style', 'font-size: 25px; text-align: right; padding-right: 8px');

display.appendChild(content);

let pressNum = document.querySelectorAll('button');


let operation = [];

pressNum.forEach((button) => {
    button.addEventListener('click', () => calculator(button));
});


function calculator(a) {

    if (parseFloat(operation[0]) || operation[0] === "Undefined"){

        if (a.classList === "equal"){
            //code for calculation
        }else{
            operation.push(a.textContent);
        }
    }    
    
    return console.log(operation)

}