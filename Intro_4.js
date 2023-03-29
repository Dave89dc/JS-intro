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


const arrayOfClass = ['Andrea', 'Davide', 'Jing', 'Valentina', 'Vlad'];

// for (let i = 0; i < arrayOfClass.length; i++) {
    
//     const element = arrayOfClass[i];
//     console.log(element);
    
// };

const indexOfJing = arrayOfClass.indexOf('Jing');
console.log(indexOfJing);

const indexOfimone = arrayOfClass.indexOf('Simone');
console.log(indexOfimone);

arrayOfClass[0] = 'Pietro';
console.log(arrayOfClass);



// OGGETTI:


const Andrea= {

    name: 'Andrea',
    surname: 'Asioli',
    yob: 1978,
    inMarried: false,
    nikname: 'labstraction',
    pupils: ['Andrea', 'Davide', 'Jing', 'Valentina', 'Vlad'],
    dog: {
        name: 'Ariel',
        breed: 'Border-Collie'
    },
    email: "andreaaxia@gmail.com",
    "Cool Car": "BMW"  // Se si volesse inserire un nome particolare, separato per
                        // esempio dallo "spazio", si scrive tra le virgolette!
};

console.log(Andrea);  // L'oggetto è una collezione di dati e non rimane in ordine nel log
console.log(Andrea.surname);
console.log(Andrea['Cool Car']);  // Questo modo permette di poter richiamare ad esempio 
console.log(Andrea['yob']);      // "Cool Car", perché separato dallo spazio.



const Davode = {

    name: "Davide",
    surname: "Consigliere",
    yob: 1989,
    nikname: "Dave",
    email: "dave89dc@gmail.com"

};

const myClass = [Davode, Andrea];

// for (let i = 0; i < myClass.length; i++) {
    
//     let classOfArray = myClass[i];
//     console.log("NOME: ", classOfArray.name + " " + classOfArray.surname + " " + `(${classOfArray.nikname})`);
//     console.log("ETA: ", + `${2023 - classOfArray.yob}`);
//     console.log("EMAIL: ", classOfArray.email);
    
// };

for (let i = 0; i < myClass.length; i++) {
    
    const person = myClass[i];
    let description =
    `NOME: ${person.name} ${person.surname} (${person.nikname})
      ETA: ${2023 - person.yob}
      Email: ${person.email}`;
    console.log(description);
    
};


// CONVERSIONE (da array ad oggetti e viceversa):


const arielloArray = ['Ariel', 'Border-Collie', 'Maschio', 'Bianco&Nero'];

const arielloObject = {

    name: arielloArray[0],
    breed: arielloArray[1],
    gender: arielloArray[2],
    color: arielloArray[3]

};

console.log(arielloArray);
console.log(arielloObject);

// Trasformare oggetti in array:

const newArielloArray = Object.values(arielloObject);  // Qua si prerndono i valori!

console.log(newArielloArray);  // L'ordine non è garantito.

const newKeysArray = Object.keys(arielloObject);  // Qua si prendono le chiavi!

console.log(newKeysArray);



//  VALUE TIPES AND REFERNCE TYPES:



let daveGahan = 5;
const martinGore = daveGahan;
daveGahan = 7;

console.log(daveGahan);  // log. 7
console.log(martinGore); // log. 5

let depecheMode = {yob: 1979, genre: 'electro-rock'};
let newDepecheMode = depecheMode;
depecheMode.yob = 1980;

console.log(depecheMode.yob);  // ENTRAMBI (a differenza dell'esempio precedente)...
console.log(newDepecheMode.yob); // ...LOGGANO 1980!!!

// Gli OGGETTI vengono salvati NON nello STACK, ma nell'HEEP, quindi NON vengono salvati
// i valori (che è tipo una copia), ma viene salvato l'INDIRIZZO!!!
// Questo è il motivo per cui una variabile che contiene un oggetto cambia valore
// di conseguenza, come nell'esempio precedente! LO STESSO VALE NELLE FUNZIONI!!!



function sum2 (selectedNumber) {
    selectedNumber = selectedNumber + 2;
    return selectedNumber;
};

let andrewFletcher = 5;
let alanWilder = sum2(andrewFletcher);

console.log(andrewFletcher);  // log. 5
console.log(alanWilder);  // log. 7


function make2YearsOlder (person) {     // Questa funzione, a differenza di quella precedente,
    person.yob = (2023 - person.yob) + 2;   // va a lavorare su un'oggetto, 
    return person;                          // non un semplice valore!
};

let Dave = {name: 'Davode', yob: 1989};

