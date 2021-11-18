// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Creo un array contente diversi indirizzi email
const emailAddr = ['paolo.rossi@gmail.com', 'andrea.bianchi@virgilio.com','fulvio.verdi@aruba.it', 'piergiorgio.giorgi@yahoo.com','giuseppe.ferrari@mail.com','maria.colombi@yahoo.com','giuseppe.russo@gmail.com','salvatore.brambilla@virgilio.com','luigi.esposito@aruba.it','mario.beretta@yahoo.com','pierluigi.stucchi@mail.com','maria.perego@yahoo.com'];

// Chiedo all'utente il suo indirizzo email
const userEmail = prompt ('Ciao inserisci il tuo indirizzo email');
// console.log(userEmail);

// Scorro l'array contenente gli indirizzi email con un ciclo FOR
let addressFound = false;

for (let i = 0; i < emailAddr.length; i++ ) {
     const thisEmail = emailAddr[i];

    if (thisEmail === userEmail) {
        addressFound = true;
    }
}

if (addressFound) {
    alert('Indirizzo email trovato');
} else {
    alert('Indirizzo email non trovato');
}