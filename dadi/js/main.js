// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero un numero casuale per il giocatore
const playerNumber = Math.floor(Math.random() * 6) + 1;

// Genero un numero casuale per il computer
const computerNumber = Math.floor(Math.random() * 6) + 1;

// Imposto un ciclo IF per confrontare i due numeri 
if(playerNumber > computerNumber) {
    alert(`Hai vinto! (Tu: ${playerNumber}, Computer: ${computerNumber})`);
} else if(playerNumber < computerNumber) {
    alert(`Hai perso! (Tu: ${playerNumber}, Computer: ${computerNumber})`);
} else {
    alert(`Hai pareggiato! (Tu: ${playerNumber}, Computer: ${computerNumber})`);
}
