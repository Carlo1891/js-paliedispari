// Palidroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

// Consigli del giorno:
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// PS : nell'esercizio di oggi cercate di usare funzioni scritte da Voi ed evitate scorciatoie facile (tipo reverse giusto per dirne una). REVERSE = MHALEEEH

// Prima parte con Palindromi
// La parola anche se al contrario deve essere uguale.

// const userWord = prompt ('Scrivi una parola');

// function palindromes (userWord){
//     // La funzione deve riconoscere metà della composizione della parola, se uguale la parola sarà palindroma.
//     for (let index = 0; index < userWord.length / 2; index++)
//     // se la parola è uguale per tutta la sua metà, se non lo è
//     if (userWord [index] === userWord [userWord.length - 1 - index]){
//         console.log ('è una parola palindroma');
//     } else {
//         console.log ('Non è una parola palindroma');
//     }
// };

// alert (palindromes(userWord));

// Seconda Parte

// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. (PROMPT!!!)

userNumber = parseInt (prompt ('Scegli un numero da 1 a 5'));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)

function generatorNumber (){
    return Math.floor(Math.random() * 5 + 1);
};

// Sommiamo i due numeri

const aINumber = generatorNumber();

const sumNumbers = userNumber + aINumber ;


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function sum (sumNumbers){
    if (sumNumbers % 2 === 0){
        return 'Pari, hai vinto amico mio!'
    } else {
        return 'Dispari, eh niente sarà per un\'altra volta'
    }
}
// Dichiariamo chi ha vinto.

alert (sum(sumNumbers));
