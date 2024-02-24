let listOfWanders = [];

const display = document.querySelector('#display');

let pressNum = document.querySelectorAll('.number');

pressNum.forEach((button) => {
    button.addEventListener('click', () => displayNum(button));
});

let pressEspecial = document.querySelectorAll('.special');
pressEspecial.forEach((button) => {
    button.addEventListener('click', () => displayEspecial(button));
})

let pressEquals = document.querySelector('.equals')

// functions section

function displayNum(a) {
    let pressedButton = a.textContent;
    listOfWanders.push(pressedButton);
    
    const content = document.createElement('div');
    content.classList.toggle('content');
    content.textContent = pressedButton;
    content.setAttribute('style', 'font-size: 25px;');

    display.appendChild(content);

    console.log(listOfWanders);
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
        content.setAttribute('style', 'font-size: 15px;');
    
        display.appendChild(content);
    };

}
   


console.log(listOfWanders.length)