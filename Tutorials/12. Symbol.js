console.log('This tutorial is Based on Symbole');

const value1 = Symbol('hello');
const value2 = Symbol('hello');
console.log(value1 === value2);

// // --- creating symbols ---
// const x = Symbol('hey')
// console.log(x);
// console.log(x.description);


// --- Add symbols as an Object key ---
// let id = Symbol("id");

// let person = {
//  name: "Umar",

//  // adding symbols as an key
//  [id]: 123  // not "id": 123
// };
// console.log(person)


// --- 
// let id = Symbol("id")

// let person = {
//  name: "Umar",
//  age: 32,
//  [id]: 23
// };
// for (let key in person){
//  console.log(key)
// }


// let person = {
//  name: 'Umar',
//  age: 34,
 
// }
// let id = Symbol("id")
// person[id] = 12;
// console.log(id)


// let person = {
//  name: "Ghalib"
// }
// let id = Symbol("id");
// person[id] = "Another";
// console.log(person)


let person = {
 name: 'Qasim'
}
// using string as key
person.id = 12;
console.log(person.id)

person.id =  'Another value'
console.log(person.id);


// --- Symbols Methods ---
// get symbols by names
let sym = Symbol.for('hello');
let sym1 = Symbol.for('id')

// get name by symbole
console.log( Symbol.keyFor(sym));
console.log( Symbol.keyFor(sym1));

// Symboles properties Examples
const x = Symbol('hey')

// description property
console.log(x.description);

const StringArray = ['a', 'b', 'c']
const numberArray = [1, 2, 3];

numberArray[Symbol.isConcatSpreadable] = false;

let result = StringArray.concat(numberArray);
console.log(result);