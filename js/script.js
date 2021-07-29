// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.;
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km(0.21 € al km);
// va applicato uno sconto del 20 % per i minorenni;
// va applicato uno sconto del 40 % per gli over 65.;
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.;

// inputs
var distance = parseInt(prompt('Quanti km vuoi percorrere?'));
var age = parseInt(prompt('Qual\'è la tua età?'));
var fare = 0.21;
var discountU18 = 0.20;
var discountOver65 = 0.40;

// compute
var price = distance * fare;

var discount = 0;
if (age < 18) {
  discount = price * discountU18;
} else if (age > 65) {
  discount = price * discountOver65;
}
price = (price - discount).toFixed(2);

// display
document.getElementById('price').innerHTML = price + '€';