let olderDave = make2YearsOlder(Dave);

console.log(Dave);        // SONO INVECCHIATI DI 2 ANNI ENTRAMBI!!!!
console.log(olderDave);  // Questo riprende estattamente il concetto spiegato prima!


// PER RISOLVERE QUESTO PROBLEMA SI FANNO I CLONI!!!


function make2YearsOlderWithClone (person) {
    // let clone = {name: person.name, yob: person.yob};
    let clone = {...person};  // Qua fa la stessa cosa di quello sopra, ma riassunto!
    clone.yob = clone.yob - 2;
    return clone.yob;
};

let simone = {name: "Simone", yob: 2003};

let olderSimone = make2YearsOlderWithClone(simone);

console.log(simone);  // In questo modo lo yob originale rimane (log. 2003).
console.log(olderSimone); // Qui invecchia di 2 anni (log. 2001).


// DESTRUTTURARE:

// Metodo normale:

// const book = {

//     title: "La Divina Commedia",
//     author: "Dante Alighieri",
//     year: 2019,
//     country: "Italy",
//     editor: "Einaudi"

// };

// const title = book.title;
// const author = book.author;

// console.log(title, "di " + author);

// Con la destrutturazione:


// const {title, author} = book;

// console.log(title, author);



// JSON (JavaScript Serialization Object Notation):


// Il JSON è utilizzato in tutti i linguaggi di programmazione,
// ed è nato per convertire velocemnte un oggetto in stringa e viceversa.


const book = {

    title: "La Divina Commedia",
    author: "Dante Alighieri",
    year: 2019,
    country: "Italy",
    editor: "Einaudi"

};

const bookToString = JSON.stringify(book);

console.log(book); // In log sarà un oggetto!
console.log(bookToString); // In log sarà una stringa!

const bookToString2 = `{"title":"Iliade","author":"Omero","year":2019,"country":"Italy","editor":"Giunti"}`;

const book2 = JSON.parse(bookToString2);
console.log(book2);  // In log sarà un oggetto!




// FILTER (filtrare un array):

// 1) Scrivere una funzione che dato un array di numeri restituisce un array con i
//    numeri maggiori o uguali a 0 (positivi):


// const Numbers = [100, -23, 0, -234, 1001, 1, 34, -12];


// function filterPositive (arrayOfNumbers) {

//     let positiveNumbers = [];
//     for (let i = 0; i < arrayOfNumbers.length; i++) {
        
//         if (arrayOfNumbers[i] >= 0) {
//             positiveNumbers.push(arrayOfNumbers[i]);
//         };
        
//     };

//     return positiveNumbers;

// };

// console.log(filterPositive(Numbers));




// MAPPING (fare un nuovo array partendo da uno di partenza):

// 2) Scrivere una funzione che dato un array di numeri li moltiplic tutti per 2:


// const Numbers = [100, -23, 0, -234, 1001, 1, 34, -12];


// function mulitplyAllElementsBy2 (array) {

//     let multiplyedNumbers = [];
//     for (let i = 0; i < array.length; i++) {
//         let result = array[i] * 2;
//         multiplyedNumbers.push(result);
//     };

//     return multiplyedNumbers;

// };

// console.log(mulitplyAllElementsBy2(Numbers));




// REDUCE (fare dei calcoli e avere un risultato da un array):

// 3) Creare una funzione che somma tutti gli elementi di un array di numeri:


const Numbers = [100, -23, 0, -234, 1001, 1, 34, -12];



function sumAllElements (array) {

    let tempNumbers = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        tempNumbers = tempNumbers + element;
    };

    return tempNumbers;

};

console.log(sumAllElements(Numbers));




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


function firt5CharsToUpperCase (array) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        
        newArray.push(firt5CharsOfString (array[i]));

    };

    return newArray;

};

console.log(firt5CharsToUpperCase(food));



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


console.log(countBs('BarbaBacBà'));


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



// ALTRI ESERCIZI:


// 1) Scrivere una funzione che prende in input un array di numeri e restituisce
//    un altro arry degli elementi in logica FizzBuzz, e il numero restituito in stringa:


const numbers = [3, 5, 15, 8, 12, 2]; // 'Fizz', 'Buzz', 'FizzBuzz', '8', 'Fizz', '2'

// function convertArrayInFizzBuzz (array) {

//     let FizzBuzzArray = [];
//     for (let i = 0; i < array.length; i++) {
        
