let listOfWanders = [];

const display = document.querySelector('#display');

let pressNum = document.querySelectorAll('.number');

pressNum.forEach((button) => {
    button.addEventListener('click', () => displayNum(button));
});

let pressEspecial = 


function displayNum(a) {
    let pressedButton = a.textContent;
    listOfWanders.push(pressedButton);
    
    const content = document.createElement('div');
    content.classList.toggle('content');
    content.textContent = pressedButton;
    content.setAttribute('style', 'font-size: 25px; flex-shrink: ');

    display.appendChild(content);

    console.log(listOfWanders)

}