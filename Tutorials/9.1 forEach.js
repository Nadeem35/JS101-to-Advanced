console.log('JavaScript for-Each Articles');

// -- Index of forEach value --
// array.forEach(function(currentValue, index, arr))


// let students = ['Arif', 'Saqib', 'Talib']
// //using forEach
// students.forEach(myFunction)
// function myFunction(item) {
//  console.log(item);
// }

//------------------------------------

// // Updating the array element
// let students = ['Arif', 'Saqib', 'Talib']

// // Using forEach
// students.forEach(myFunction);
// function myFunction(arr, item, index) {
//  // adding strings to the array element
//  arr[index] = 'Hello ' + item;
// }
// console.log(students)


// forEach with arrow function
let students = ['Arif', 'Saqib', 'Uzair'];
students.forEach(elements =>{
 console.log(elements)
});

//------------------------------------

// for loop to forEach()
const arrayItems = ['item1', 'item2', 'item3'];
const copyItems = [];

// // Using for loop
// for (let i = 0; i < arrayItems.length; i++) {
//  copyItem.push(arrayItems[i]); 
// }
// console.log(copyItem)

// // Using forEach
// arrayItems.forEach(function (item) {
//  copyItems.push(item);
// })
// console.log(arrayItems);


// define set
const set = new Set([1, 2, 3]);
// Looping through set
set.forEach(myFunction);

function myFunction(item){
 console.log(item)
}

//------------------------------------

// forEach with Maps
let map = new Map();

// Inserting elements
map.set('name','Nadeem');
map.set('age','23');

// looping through Map
map.forEach(myFunction)

function myFunction(value, key) {
 console.log(key + ' - ' + value);
}

