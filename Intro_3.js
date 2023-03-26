// INTRODUZIONE 3 A JAVASCRIPT


// Scope:


const pippo = "Ciao";  // Le variabili create esternamente sono dette GLOBALI,
                        // "disponibili" per tutti.
console.log(pippo);

if (true) {                 //  Lo spazio contenuto dentro IF è lo SCOPE!!!
                            // Da riga 10 a riga 12
    console.log(pippo);

};

if (true) {                         // Quando una variabile viene "definita" all'interno
                                    // delle parentesi {} (IF, FOR, WHILE; ecc.)
    console.log(pippo);             // essa rimane esclusiva dentro lo SCOPE,
    const pluto = 'JavaScript';     // e non può esistere all'infuori di esso.
    console.log(pluto);

};

if(true) {                              // Ogni variabile viene letta da fuori verso
                                        // l'interno, MA MAI D'ALL'INTERNO
    console.log(pippo);                 // VERSO L'ESTERNO!!!
    const pluto = 'JavaScript';
    if (true) {
        console.log(pluto);
        const paperino = 'Pizza';
    };

    //console.log(paperino);              // La variabile (const) paperino non 
                                        // può essere letta!!! (non viene loggata)
};

for (let i = 0; i < 3; i++) {
                                        // Le variabili (in questo caso la "i") possono
    console.log('Pizza');               // essere utilizzate all'interno di due SCOPE diversi
                                        // purché essi siano separati nel GLOBALE
};

for (let i = 0; i < 3; i++) {
    
    console.log('Focaccia');
    
};

for (let i = 0; i < 3; i++) {                       // Le variabili non si devono ripetere
                                                    // all'interno dello stesso ciclo perché
    for (let i = 0; i < 3; i++) {                   // la variabile "shadow" va a sovrascrivere
                                                    // quella precedente, ed è per questo
        console.log(i); // Variabile "shadow"       // che è buona norma dare i nomi delle
                                                    // variabili nei FOR con nomi diversi
    };                                              // (es: i, j, k).
    
};

for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        console.log(j);

    };

};


// FUNZIONI:


// 3 Modi di scrivere le funzioni:


// 1) Metodo delle parentesi graffe:

function elevaAlQuadrato(numb) {    // Anche le funzioni crenao uno {SCOPE}

    const result = numb * numb;
    return result;

};

const dueAlQuadrato = elevaAlQuadrato(2);
console.log(dueAlQuadrato);

const cinqueAlQuadrato = elevaAlQuadrato(5);
console.log(cinqueAlQuadrato);

// Oppure:
console.log(elevaAlQuadrato(4));


// 2) Funzioni anonime (modo diverso ma identico al primo):

const elevaAlQuadrato_2 = function (numb) {

    const result = numb * numb;
    return result;

};

console.log(elevaAlQuadrato_2(10));


// 3) Metodo "lambda" (equivalente al secondo metodo):

const elevatoAlQuadrato_3 = (numb) => numb * numb;  // Se il codice è fatto in una sola riga
                                                    // il RETURN è direttamente nella
console.log(elevatoAlQuadrato_3(6));                // sintassi della funzone senza
                                                    // specificarlo!!!

// const elevatoAlQuadrato_3 = (numb) => {       // Se la funzione LAMBDA viene espressa su
                                                 // più righe, allora il RETURN va
//     const risult = numb * numb;               // scritto!!!   
//     return result;

// };                      

// LE FUNZIONI POSSONO AVERE MOLTEPLICI INPUT MA UN SOLO OUTPUT!!!


function elevazioneAPotenza (base, esponente) {

    const result = base ** esponente;
    return result;

};

console.log(elevazioneAPotenza(3, 4));  // Il risultato, ovviamente, è solo uno!



// FUNZIONI PURE ED IMPURE:


// Impura (non ha input e output diretti):

function scriviNellaConsole(messaggio) {

    console.log(messaggio);

};

scriviNellaConsole('Scemo chi legge :-)');

// Se in una funzione non c'é il RETURN, se usata ritorna come "UNDEFINED"!

let poldo = scriviNellaConsole('Ho fame!');
console.log(poldo);  // In console apparirà, per l'appunto, UNDEFINED! 


// Pura (ha un ritorno del risultato RETURN):

function sommaUno (numb) {

    return numb + 1;

};


// MAI FARE FUNZIONI MISTE TRA PURE ED IMPURE!!

// function SommaDueELogga (numb) {  //  Funziona, ma è il male!!!

//     const result = numb + 2;
//     console.log(result);
//     return result;

