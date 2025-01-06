console.log(`In this series you will learn about JS Classes`);

// // To create JSclass
// function Person() {
//  this.name = "nadeem",
//  this.age = 22;
// }
// // creating an object
// const person = new Person();
// console.log(person.name)
// console.log(person.age)


// // Creating a class
// class Person {
//  constructor(name){
//   this.name = name;
//  }
// }

// // Creating an object
// const person1 = new Person('Saifi');
// const person2 = new Person('Boy');
// console.log(person1.name)
// console.log(person2.age)




// function Person (name) {
//  this.name = 'Commando',
//  this.age = 24, 
//   this.greet = function () {
//    return (`Hello  ${this.name}`);
//   }
// }

// // creating object
// let person1 = new Person();
// let person2 = new Person();

// // accessing property
// console.log(person1.name)
// console.log(person2.age)


// ---------------------
// class Person {
//  constructor(name){
//   this.name = "IAS",
//   this.credit = 'Nadeem',
//   this.age = 43
//  }
//  // Defining method
//  greet(){
//   console.log(`Hello ${this.name} ${this.credit}`);
//  }
// }
// let person3 = new Person();
// let person4 = new Person();
// // Accessing Property 
// console.log(person3.name)
// // Accessing Method
// person4.greet();


// _____ Getter and Setters ______
class Person {
 constructer(name){
  this.name =  name;
 }

 //getter 
 get personName(){
  return this.name; 
 }

 // setter
 set personName(x){
  this.name =  x;
 }
}

let person1 = new Person('Khadim');
console.log(person1.name);

person1.personName = 'Husain';
console.log(person1.name)



// _____ Hoisting _____

// accessing class
const p = new Person(); // Reference Error

//defining class
class Person {
 constructer(name){
  a =  0;
  this.name = a;
 }
}

let person = new Person(); // Reference Error





