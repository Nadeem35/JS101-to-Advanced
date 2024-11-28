console.log("This is construter based tutorial");

//// constructor function
// function Person() {
//  this.name = 'Saifi',
//  this.age = 23,
//  this.course = 'CSE'
   
//     this.greet =  function(){
//      console.log('assalamualaikum');
//     }
// }

// // create an object
// const person1 = new Person();
// const person2 = new Person();
// const person3 = new Person();

// // Access Properties
// console.log(person1.name);
// console.log(person2.name)
// console.log(person2.age);
// console.log(person3.course)



//--------------------------------------
 
//// constructer function
// function Person (person_name, person_age, person_gender, person_course) {
//     this.name = person_name,
//     this.age = person_age,
//     this.gender = person_gender
//     this.course = person_course

//     this.greet = function(){
//         return('Hi' + ' ' + this.name);
//     }
// }

// // TO create an object
// const person1 = new Person('Salahudin', 32, 'male', 'CSE');
// const person2 = new Person('Ayyubi', 68, 'male', 'IT');

// // To access an object
// console.log(person1.name);
// console.log(person2.name);

// console.log(person1.age)
// console.log(person2.age)

// console.log(person1.gender)
// console.log(person2.gender)

// console.log(person1.course)
// console.log(person2.course)


//---------Constructer function VS Object Literal---------
 
// // Using object literal
// let person = {
//     name: 'Nadeem'
// }
// // create constructr function
// function Person() {
//     this.name = 'Nadeem'
// }
// // access constructer
// let person1 = new Person();
// let person2 = new Person();

// console.log(person1.name)
// console.log(person2.name)

// person1.age = 34;
// person2.age = 45;
// console.log(person1.age)
// console.log(person2.age)


//------Using object lateral-----
// let person = {
//     name: "Sa'alba"
// }
// console.log(person.name);

// let student = person;

// // Changes the property of an object
// student.name = 'Uzair';

// // now change the origins object property 
// console.log(person.name);



//-----Adding Properties and Methods in an Objects------
// // create constructor function 
// function Person() {
//     this.name = "Talib",
//     this.age = 21
// }

// // create an object
// let person1 = new Person()
// let person2 = new Person();

// // adding Property to person1 object
// person1.name = 'comrade'

// // adding method to person1 object
// person1.greet = function () {
//     console.log('Hello');
// }
// person1.greet();   

// // Errorcode -- Person2 does not have greet() method
// // person2.greet();


//------JavaScript function Prototype------
// function Person () {
//     this.name = 'Java',
//     this.age = 40
// }

////Creating a new object
// let person1 = new Person();
// let person2 = new Person();
 
//// Adding a new property to constructer function
// // Person.prototype.gender = 'Male';
// person1.gender = 'Male';

// console.log(person1.name)
// console.log(person2.age)
// console.log(person1.gender)

//---------JavaScript Built-in Constrcter-----------
let a = new Object();
let b = new String();
let c = new  Number();
let d = new Boolean();
  
// To create new object in JS 
const name = new String('Hamid');
console.log(name);

// craete a number
const number = new Number(99);
console.log(number)

// To create a boolean
const count = new Boolean(true);
console.log(count)
