/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
// console.log("Esercizio 1");
// const pets = ["dog", "cat", "hamster", "redfish"];
// for (let i = 0; i < pets.length; i++) {
//   console.log(pets[i]);
// }

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
// console.log("Esercizio 2");
// pets.sort();
// console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
// console.log("Esercizio 3");
// pets.reverse();
// console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
// console.log("Esercizio 4");
// const removedElement = pets.shift();
// pets.push(removedElement);
// console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
// console.log("Esercizio 5");
// const cars = [
//   {
//     brand: "Ford",
//     model: "Fiesta",
//     color: "red",
//     trims: ["titanium", "st", "active"],
//   },
//   {
//     brand: "Peugeot",
//     model: "208",
//     color: "blue",
//     trims: ["allure", "GT"],
//   },
//   {
//     brand: "Volkswagen",
//     model: "Polo",
//     color: "black",
//     trims: ["life", "style", "r-line"],
//   },
// ];
// for (let i = 0; i < cars.length; i++) {
//   cars[i].licensePlate = "IT" + Math.floor(Math.random() * 1000) + "FR";
// }
// console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
// console.log("Esercizio 6");
// cars.push({
//   brand: "Volkswagen",
//   model: "Golf",
//   color: "white",
//   trims: ["GTD", "GTI", "r-line"],
//   licensePlate: "IT091FR",
// });

// for (let i = 0; i < cars.length; i++) {
//   cars[i].trims.pop();
// }
// console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
// console.log("Esercizio 7");
// const justTrims = [];
// for (let i = 0; i < cars.length; i++) {
//   const FirstTrim = cars[i].trims[0];
//   justTrims.push(FirstTrim);
// }
// console.log(cars);
// console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
// console.log("Esercizio 8");
// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].color[0].toUpperCase() === "B") {
//     console.log("Fizz");
//   } else {
//     console.log("Buzz");
//   }
// }

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
// console.log("Esercizio 9");
// const numericArray = [
//   6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
// ];
// let q = 0;
// while (numericArray[q] !== 32) {
//   console.log(numericArray[q]);
//   q++;
// }

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
// console.log("Esercizio 10");
// const charactersArray = ["g", "n", "u", "z", "d"];
// const newArray = [];
// for (let i = 0; i < charactersArray.length; i++) {
//   let char = charactersArray[i];
//   switch (char) {
//     case "a":
//       char = 1;
//       newArray.push(char);
//       break;
//     case "b":
//       char = 2;
//       newArray.push(char);
//       break;
//     case "c":
//       char = 3;
//       newArray.push(char);
//       break;
//     case "d":
//       char = 4;
//       newArray.push(char);
//       break;
//     case "e":
//       char = 5;
//       newArray.push(char);
//       break;
//     case "f":
//       char = 6;
//       newArray.push(char);
//       break;
//     case "g":
//       char = 7;
//       newArray.push(char);
//       break;
//     case "h":
//       char = 8;
//       newArray.push(char);
//       break;
//     case "i":
//       char = 9;
//       newArray.push(char);
//       break;
//     case "l":
//       char = 10;
//       newArray.push(char);
//       break;
//     case "m":
//       char = 11;
//       newArray.push(char);
//       break;
//     case "n":
//       char = 12;
//       newArray.push(char);
//       break;
//     case "o":
//       char = 13;
//       newArray.push(char);
//       break;
//     case "p":
//       char = 14;
//       newArray.push(char);
//       break;
//     case "q":
//       char = 15;
//       newArray.push(char);
//       break;
//     case "r":
//       char = 16;
//       newArray.push(char);
//       break;
//     case "s":
//       char = 17;
//       newArray.push(char);
//       break;
//     case "t":
//       char = 18;
//       newArray.push(char);
//       break;
//     case "u":
//       char = 19;
//       newArray.push(char);
//       break;
//     case "v":
//       char = 20;
//       newArray.push(char);
//       break;
//     case "z":
//       char = 21;
//       newArray.push(char);
//       break;
//     default:
//       console.log("switch default"); //debug
//   }
// }

// console.log(newArray);
