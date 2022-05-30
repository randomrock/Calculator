//Project 8 
//Calculator

console.log('Welcome to app.js');

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for(let item of buttons){
    item.addEventListener('click',(e) => {
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText === 'x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText === '='){
            screen.value = eval(screenValue);
        }
        else if(buttonText === 'C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
