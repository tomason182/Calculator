let listOfWanders = [];

const display = document.querySelector('#display');

const content = document.createElement('p');
content.classList.toggle('content');






let pressNum = document.querySelectorAll('button');




pressNum.forEach((button) => {
    button.addEventListener('click', () => calculator(button));
});


function calculator(a) {
    let pressedButton = a.textContent;
    listOfWanders.push(pressedButton);
    
    firstItem = parseFloat(listOfWanders[0]);
    if (isNaN(firstItem)) {
        listOfWanders.shift();
    };
    
    for (i = 0; listOfWanders.length -1; i++){
    
        content.textContent = listOfWanders[i];
        content.setAttribute('style', 'font-size: 25px; text-align: right; padding-right: 8px');

        display.appendChild(content);
    }
    

    // aqui tendria que irse mostrando los numero impresos en display
  


   /*  for (i = 0; listOfWanders.length -1; i++) {
        
    }



    return console.log(listOfWanders); */


}