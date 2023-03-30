// INTRO 6 A JAVASCRIPT:


// LINKED LIST:

// La linked list viene meglio degli array se si hanno dei dati che cambiano spesso,
// perché gli array perdono un sacco di tempo, perché ogni volta bisogna crearne uno
// nuovo per ogni cambiamento, mentre nelle linked list si creano delle semplici deviazioni.
// La linked list è composta da step successivi uno dietro l'altro (next).


// Altre 2 strutture dati simili alle linked list sono:


// Tree:

// Invece di avere step successivi, come la linked list, ha diverse ramificazioni (childs):


// Grafo:

// Ha tuti dei NODES collegati l'uno con l'altro, non esistono padre e figli.


// ESERCIZIO PER CREARE UNA LINKED LIST:

const lastElement = {
    value: 10,
    next: null
};

const thirdElement = {
    value: 15,
    next: lastElement
};

const secondElement = {
    value: 5,
    next: thirdElement
};

const firstElement = {
    value: 12,
    next: secondElement
};


let element = firstElement;
while (true) {
    console.log(element.value);
    if (element.next) {
        element = element.next;
    } else {
        break;
    };
};

function fromLinkedListToArray (first) {

    let tempArray = [];
    let element = first;
    while (true) {
        tempArray.push(element.value);
        if (element.next) {
            element = element.next;
        } else {
            break;
        };
    };

    return tempArray;

};

console.log(fromLinkedListToArray(firstElement));



const depecheMode = ["Dave Gahan", "Martin Gore", "Andrew Fletcher", "Alan Wilder"];


function fromArrayToLinkedList (array) {
    
    let previousElement = null;
    for (let i = array.length-1; i >= 0; i--) {
        
        const element = array[i];
        const listElement = {
            value: element,
            next: previousElement
        };

        previousElement = listElement;
        
    };

    return previousElement;

};

console.log(fromArrayToLinkedList(depecheMode));


// Esercizio libro:

// Funzione che aggiunge una lista aggiuntiva come prima ad un'altra lista:

function prependListElement (first, newElement) {

    const listElement = {
        value: newElement,
        next: first
    };

    return listElement;

};


console.log(prependListElement(firstElement, 100000));

// Creare una funzione che tramite l'indice trovi l'elemento cercato all'interno di una lista:

function listElementAtIndex (first, index) {

    let element = first;
    let i = 0;
    while (true) {

        if (i === index) {
            return element.value;
        } else if (element.next) {
            element = element.next;
            i++;
        } else {
            return undefined;
        };

    };

};

console.log(listElementAtIndex(firstElement, 0)); // 12
console.log(listElementAtIndex(firstElement, 3)); // 10
console.log(listElementAtIndex(firstElement, 10)); // undefined
