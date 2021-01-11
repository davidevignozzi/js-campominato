//Creazione numero random
function numeroRandom(min, max){
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

var numeriPerdenti = []; //Array dei numeri perdenti

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
// fine generazione bombe

// chiedere 84 volte all'utente di inserire un numero
// se il numero inserito è presente nell'array dei numeriPerdenti perde
// se scrive due volte lo stesso numero inserisce un altro numero
// altrimenti continua finchè non si manifesta una delle condizioni precedenti
// se non accadono, l'utente vince

var numeriUtente = []; //Array dei numeri utente
var riscontro = false;
var numeroGiaInserito = false;

for (var i = 0; i < 84; i++) {

  if (riscontro !== false) {
    alert('Hai perso, hai trovato una bomba. Peccato hai realizzato ' + numeriUtente.length + ' punti!')
  } else if (numeroGiaInserito !== false) {
    alert('Non provare a fregare il game master. Hai inserito due volte lo stesso numero')
  } else {

    // utente inserisce un numero
    var scelta = parseInt(prompt('Inserisci un numero da 1 a 100')) //scelta
    if (isNaN(scelta)) {
      alert('Non hai inserito un numero')
    } else if (scelta > 100 || scelta === 0) {
      alert('Bro da 1 a 100')
    } else {

      // flag numero già inserito
      for (var y = 0; y < numeriUtente.length; y++) {
        if (scelta === numeriUtente[i]) {
          numeroGiaInserito = true
        }
      }
      if (numeroGiaInserito !== true) {
        numeriUtente.push(scelta)
        console.log(numeriUtente)
      }
      //fine flag numero già inserito

      //flag numero nell'array dei numeri perdenti
      for (var z = 0; z < numeriPerdenti.length; z++) {
        if (scelta === numeriPerdenti[x]) {
          riscontro = true;
        }
      }
      //fine flag numero nell'array dei numeri perdenti

      //vittoria utente
    }
    if (numeriUtente.length === 84) {
      alert('COMPLIMENTI, HAI VINTO!')
    }
  }
}

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
