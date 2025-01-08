console.log(`In this series you will learn about JS Inheritance`);

 // _____ Parent class ________
//  class Person{
//   constructor (name){
//    this.name = 'Raqib',
//    this.gf = 'no'
//   }
//   greet(){
//    console.log(`Hello ${this.name} you have any GF: ${this.gf}`)
//   }
//  }
//  // Inherit parent class property
//  class Student extends Person{

//  }
//  // Access object
// let student1 = new Student('Hafiz');
// student1.greet();



// // ______ JS Super() keyword _______
// // ---- Parent class ----
// class Person{
//  constructer(name){
//   this.name = 'Thonus';
//  }

//  greet(){
//   console.log(`This is duplicate ${this.name}`)
//  }
// }
// // inherit parent class
//  class Student extends Person {
//        constructor (name) {
//         console.log('Creating a student class');
//         // call the  super clss constructer and in the name parameter
//         super(name);
//        }
//  }

// let student1 = new Student();
// student1.greet();



// ______ overriding Method or property _______


class Person{
 constructor(){
  this.name = "Salba",
  this.target = "Nizam-e-shari'yat"
 }
 greet(){
  console.log(` Hello ${this.name} `) // No any output
 }
}

// inherit parent class
 class Student extends Person{
  constructor(name){
   super(name);
   this.target = "Khilafat";
  }
 
 greet(){
 console.log(` Hello ${this.name} Khush'Aamdid `)
 console.log(`Hadaf:  ${this.target}`)
 }
 }  
const student1 = new Student();
student1.greet()