//         if (array[i] % 5 === 0 && array[i] % 3 === 0) {
//             array[i] = "FizzBuzz";
//             FizzBuzzArray.push(array[i]);
//         } else if (array[i] % 5 === 0) {
//             array[i] = "Buzz";
//             FizzBuzzArray.push(array[i]);
//         } else if (array[i] % 3 === 0) {
//             array[i] = "Fizz";
//             FizzBuzzArray.push(array[i]);
//         } else {
//             FizzBuzzArray.push(array[i].toString());
//         };
        
//     };

//     return FizzBuzzArray;

// };

// console.log(convertArrayInFizzBuzz(numbers));


const FizzBuzzNumbers = numbers.map((previousElement, currentElement) => {  

    if (previousElement % 5 === 0 && previousElement % 3 === 0) {
            currentElement = "FizzBuzz";
        } else if (previousElement % 5 === 0) {
            currentElement = "Buzz";
        } else if (previousElement % 3 === 0) {
            currentElement = "Fizz";
        } else {
            currentElement.toString();
        };

    return currentElement;

}, 0); 

console.log(FizzBuzzNumbers);


// 2) Scrivere una funzione che prenda come input un array di numeri e restituisce
//    un altro array di numeri in cui i positivi sono trasformati in negativi e viceversa:


const numbers2 = [18, 67, -2, 202, -400, -7, 44, -5];

// function convertNumbers (array) {

//     let convertedNumbers = [];
//     for (let i = 0; i < array.length; i++) {
//         convertedNumbers.push(array[i] * -1);
//     };

//     return convertedNumbers;

// };

// console.log(convertNumbers(numbers2));

const inversionOfPositiveAndNegative = numbers2.map(elements => elements * -1);
console.log(inversionOfPositiveAndNegative);




// 3) Scrivere una funzione che prenda come input un array di stringhe e restituisce
//    un altro array di numeri con la lunghezza delle stringhe:


const arrayOfStrings = ["cioccolato", "panino con salsiccia", "focaccia", "crema di pistacchio", "belin che fame"];

// function arrayOfStringsLength (array) {

//     let stringsLength = [];
//     for (let i = 0; i < array.length; i++) {
//         stringsLength.push(array[i].length);
//     };

//     return stringsLength;

// };

// console.log(arrayOfStringsLength(arrayOfStrings));


const lengthOfElements = arrayOfStrings.map(elements => elements.length);
console.log(lengthOfElements);




// 4) Scrivere una funzione che prenda come input un array di stringhe e restituisce
//    solo quelle che contengono la lettera z:


const arrayOfStrings2 = ["squalo", "armadillo", "zanzara", "Zattera", "pipistrello", "zebù", "zebra"];

// function onlyStringsWithZChar (array) {

//     let zCharStrings = [];
//     for (let i = 0; i < array.length; i++) {
        
//         if (array[i].includes("z") || array[i].includes("Z")) {
//             zCharStrings.push(array[i]);
//         };

//     };

//     return zCharStrings;

// };

// console.log(onlyStringsWithZChar(arrayOfStrings2));

const onlyStringsWithZChar = arrayOfStrings2.filter(elements => elements.includes("z") || elements.includes("Z"));
console.log(onlyStringsWithZChar);


// 5) Scrivere una funzione che prenda come input un array di numeri e restituisce
//    solo quelli pari:


const arrayOfNumbers3 = [15, 7, 22, 4, 6, 61, 99, 102, 400, 9];

// function onlyEvenNumbers (array) {

//     let arrayOfEvenNumbers = [];
//     for (let i = 0; i < array.length; i++) {
        
//         if (array[i] % 2 === 0) {
//             arrayOfEvenNumbers.push(array[i]);
//         };

//     };

//     return arrayOfEvenNumbers;

// };

// console.log(onlyEvenNumbers(arrayOfNumbers3));


const onlyEvenNumbers = arrayOfNumbers3.filter(elements => elements % 2 === 0);
console.log(onlyEvenNumbers);





// 6) Scrivere una funzione che prende come input un array di stringhe e restituisce 
//    una stringa composta dalle iniziali:


const arrayOfStrings3 = ["Squalo", "Armadillo", "Zanzara", "Pipistrello", "Zebù", "Zebra"];

// function firstCharsOfStrings (array) {

//     let firstChars = "";
//     for (let i = 0; i < array.length; i++) {
//         firstChars += array[i][0];
//     };

//     return firstChars;

// };

// console.log(firstCharsOfStrings(arrayOfStrings3));

const stringOfFirstCharsOfElements = arrayOfStrings3.reduce((previousElement, currentElement) => previousElement + currentElement[0], "");
console.log(stringOfFirstCharsOfElements);




