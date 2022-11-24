//* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
let randomUserN = Math.floor(Math.random() * 6);
let randomPcN = Math.floor(Math.random() * 6);
const userNumber = document.getElementById('userNumber');
const pcNumber = document.getElementById('pcNumber');
const diceResult = document.getElementById('diceResult');

//* Stabilire il vincitore, in base a chi fa il punteggio più alto
if (randomUserN > randomPcN) {
  console.log("Hai vinto!");
  userNumber.append(randomUserN);
  pcNumber.append(randomPcN);
  diceResult.append("Hai vinto!")
}
else {
  console.log("Il computer ha vinto!");
  userNumber.append(randomUserN);
  pcNumber.append(randomPcN);
  diceResult.append("Il computer ha vinto!")
}

console.log(randomUserN);
console.log(randomPcN);


//? Chiedi all’utente la sua email, 
//? controlla che sia nella lista di chi può accedere 
//? stampa un messaggio appropriato sull’esito del controllo

const emailArray = ["gino@mail.it", "armandino@gmail.com", "sara@hotmail.com", "domenico@mail.net", "lorenzo@mail.com", "giulia@gmail.it", "giusvalla@live.net", "miciopalla@gmail.it", "lucia@gmail.com", "giulio@live.it"]
const button = document.getElementById('button-addon2')


button.addEventListener("click", function () {
  let found = false;

  for (let i = 0; i < emailArray.length; i++) {
    console.log(emailArray[i])
    const emailElement = document.getElementById('email')
    const result = document.getElementById('result')

    if (emailArray[i] == emailElement.value) {
      found = true
    } else {
      found = false
    }

    if (found == true) {
      result.append('Email Valida ')
    } else {
      result.append('Email non Valida ')
    }
  }
})

