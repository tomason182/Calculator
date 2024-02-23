const display = document.querySelector('#display');

const content = document.createElement('p');
content.classList.toggle('content');
content.textContent = "0";
content.setAttribute('style', 'font-size: 25px; text-align: right; padding-right: 8px');

display.appendChild(content);