// };

// ESEMPIO:

function log(messaggio) {
    console.log(messaggio);
};

function sommaDue(numb) {
    return numb + 2;
};

log(sommaDue(5));  // Si fa così! Si separano le funzioni pure da quelle impure
                   // e successivamente si richiamano insieme.


// ESERCIZI:

// Scrivere gli esercizi sia in normale che in lambda:

// 1) Scrivere una funzione che dato un numero se è positivo
//    lo moltiplica per due, altrimenti return number:


// function doubleNumberIfPositive (number) {

//     if (number > 0) {
//         let result = number*2;
//         return result;
//     };

//     return number;

// };

// console.log(doubleNumberIfPositive(8));


const doubleNumberIfPositive = (n) => n > 0 ? n*2 : n;

console.log(doubleNumberIfPositive(8));



// 2) Scrivere una funzione che data una stringa restituisca la sua
//    version maiuscola:


// function stringToUppercase (stringa) {

//     let Maiuscolo = stringa.toUpperCase();
//     return Maiuscolo;

// };

// console.log(stringToUppercase('Voglio andare a mangiare la pizza!'));


const stringToUppercase = (stringa) => stringa.toUpperCase();

console.log(stringToUppercase('porcavacca'));



// 3) Scrivere una funzione che data una stringa mi restituisca
//    vero se è più lunga di 10 caratteri, altrimenti falso:


// // function ifIsOver10letters(stringa) {

//     // if (stringa.length > 10) {
//     //     return true;
//     // } else {
//     //     return false;
//     // };

// };

// console.log(isTextMoreThan10Char('paperino'));


const isTextMoreThan10Char = (stringa) => {

    if (stringa.length > 10) {
        return true;
    } else {
        return false;
    };

};

console.log(isTextMoreThan10Char('paperino'));



// 4) Scrivere una funzione pura che restituisca la scacchiera:


// function chessboard (numero) {

//     let box = "";
//     let k = numero;
    
//     for (let y = 0; y < k; y ++) {
    
//         for (let x = 0; x < k; x++) {
            
//             if (y % 2 === 0) {
            
//                 if (x % 2 === 0) {
//                     box += "#";
//                 } else {
//                     box += " ";
//                 };
    
//             } else {
    
//                 if (x % 2 === 0) {
//                     box += " ";
//                 }else {
//                     box += "#";
//                 };
    
//             };
            
//         };
    
//         box += '\n';
    
//     };
    
//     return box;

// };

// console.log(scacchiera(6));


const chessboard = (numero) => {

    let box = "";
    let k = numero;
    
    for (let y = 0; y < k; y ++) {
    
        for (let x = 0; x < k; x++) {
            
            if (y % 2 === 0) {
            
                if (x % 2 === 0) {
                    box += "#";
                } else {
                    box += " ";
                };
    
            } else {
    
                if (x % 2 === 0) {
                    box += " ";
                }else {
                    box += "#";
                };
    
            };
            
        };
    
        box += '\n';
    
    };
    
    return box;

};

console.log(chessboard(8));


// 5) Scrivere una funzione che dato un numero restituisca una
//    stringa con la logica FizzBuzz:


// function convertNumberToFizzBuzz(numero) {

//     if (numero % 3 === 0 && numero % 5 === 0) {
//         return "FizzBuzz";
//     } else if (numero % 5 === 0) {
//         return "Buzz";
//     } else if (numero % 3 === 0) {
//         return "Fizz";
//     } else {
//         return numero;
//     };

// };

// console.log(convertNumberToFizzBuzz(21));


const convertNumberToFizzBuzz = (numero) => {

    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz";
    } else if (numero % 5 === 0) {
        return "Buzz";
    } else if (numero % 3 === 0) {
        return "Fizz";
    } else {
        return numero;
    };

};

console.log(convertNumberToFizzBuzz(27));



// 6) Scrivere una funzione che data una stringa restituisca una 
//    stringa composta solo dai caratteri dispari (in array! partendo da zero,
//    quindi sono lettere pari per la parola) dell'originale:


// function selectOddCharsFromText(stringa) {

    // let cicciaculo = "";
    
    // for (let i = 0; i < stringa.length; i++) {
        
    //     if (i % 2 !== 0) {
             
            
    //         cicciaculo += stringa[i];

    //     };

    // };

    // return cicciaculo;

// };

// console.log(selectOddCharsFromText('porcatroia'));


