console.log("In this tutorial you will learn about JavaScript Array")


const words = ['Apple', 'HP', 'DELL', 'ACER'];
console.log(words)

/*---- Create an Array -------*/

//  1. Using an array literal
const array1 = ['Fazar', 'Zohar'];
console.log(array1)

//  1. Using the new keyword Important alag bracket 
const array2  = new Array('Asar', 'Maghrib', 'Isha');
console.log(array2)

// empty array
const mybag = []

const myNumber = [92, 84, 78, 76, 72]

const mySubject =  ['JavaScript', 'Java', 'DataBase', 'Python', 'DSA']

const mixData = [92, 'Physics',  78, 'Maths', 84, 'Chemistry', true, 'new', false]
console.log(mixData)


//--- Using Function ----
const newData = [
 {'task1': 'excercise'},
 [1,2,3,4],
 function hello() {
  console.log('Hello')
 }
];


// //-- Access element fro array -----
// const myArray = ['a', 'e', 'i', 'o', 'u']

// console.log(myArray.length);
// console.log(myArray[4]);
// console.log(myArray[3]);
// console.log(myArray[2]);
// console.log(myArray[1]);
// console.log(myArray[0]);


// ---- Add an element to an array ----
let Subject  = ['JavaScript', 'Python', 'ReactJS'];
Subject.push('HTML', 'CSS')  // Use to add at end of array
Subject.unshift('BootStrap')  // Use to add at beggining
console.log(Subject)

// To exchange value of array
Subject[2] = 'Angular';
Subject[9] = 'Vue';  //if index is unsufficient it will be print empty.
console.log(Subject);

// -- pop() -- is used to removed last element from an array
Subject.pop();
console.log(Subject)
 
const removedElement = Subject.pop();
console.log(removedElement)  // use to remove all element
console.log(Subject)


// -- shift() -- to remove first element at beggining
Subject.shift();
console.log(Subject)

