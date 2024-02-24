let listOfWanders = [];

const display = document.querySelector('#display');

let pressNum = document.querySelectorAll('button');

pressNum.forEach((button) => {
    button.addEventListener('click', () => calculator(button));
});


function calculator(a) {
    let pressedButton = a.textContent;
    listOfWanders.push(pressedButton);
    
    const content = document.createElement('div');
    content.classList.toggle('content');
    content.textContent = pressedButton;
    content.setAttribute('style', 'font-size: 25px; text-align: right; padding-right: 8px; display: ');

    display.appendChild(content);

}