const selectOddCharsFromText = (stringa) => {

    let oddChars = "";
    
    for (let i = 0; i < stringa.length; i++) {
        
        if (i % 2 !== 0) {
            oddChars += stringa[i];
        };

    };

    return oddChars;

};

console.log(selectOddCharsFromText('porcatroia'));


// Scrivere una funzione che sommi tutti i numeri in un range prestabilito:


function sumRange (startNumber, endNumber) {

    let somma = 0;
    
    for (let i = startNumber; i <= endNumber; i++) {
        somma += i;
    };

    return somma;

};

console.log(sumRange(0, 3));
console.log(sumRange(1, 3));
console.log(sumRange(1, 5));
console.log(sumRange(2, 6));
console.log(sumRange(6, 6));
console.log(sumRange(-2, 2));




// LE FUNZIONI POSSONO USARE ALTRE FUNZIONI:


// function doubleAndPow3(selectNumber) {  // Volendo si può spezzare la funzione in
//                                         // 2 sottofunzioni
//     const double = selectNumber*2;
//     const pow3 = double**3;
//     return pow3;

// };

// console.log(doubleAndPow3(3));


function makeDouble(selectNumber) {             // ECCO L'ESEMPIO
    return selectNumber*2;
}

function makePow3 (selectNumber) {
    return selectNumber**3;
}

function doubleAndPow3(selectNumber) {

    const double = makeDouble(selectNumber);
    const pow3 = makePow3(double);
    return pow3;

    // return makePow3(makeDouble(selectNumber));   VERSIONE SUPER RIASSUNTA!

};

// LE FUNZIONI POSSONO AVERE FUNZIONI AL LORO INTERNO!!!


function ifMoreThan10CharUppercase (text) {

    function isMoreThan10CharInside (textToCheck) {
        return textToCheck.length > 10;
    };

    if (isMoreThan10CharInside (text)) {
        return text.toUpperCase();
    } else {
        return text;
    };

};

console.log(ifMoreThan10CharUppercase('La poantera rosa fa stendere dal ridere'));




//  ESERCIZI LIBRO:


// es.1

function findMinNUmber (numero1, numero2) {

    if (numero1 < numero2) {
        return numero1;
    } else if (numero1 > numero2) {
        return numero2;
    } else {
        return 'I numeri sono uguali';
    };

};

console.log(findMinNUmber(8, 8));


// es.2


function isEven(selectedNumber) {
    
    if (selectedNumber === 0) {
        return true;
    };

    if (selectedNumber === 1) {
        return false;
    };

    if (selectedNumber < 0) {
        selectedNumber = -selectedNumber;
    };

    const newNumber = selectedNumber - 2;
    return isEven(newNumber);

};

console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(3));
console.log(isEven(-8));


// es.3


function countBs (stringa) {

    let letteraB = "";
    
    for (let i = 0; i < stringa.length-1; i++) {
       
        
        if (stringa[i] === 'B') {
            
            letteraB += stringa[i];
            
        };
        
    };

    return letteraB.length;

};


console.log(countBs('BaraBacBà'));



// RICORSIONE:


function sumRangeRecursive (startNumber, endNumber, accumulator = 0) {

    if (startNumber > endNumber) {
        return accumulator;
    };

    const newStart = startNumber + 1;
    const newAccumulator = accumulator + startNumber;
    return sumRangeRecursive (newStart, endNumber, newAccumulator);

};

console.log(sumRangeRecursive(0, 3));

// 1) startNumber = 0; endNumber = 3; accumulator = 0; -> newStart = 1; newAccumulator = 0;
// 2) startNumber = 1; endNumber = 3; accumulator = 0; -> newStart = 2; newAccumulator = 1;
// 3) startNumber = 2; endNumber = 3; accumulator = 1; -> newStart = 3; newAccumulator = 3;
// 4) startNumber = 3; endNumber = 3; accumulator = 3; -> newStart = 4; newAccumulator = 6;
// 5) startNumber = 4; endNumber = 3; accumulator = 6; -> return accumulator (6) -> STOP


function isMyNumberEven(selectedNumber) {
    
    if (selectedNumber === 0) {
        return true;
    };

    if (selectedNumber === 1) {
        return false;
    };

    const newNumber = selectedNumber - 2;
    return !isMyNumberOdd(newNumber);

};


function isMyNumberOdd(selectedNumber) {

    if (selectedNumber === 0) {
        return false;
    };
    
    if (selectedNumber === 1) {
        return true;
    };

    const newNumber = selectedNumber - 2;
    return !isMyNumberEven (newNumber);

};

console.log(isMyNumberEven(3));
console.log(isMyNumberOdd(3));