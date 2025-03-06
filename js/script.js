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
const inputGroup = document.querySelectorAll('input');


let countDownTime = 10
const countDownFunc = setInterval(function() {
  if (countDownTime <= 0) {
    clearInterval(countDownFunc);
  };

  countDown.innerHTML = countDownTime;
  countDownTime--;
}, second);