console.log("In this tut you will learn about JavaScript Spread Operator");

// spread Operator
const arrValue = ['My', 'Name', 'is', 'Khan']
console.log(arrValue);
console.log(...arrValue);

// -- Copy array Using Spread Operator
const arr1 = ['C', 'C++', 'JAVA']
const arr2 = [...arr1, 'JavaScript', 'ReactJS']
console.log(arr2)
console.log(arr1)

// Append an ite to an array
arr1.push('JAVA');
arr1.pop('JAVA');


// Spread Operator with Object
const obj1 = { x : 1, y : 2};
const obj2 = { z : 3};

const obj3 = {...obj1, ...obj2 }
console.log(obj3)


// ________ Using Rest Parameter _________
let func = function(...args) {
 console.log(args)
}
func(9)
func(7,8,6,9,1,7)



// Using the rest parameter pass multiple arguments
 function sum(x,y,z) {
 console.log(x + y + z)
}
const num1 = [1,4,5,,7] //ignore extra arguments
sum(...num1)