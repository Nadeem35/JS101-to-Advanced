console.log(`In this series you will learn about Destructuring Assignment`);

//  Assigning object attribute to variable
const person = {
 name: 'Nadeem',
 age: 22,
 gender: 'male'
}
console.log(person)
console.log(person.age)
console.log(person.name)
console.log(person.gender)

// let name = person.name;
// let age = person.age;
// let gender = person; 

// console.log(name)
// console.log(age)
// console.log(gender)


// Destructing Assignment
// let { name: age, gender } = person; 
// let {  gender, name, age } = person; // order does not matter 
let {gender: gender1, name: name2, age: age3 } = person; // we can assign different variable name

console.log(name2)
console.log(age3)
console.log(gender1)


// ___ Array Destructuring ___
// const arrValue = ['one', 'two', 'three'];
// const [x, y, z] = arrValue;
// console.log(x)
// console.log(y)
// console.log(z)


// Assign Default values
// let arrValue = [14, 23]
// let [x=3, y=6] = arrValue; // if not given then defult value 14 & 23 will be assign
// console.log(x)
// console.log(y)



const person1 = {
 name5: 'saif',
 
}
const { name5, age5 = 34} = person1;
console.log(name5);
console.log(age5);


// ___ Swapping Variables ___
// --- Program to swap variable ---
let p = 9;
let q = 3;
// swapping variable
[p, q] = [q, p]
console.log(p)
console.log(q)


// ___ Skip Items ____
const arrValue1 = ['one', 'Two', 'Three']
const [r, , t] = arrValue1
console.log(r)
console.log(t)


// ___ Assign Remaining Elements to a Single Variable
const arrValue4 = ['One', 'Two', 'Three', 'four'];
const [u, ...v] = arrValue4;
// const [...u, v] = arrValue4; // This wil  be show Error

console.log(u);
console.log(v);


// 
const person2 = {
 name4: 'Zakarya',
 age: 43,
 post: 'advisor',
 gender: 'male',
 fclty: "CSE"
}
// const  {name4, ...rest} = person2;
const  {name4, ...rest} = person2;

console.log(name4);
console.log(rest);


// ___ Nested Destructed Assignment ___
const arrValue5 = ['One', ['two', 'Three', 'four']]
const [x, [y, z, z1]] = arrValue5;
console.log(x)
console.log(y)
console.log(z)
console.log(z1)




const person6 = {
 name5: 'Suleman',
 age: 65,
 hobbies: {
  read: true,
  playgame: false,
  address: true,
 }
}
const {name, hobbies: {read, playgame, address} } = person6;
console.log(name5)
console.log(read)
console.log(playgame)
console.log(address)


