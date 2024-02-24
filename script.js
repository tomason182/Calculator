const display = document.querySelector('#display');

const content = document.createElement('p');
content.classList.toggle('content');
content.textContent = "0";
content.setAttribute('style', 'font-size: 25px; text-align: right; padding-right: 8px');

display.appendChild(content);

let pressNum = document.querySelectorAll('button');


let listOfWanders = [];

pressNum.forEach((button) => {
    button.addEventListener('click', () => calculator(button));
});


function calculator(a) {
    let pressedButton = a.textContent;
    listOfWanders.push(pressedButton);
    
    firstItem = parseFloat(listOfWanders[0]);
    if (isNaN(firstItem)) {
        listOfWanders.shift();
    }


    console.log(listOfWanders);


   /*  for (i = 0; listOfWanders.length -1; i++) {
        
    }



    return console.log(listOfWanders); */


}