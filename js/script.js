/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui
l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine
che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali 
dei numeri da indovinare sono stati individuati.

*/

const second = 1_000;


const countDown = document.getElementById('countdown');
const numberList = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
const inputs = document.querySelectorAll('input');
const message = document.getElementById('message');


const numbersToMemorize = generateTotRandomNumber(5, 1, 50);
numbersToMemorize.forEach(num => {
  const newNumber = document.createElement('li');
  newNumber.innerHTML = num.toString();

  numberList.appendChild(newNumber);
});


let countDownTime = 3
countDown.innerHTML = countDownTime;
const countDownFunc = setInterval(function() {
  countDownTime--;
  countDown.innerHTML = countDownTime;
  
  if (countDownTime <= 0) {
    clearInterval(countDownFunc);
    
    numberList.style.visibility = 'hidden';
    form.classList.remove('d-none');
  };
}, second);




function generateTotRandomNumber(amount, min, max) {
  const numbers = [];
  
  while (numbers.length < amount) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if (!numbers.includes(num)) {
      numbers.push(num);
    };
  };

  return numbers;
};