// 7) Scrivere una funzione che prende in input un array di numeri e 
//    restituisce il maggiore:


const arrayOfNumbers4 = [15, 7, 220, 20, 2000, 6, 61, 99, 102, 400, 9];


// function maxElement (array) {

//     let tempNumber = array[0];
//     for (let i = 1; i < array.length; i++) {
        
//         const element = array[i];
//         if (tempNumber < element) {
//             tempNumber = element;
//         };
        
//     };

//     return tempNumber;

// };


// console.log(maxElement(arrayOfNumbers4));

const maxElement = arrayOfNumbers4.reduce((previousElement, currentElement) => {
    
    if (previousElement > currentElement) {
        currentElement = previousElement;
    };

    return currentElement;

}, 0);

console.log(maxElement);




// ESERCIZI LIBRO (chapter 4):


// 1)

function rangeOfNumbers (number1, number2) {

    let arrayOfRangeOfNumbers = [];
    for (let i = number1; i < number2 + 1; i++) {
        let result = number1++;
        arrayOfRangeOfNumbers.push(result);
    };

    return arrayOfRangeOfNumbers;

};

console.log(rangeOfNumbers(7, 14));


const arrayOfNumbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArrayOfNumbers (array) {

    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    };

    return result;

};

console.log(sumArrayOfNumbers(arrayOfNumbers5));


function additionalRangeBySelectedNumber (number1, number2, number3) {

    let arrayOfRange = [number1];

    if (number1 < number2 && number3 > 0) {

        for (let range = number1; range < number2; range+1) {
            range += number3
            if (range > number2) {
                break;
            };
            arrayOfRange.push(range);
        };

    } else if (number1 > number2 && number3 < 0) {

        for (let range = number1; range > number2; range-1) {
            range += number3
            if (range < number2) {
                break;
            };
            arrayOfRange.push(range);
        };

    } else if (number1 < number2 && number3 < 0) {

        return "";

    } else if (number1 > number2 && number3 > 0) {

        return "";

    } else if (number1 === number2) {

        return "";

    };

    return arrayOfRange;

};

console.log(additionalRangeBySelectedNumber(1, 10, 2));



// 2)

function reverseArray (array) {

    let reverse = [];
    for (let i = 0; i < array.length; i++) {
        reverse.unshift(array[i]);
    };

    return reverse;

};

console.log(reverseArray(["A", "B", "C", "D"]));



// const seriesOfNumbers = [1, 2, 3, 4, 5];

// const seriesOfNumbers2 = [3, 7, 11, 21, 34, 43, 101];

// function reverseArrayInPlace (array) {

//     for (let i = array.length-1; i = 0; i--) {
        
//         array.pop()
//         array.unshift(array[i]);
        
//     };

//     return array;

// };

// reverseArrayInPlace(seriesOfNumbers);

// console.log(seriesOfNumbers);

// reverseArrayInPlace(seriesOfNumbers2);

// console.log(seriesOfNumbers2);



// TUTTI I CICLI IN JAVASCRIPT:


const numbers3 = [9, 8, 7, 1, 2, 3];


// WHILE:

let i = 0;

while (i < numbers3.length) {

    const element = numbers3[i];
    console.log(element);
    i++

};



// DO WHILE:

let j = 0;

do {
    const element = numbers[j];
    console.log(element);
    j++;
} while (j < numbers3.length);



// FOR:

for (let i = 0; i < numbers3.length; i++) {

    const element = numbers3[i];
    console.log(element);

};



// FOROF:

for (const element of numbers3) {
    console.log(element);
};



// FOR EACH:

numbers3.forEach((element) => console.log(element));



// MAP:

numbers3.map((element) => element * 2);



// FILTER:

numbers3.filter((element) => element % 2 === 0);



// REDUCE:

numbers3.reduce((previousElement, currentElement) => previousElement + currentElement, 0);

// Lo 0 è il valore iniziale (indica anche il tipo, in questo caso un numero)
// di previous element (al primo giro), che man mano cambierà.

// Esempio di reduce con stringhe:

const strings = ["qui", "quo", "qua"];

strings.reduce((previousElement, currentElement) => previousElement + currentElement, "");



// FORIN (Per ciclare gli oggetti):

const Andrea1 = {
    name: "Andrea",
    surname: "Asioli",
    hasADog: true,
    yob: 1978
};

for (const key in Andrea1) {
    if (Object.hasOwnProperty.call(Andrea1, key)) {
        const value = Andrea1[key];
        console.log(`Andrea ha la proprietà ${key} associata al valore ${value}`);
    };
};