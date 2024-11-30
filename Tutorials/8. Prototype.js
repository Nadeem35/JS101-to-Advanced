console.log('This is based on javaScript Prototype');

// //---- create function construter
// function Person()  {
//          this.name = 'Nadeem',
//          this.age = 34
// }
// // Creating object (here are two object)
// const person1 = new Person();
// const person2 = new Person();

// // Inheriting the property from prototype
// Person.prototype.gender = 'male';
// Person.prototype.course = 'CSE';
// Person.prototype.city = 'Bareilly';

// //Access objects property
// console.log(person2.course)
// console.log(person1.age);
// console.log(person2.name);
// console.log(person1.gender);
// console.log(person1.city)
// console.log(person2.gender);

// //---Add method to a construter function Using Prototype---
// function Person() {
//          this.name = "Nadeem",
//          this.age = 43;
// }
// const person1 = new Person();
// const person2 = new Person();

// Person.prototype.greet = function () {
//     console.log('Hello' + ' ' + this.name + ' Welcome' )
// }
 
// person1.greet();
// person2.greet();



// //--------- Changing Prototype----------------
// function Person() {
//       this.name =  'Mohd' 
// }
// // Add a property
// Person.prototype.age = 25;

// // creating an object
// const person1 = new Person();
// const person2 = new Person();

// console.log(person1.age)

// // Changing the property value of prototype
// Person.prototype = { age: 34 }

// //creating new object
// const person3 = new Person();

// console.log(person3.age);
// console.log(person1.age);



//----Prototype changing------------------
function Person() {
       this.name = 'Hamid'
       // this.age = 54
}

Person.prototype.age = 42;
Person.prototype.name = 'raza';
Person.prototype = {gender: 'male'}

const person1 = new Person();
const person2 = new Person();
const person3 = new Person();

console.log(person2.name);
console.log(person1.name);
console.log(person1.age);
console.log(person3.gender);
console.log(person3.age);




