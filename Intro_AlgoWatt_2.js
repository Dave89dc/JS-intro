// let a = 5;
// let b = "ciao";

// function square (num) {
//     return num * num;
// };

// // console.log(square(a));

// let f = function (n) {
//     return n*n;
// };

// console.log("F: " + f(5));

// // Le funzioni sono come i valori delle variabili, e questo permette
// // di ricevere come parametro in ingresso altre funzioni.
// // Ecco perché ci sono i casi in cui esse vengono assegnate a delle variabili.
// // Si possono avere funzioni che creano altre funzioni, FUNZIONI DI ORDINE SUPERIORE.

// // RIpetere un'operazione per un certo numero di volte:

// for (let i = 0; i < 10; i++) {  // Questa operazione è più complessa come è strutturata
//     console,log(i);             // che quello che effettivamente fa
// };

// L'astrazione è semplificare le operazioni:

// function logNumbersFrom0To9 () {
//     for (let i = 0; i < 10; i++) {
//         console,log(i);
//     };
// };

// logNumbersFrom0To9();  // Questa funzione eseguirà il ciclo for, ma è più comprensibile
                       // oltre che a ridurre la lunghezza del codice.
                       // Permette anche di intervenire nele correzioni senza complicazioni.


// Questa operazione però è poco utile, perché eseguirà sempre e solo la
// stessa operazione.

// Per renderla utile le si assegna un parametro generico, aumentandone la versatilità:

// function logNumbersFrom0To (numMax) {
//     for (let i = 0; i < numMax; i++) {
//         console.log(i);
//     };
// };

// logNumbersFrom0To (20); 

// function doubleNumbersFrom0To (maxNum) {

//     for (let i = 0; i < maxNum; i++) {
//        console.log(i*2);
//     };

// };

// Le funzioni possono essere passate come parametri ad altre funzioni:

// function repeatFrom0To (maxNum, func) {     // Diciamo alla funzione di fare un ciclo da
//     for (let i = 0; i < maxNum; i++) {      // 0 a maxNum, eseguendo una funzione a mia scelta
//         func(i);
//     };
// };

// Ogni i del ciclo viene eseguita la funzione.
// Questa è l'utilità di passare le funzioni ad altre.


// Richiamare la funzione "repeatFrom0to" in modo che stampi per ogni
// numero (i) se i è divisibile per 3:

// function divisibleNumberBy3 (number) {
//     let isDivisible = number % 3 === 0;
//     console.log(number + ": " + isDivisible);
// };

// function repeatFrom0To (maxNum, func) {
//     for (let i = 0; i < maxNum; i++) {
//         func(i);
//     };
// };

// repeatFrom0To(20, divisibleNumberBy3);

// Le funzioni anonime sono quelle create senza essere dichiarate prima,
// quindi si può creare per esempio la funzione finale con al suo interno una
// sottofunzione senza il nome.
// L'unica cosa è che poi la sottofunzione rimane esclusiva alla funzione principale 
// e non può essere riutilizzata esternamente.

// repeatFrom0To (maxNum, function (n) {
//     console.log(n%3 === 0);
// });


// RIPETERE UNA FUNZIONE PER UN INTERVALLO DI TEMPO:

// setInterval (function () {console.log("Test")}, 1000);
// setInterval (() => console.log("Test"), 1000); // In Lambda è più leggibile

// Le funzioni anonime è meglio scriverle in LAMBDA, per semplicità e leggibilità


// CLOSURE e funzioni che restituiscono altre funzioni:

let counter = 0;

function printAndIncrementCounter () {
    console.log(counter);
    counter++;
};

printAndIncrementCounter();
printAndIncrementCounter();
printAndIncrementCounter();

console.log("Normale console.log: ", counter);

// Le funzioni si legano alle variabili e ne modificano effettivamente il valore,
// di fatti alla fine, nel normale console.log(), troviamo counter aumentato!


function getRangeCheckFunction (min, max) {

    return function (n) {
        return n >= min && n <= max;
    };

};

let isInRange = getRangeCheckFunction(0, 5);
console.log(isInRange(7));
console.log(isInRange(1));
console.log(isInRange(-8));

// "n" diventa il parametro di isInRange!!! E 0 e 5 sono i parametri di getRangeCheckFunction
// all'interno della funzione isInRange!!!

// In questo modo abbiamo la possibilità di creare funzioni nuove (che fanno 
// operazioni diverse), partendo dalla stessa funzione e cambiando i parametri, assegnandola
// ad una nuova variabile.



// APLICARE LE FUNZIONI DI ORDINE SUPERIORE AGLI ARRAY:


let numbers = [1, 2, 3, 4, 5];


// map

let squareNumbers = [];

for (let n of numbers) {
    squareNumbers.push(n*n);
};

console.log(squareNumbers);


let doubleNumbers = [];

for (let n of numbers) {
    doubleNumbers.push(n*2);
};

console.log(doubleNumbers); // Ho dovuto riscrivere tutto per cambiare solo una operazione

// Per questo vengono usate le funzioni superiori per gli array!


let numbers2 = [1, 2, 3, 4, 5];

// squareNumbers = map(numbers2, n => n*n);
// doubleNumbers = map(numbers2, n => n*2);
// numbersPowBy2 = map(numbers2, n => n**2);
// rootNumbers = map([2, 18, 200, 78, 99], n => Math.floor(Math.sqrt(n)));

// function map(array, func) { // array=numbers func=n => n*n
    
//     let newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         newArray.push(func(array[i]));
//     };

//     return newArray;

// };

// console.log("squareNumbers: ", squareNumbers);
// console.log("doubleNumbers: ", doubleNumbers);
// console.log("numbersPowBy2: ", numbersPowBy2);
// console.log("rootNumbers: ", rootNumbers);


//LA FUNZIONE MAP ESISTE GIà, L'ABBIAMO SOLO RICREATA A MANO!

let Array = [9, 9, 3, 1];

let arrayMap = Array.map(n => n*n);

console.log(arrayMap);

// Lo stesso per un FILTER, utilizzando una funzione booleana:

console.log(Array.filter(n => n <= 5));


// FOR EACH è COME UN CICLO FOR:

let sum = 0;

Array.forEach(n => sum += n);
console.log(sum);


// TUTTE QUESTE FUNZIONI SI POSSONO CONCATENARE:


let words = ["ciao", "focaccia", "pizza", "notte", "extraterrestri"];

let res = words.filter(w => w.length > 5)
                .map(w => w.length)
                .forEach(l => console.log(l));

// for (let w of words) {

//     if (w.length < 6) {
//         continue;
//     };

// };


console.log(res);


// ESERCIZI:


let arrays = [[1, 2, 3], [4, 5], [6]];



function concatArrays (array) {

    let singleArray = [];
    for (let i = 0; i < array.length; i++) {
        
    };


};