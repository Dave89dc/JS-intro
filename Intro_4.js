// INTRODUZIONE 4 A JAVASCRIPT:


// ARRAY:


let pippo = [15, 3, 23, 34, 21];

// let pluto = [1, "ciao", false];  // SI PUò FARE, MA MAI FARLO!!!! SOLO UN TIPO PER ARRAY!!!!

// pippo.push(100); // aggiungo alla fine
// pippo.pop();     // tolgo l'ultimo elemento


// PUSH aggiungi alla fine, POP togli alla fine!


// pippo.push(100);

// const pluto = pippo.pop();
// const paperino = pippo.pop();


// console.log(pippo);
// console.log(pluto);
// console.log(paperino);


// UNSHIFT aggiungi all'inizio, SHIFT togli all'inizio!


// console.log(pippo);

// pippo.unshift(200);

// console.log(pippo);


// const paperone = pippo.shift();
// const paperino = pippo.shift();


// console.log(pippo);
// console.log(paperone);
// console.log(paperino);


// A VOLTE IL LOG NON è AFFIDABILE!


// CICLARE UN ARRAY:


const arrayOfStrings = ['Andrea', 'Jing', 'Valentina', 'Vlad'];

for (let i = 0; i < arrayOfStrings.length; i++) {
    
    const element = arrayOfStrings[i];
    console.log(element);
    
};


// ESERCIZI:

// 1) Scrivere una funzione che prende come parametro un array di numeri
//    e fa console.log() dei numeri con la logica FizzBuzz:


const numbersToFizzBuzz = [10, 6, 27, 32, 107, 305];

function fizzBuzzNumbers (array) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] % 5 === 0 && array[i] % 3 === 0) {
            array[i] = "FizzBuzz";
        } else if (array[i] % 5 === 0) {
            array[i] = 'Buzz';
        } else if (array[i] % 3 === 0) {
            array[i] = 'Fizz';
        };

    };

    return array;

};

console.log(fizzBuzzNumbers(numbersToFizzBuzz));




// 2) Scrivere una funzione che prende come parametro un array di stringhe
//    e fa il console.log() di quelle più piccole di 5 caratteri:


// const arrayOfStrings = ['cioccolato', 'blu', 'cita', 'pansoti', 'timo', 'ferrovia', 'nodo', 'panzerotto'];

// function only5Chars (array) {

//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {

//         if (array[i].length < 5) {
//             newArray.push(array[i]);
//         };
        
//     };

//     return newArray;

// };

// console.log(only5Chars(arrayOfStrings));



// 3) Scrivere una funzione che prende come parametro una stringa e ne restituisce
//    un'altra composta dai primi 5 caratteri convertiti in maiuscolo:



const food = ['cioccolato', 'torta', 'ravioli', 'fritto misto', 'gamberoni', 'fiorentina'];


function firt5CharsOfString (string) {

    let stringToUpperCase = "";
    
    for (let i = 0; i < string.length; i++) {
         
        if (i < 5) {
            stringToUpperCase += string[i];
        };

    };

    return stringToUpperCase.toUpperCase();

};


function firt5CharsToUppeCase (array) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        
        newArray.push(firt5CharsOfString (array[i]));

    };

    return newArray;

};

console.log(firt5CharsToUppeCase(food));



// 4) Scrivere una funzione che prende come parametro una stringa e restituisce
//    la lunghezza della stringa senza spazi:



function noSpaceTextLength (text) {

    let newText = "";

    if (typeof text === 'string') {
            
        for (let i = 0; i < text.length; i++) {
        
            if (text[i] !== " ") {
                newText += text[i];
            };

        };

        return newText.length;

    };

    return "";
    
};

console.log(noSpaceTextLength("le polpette della nonna sono buonissime"));




// 5) Scrivere una funzione che prende come parametro un stringa e 
//    restituisce il numero degli spazi: 



function numberOfSpaceChars (text) {

    let newText = "";

    if (typeof text === 'string') {
            
        for (let i = 0; i < text.length; i++) {
        
            if (text[i] === " ") {
                newText += text[i];
            };

        };

        return newText.length;

    };

    return "";

};

console.log(numberOfSpaceChars("le polpette della nonna sono buonissime"));



// Esercizio Bean Counting libro (ch. 3):


function countBs (stringa) {

    let letteraB = "";
    
    for (let i = 0; i < stringa.length; i++) {
       
        
        if (stringa[i] === 'B') {
            
            letteraB += stringa[i];
            
        };
        
    };

    return letteraB.length;

};


console.log(countBs('BaraBacBà'));


function countChar (text, char) {

    if (typeof text === 'string' && typeof char === 'string') {

        let letteraB = "";
    
        for (let i = 0; i < text.length; i++) {
       
        
            if (text[i] === char) {
                letteraB += text[i];
            };
        
        };

        return letteraB.length;

    };

    return "";

};


console.log(countChar('ciao rino, salutami checco', 'r'));