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
const inputGroup = document.getElementById('input-group');
const inputs = document.querySelectorAll('input');


const numbersToMemorize = generateTotRandomNumber(5, 1, 50);
numbersToMemorize.forEach(num => {
  const newNumber = document.createElement('li');
  newNumber.innerHTML = num.toString();

  numberList.appendChild(newNumber);
});


let countDownTime = 10
countDown.innerHTML = countDownTime;
const countDownFunc = setInterval(function() {
  countDownTime--;
  countDown.innerHTML = countDownTime;
  
  if (countDownTime <= 0) {
    clearInterval(countDownFunc);
  };
}, second);


setTimeout(function() {
  numberList.style.visibility = 'hidden';
}, 10 * second);
 

function generateTotRandomNumber(amount, min, max) {
  return Array.from({ length: amount }, () => Math.round(Math.random() * (max - min) + min));
};