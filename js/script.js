/*
      COMPLETATO
    creare un array
    creare 16 numeri diversi e pusharli nell'array
    chiedere 84 volte all'utente di inserire un numero
    se il numero inserito è presente nell'array dei numeriPerdenti perde
    se scrive due volte lo stesso numero inserisce un altro numero
    altrimenti continua finchè non si manifesta una delle condizioni precedenti
    se non accadono, l'utente vince

    TO DO : BONUS
    all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
    // con difficoltà 0 => tra 1 e 100
    // con difficoltà 1 =>  tra 1 e 80
    // con difficoltà 2 => tra 1 e 50

*/


// funzione --> ciò che ha scritto l'utente è valido?
function inputValid(inputString) {
  if (isNaN(inputString)) { // è un numero?
    return false;
  }
  if (inputString > 100 || inputString <=0) { // è compreso tra 1 e 100?
    return false;
  }
  return true;
}
//

// condizione vittoria
function winning(sceltaUtente, listaBombe) {
  if (listaBombe.includes(missile)) { // il numero dell'utente è all'interno dell'array delle bombe?
    return false
  }
  return true
}
//

// creazione numero randomico
function numeroRandom(min, max){
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}
//

// generazione 16 numeri diversi + push nell'array
var listaBombe = [];

while(listaBombe.length < 16) {
  var bomba = numeroRandom(1,100);
  if (listaBombe.includes(bomba) === false) { // il numero generato è diverso dagli altri (generati)?
    listaBombe.push(bomba)
  }
}
console.log(listaBombe)
//

var missiliUtente = [];
var missile;

while (winning(missile, listaBombe) && missiliUtente.length <84) {

// se l'utente non ha scritto un numero presente nell'array[bombe] e non ha raggiunto 84 tentativi

  missile = parseInt(prompt('inserisci un numero da 1 a 100'))
  if (inputValid(missile)) {

  // se l'input dell'utente è un numero ed è compreso tra 1 e 100

    if (missiliUtente.includes(missile) === true) {

      // se ha inserito più di una volta lo stesso numero alert('')

      alert('hai già inserito questo numero')
    } else {
      if (winning(missile, listaBombe) === false) {

        //se il numero inserito è presente nell'array alert('') + interruzione ciclo

        alert('Hai perso! hai beccato una bomba. Il tuo punteggio è ' + missiliUtente.length + '/84')
      }

      missiliUtente.push(missile)

      if (missiliUtente.length === 84) {

        // se usa tutti e 84 i tentavi nessuno dei quali presente in [listaBombe]

        alert('COMPLIMENTI, HAI VINTO!')
      }
    }
  } else {

    // se l'input non è un numero o non è un numero compreso tra 1 e 100

    alert('Bro, inserisci un numero da 1 a 100')
  }
}
console.log(missiliUtente)
