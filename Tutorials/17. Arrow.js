console.log("Here you will tecah about Arrow function in JS");
// let x= function (x, y) {
//  return x * y;
// }

// let x1 = (a, b) => a * b;

// Exp - 1 : without any  argument
let greet = () => console.log('Good')
greet()

// exp - 2 : with an argument
let greet1 = (x) => console.log(x)
greet1("fine");

// Exp - 3 :
let age = 18;
let welcome = (age < 18) ?
() => console.log('Baby'):
() => console.log('Adult');
welcome();

// Exp - 4 : Multiple arrow function 
let sum = (a, b) => {
 let result = a + b;
 return result;
}

let result1 = sum(4,5);
console.log(result1);


// --- Inside a regular function ---
function Person() {
 this.name = 'Nasim',
 this.age = 43,
 this.sayName = function () {

  // This refers to the global object
  console.log(this.age);
  function innerFunc() {
   console.log(this.age);
   console.log(this);
  }
  innerFunc();
 }
}
let x = new Person();
x.sayName();


// Inside arrow function
function Person() {
 this.name = 'jangi',
 this.age = 65;
 this.sayName = function () {

  console.log(this.age);
  let innerFunc = () => {
   console.log(this.age);
  }

  innerFunc();
 }
}

const y = new Person();
y.sayName();


// ---- Arguments Binding ----
let c = function () {
 console.log(arguments);
}
c(34,56,43)


// without passing arguments
let d = (...n) =>{ 
 console.log(n)
}
 d(43,5,43)



 // // Arrow Fuction with Promises and Callbacks
 // //             ES5
 // asyncFunction().then(function() {
 //  return asyncFunction1();
 // }).then(function() { 
 //  return asyncFunction2();
 // }).then(function() {
 //  finish;
 // });

 //           ES6
 // asyncFunction()
 // .then(() => asyncFunction1() )
 // .then(() => asyncFunction2() )
 // .then(() => finish);



 //
 let person = {
  name: 'MKasim',
  age: 15,
  sayName: () => {

   console.log(this.age)

  }
 }

 person.sayName();


 // ----------------
 
let Foo = () => {};
let foo = new foo();