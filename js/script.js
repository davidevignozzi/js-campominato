// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati (tadaaa!)
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


//Creazione numero random
function numeroRandom(min, max){
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}


var numeriPerdenti = []; //Array dei numeri perdenti
var numeriUtente = []; //Array dei numeri che l'utente sceglierà (prompt)

//genero 16 numeri diversi e li pusho nell'array
x = 0
while (x < 16) {
  var bomba = numeroRandom(1,100)
  if (bomba !== numeriPerdenti[x]) {
    numeriPerdenti.push(bomba)
    x++
  } else {
    numeriPerdenti.pop()
    x--
  }
}
console.log(numeriPerdenti)
