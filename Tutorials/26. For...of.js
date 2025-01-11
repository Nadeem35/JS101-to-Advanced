console.log("This is based  on For...of Loop");

// _______ JavaScript for...of loop ________
const students = ['Bilal', 'Ejaj', 'Ghalib', 'Sufyan', 'Zaid'];
for (const element of students) {
 // Display the value
 console.log(element)
 // console.log(students)
}


// _________ string ___________
const string =  'code';
for(let i of string){
 console.log(i);
}


// ________ for...of with Sets _______
const set = new Set([1, 2, 3])
// looping through set
for(let i of set){
 console.log(i)
}


// for...of with Maps
let map = new Map();
// inserting elements
map.set('name', 'Nadeem');
map.set('age', 23);
// Looping through Map
for (let [key, value] of map){
 console.log(key + '- ' + value);
}


// _____ User defined Iterators _________
const iterableObj = {
 [Symbol.iterator](){
  let step = 0;
  return {
   next(){
    step++;
    if(step === 1){
     return {value: '1', done: false};
    }
    else if(step === 2){
     return {value: '2', done: false};
    }
    else if (step === 3){
     return { value: '3', done: false}
    }
    return{ value: ' ', done: true};
   }
  }
 }
}
// iterable using for...of
for (const i of iterableObj) {
 console.log(i)
}


// For...of with Generators
function* generatorfunc() {
 
 yield 10;
 yield 20;
 yield 30;
}
const obj = generatorfunc();
// iterable thorugh generator
for (const value of obj) {
 console.log(value);
}

