console.log("This is based on JavaScript Arrow function");


let result = function (x, y) {
 return x + y;
}

let res = (x,y) => x*y;



// class Person{
//  constructor(name){
//   this.name = name;
//  }
// }

// const person1 = new Person('Taki')
// console.log(person1.name)

// function sum(x,y=3) {
//  console.log(x + y)
// }
// sum(9)
// sum(4893,29320)

// //--------- Template Literal ----------------

// const first_name = 'Mohd'
// const last_name = 'saifi'
// console.log('Welcome' + " " + first_name + " " + "Nadeem " + last_name);

// console.log(`Hello ${first_name}  Nadeem  ${last_name}`)

// ---------- JS Destructing ---------------
const person = {
 name: 'Saba',
 age: '43',
 gender: 'male'
}
// let name = person.name;
// let age = person.age;
// let gender = person.gender;

let { name, age, gender, } = person;
console.log(name)
console.log(age)
console.log(gender)


// ---------- JS import and Export -------
// //export 
//  export default function contact(name, age) {
//  console.log(`The name is ${name}. And age is ${age}.`);
// }

// import contact from '.contact';
// contact('sab', 23);


// ------------ JavaScript Promisess -----------------
// return a promises
let countValue = new Promise(function (resolve, reject) {
 reject('Promise rejected');
});

//execute when promise is resolved succesfully
countValue.then(
 function successValue(result) {
  console.log(result);   // Promise resolved
 },
)


// Rest parameter and Spread Operator
function show(a, b, ...args) {
 console.log(a);
 console.log(b);
 console.log(args);
}
show('one', 'Two', 'Three', 'four', 'five', 'six', 'seven');

let arr1 = ['one', 'two']
let arr2 = [...arr1, 'three', 'four', 'five'];
console.log(arr1)
console.log(arr2)

