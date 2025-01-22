
// let a = this;
// console.log(a)



// this.name = 'nadeem';
// console.log(window.name)



//  >>>>>>>>>>----2. this Inside Function---<<<<<<<<<<<<<<<<<<

// function greet() {
//     console.log(this)
// }
// greet();



//  >>>>>>>>>>----3. this Inside Constructor Function---<<<<<<<<<<<<
// function Person() {

//     this.name = 'Sadeem';

//     console.log(this);

// }
// let Person1 = new Person();
// console.log(Person1.name)


//  >>>>>>>>>>----4. this Inside Constructor Function---<<<<<<<<<<<<

// const Person={
//     name: 'Saqib',
//     age: 23,
//     greet(){
//         console.log(this),
//         console.log(this.name),
//         console.log(this.age)
//     }
// }
// Person.greet();


//  >>>>>>>>>>----5. this Inside Inner Function---<<<<<<<<<<<<
// const Person = {
//     name: 'Ahmad',
//     city: 'Bareilly',

//     greet() {
//         console.log(this)
//         console.log(Person.city)

//         function InnerFunction() {
//             console.log(this)
//             console.log(Person.city)

//         }
//         InnerFunction()
//     }
// }
// Person.greet();



// this inside the arrow function

const greet = () =>{
    // name: 'Gulf',
    // age: 23,

    console.log(this)
    // console.log(this.name)
}

greet();