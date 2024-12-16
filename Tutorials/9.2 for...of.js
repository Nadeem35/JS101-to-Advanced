console.log("In this tutorial you will learn about JavaScript...of Loop");

const students = ['Nadeem', 'Uzair', 'Amir'];
// using for...of
for (let element of students ){

 // display the value
 console.log(element)
}

// for...of with string
const string = 'JAMIANS';
for(let i of string){
 console.log(i)
}
  

// Define  set
const set = new Set([1, 2, 3]);

// looping through set
for(let i of set) {
 console.log(i)
}


// ----- define Map -----
let map = new Map();

// inserting elements
map.set('name', 'Nadeem');
map.set('age', 23);

// Looking through Map
for (let [key, value] of map) {
 console.log(key + ' - ' + value);
}


// ----- User define Iterators -----

// creating iterator object
const iterableObj = {

 // iterator
 [Symbol.iterator]() {
  let step = 0;
  return {
   next() {
    step++;
    if (step == 1) {
     return { value: '1', done: false };
    }
    else if (step === 2) {
     return { value: '2', done: false };
    }
    else if (step === 3) {
     return { value: '3', done: false };
    }
    return { value: '', done: true }
   }
  }
 }
}

// iterating using for...of
for (const i of iterableObj) {
 console.log(i);
}


// ---- for...of with Generators
// generator function 
function* generatorFunc() {
      yield 10;
      yield 20;
      yield 30; 
}
const obj = generatorFunc();
// iteration through generator
for (let value of obj) {
 console.log(value)
}

