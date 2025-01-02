console.log(`In this series you will learn about JavaScript Map`);

// _____ Create JavaScript Map ________
const map = new Map();
console.log(map)

// ______ Insert Item to Map ______
let map1 = new Map();
// insert key-value pair
map1.set('info', {name: 'Nadeem', age: 23});
console.log(map1);

// __ Map with Object key ___
let map2 = new Map();
let obj = {};
map2.set(obj, {class: 'CSE', faculty: "CS & IT"})
console.log(map2);


// ______ Access Map Elements ________
let map3 = new Map();
map1.set('info', {name:'Comrade', age: 32})
console.log(map1.get('info'));

// ___ Cheak Map Elements
const set1 = new Set();
let map4 = new Map();
map1.set('info', {my: 'Nadeem', age: 43})
console.log(map1.has('info'));

// ______ Removing Elements 
let map5 = new Map();
map4.set('info',{name: 'Great', fruits: 'apple'})
// Removing a particular element
map4.delete('address');
console.log(map5);

map1.delete('info');
console.log(map1);

//---- to remove value
let map6 = new Map();
map6.set('info', {name: 'Nadeem', age: '43'});
// To remove all elements
map6.clear();
console.log(map6)


// ______________ JavaScript Size
let map7 = new Map();
map7.set('info',{name: 'Nadeem', age: 34})
console.log(map7.size);


//_________ Iterate through a Map ___________
let map8 = new Map();
map8.set('name', 'Khadim')
map8.set('age', 45)
// looping through Map
for (let [key, value] of map8){
 console.log(key + '- ' + value)
}

// ______ Using forEach method ____
let map9 = new Map();
map9.set('name', 'Khalid')
map9.set('Laqab', "Saif'Ullan")
map9.forEach(function(key, value){
 console.log(value + '- ' + key)
})


//  __________ Iterate over map keys
let map10 = new Map();
map10.set('name', "Salahudin")
map10.set('win', "Fateh")
// for (let key of map10.keys()){
for (let values of map10.values()){
 // console.log(key)
 console.log(values)
};

// ______ Get key/ Values of Map ________
let map11 = new Map();
map11.set('name', "Heaven")
map11.set('time', "Death")
// looping through the Map
for (let elem of map11.entries()){
 console.log(`${elem[0]}: ${elem[1]}`)
}




//                ✍🏻🎯💻
// ___________ JavaScript WeakMap _________
// const weakMap = new WeakMap();
// console.log(weakMap);


// let obje = {};
// // adding object (element) to WeakMap
// weakMap.set(obj, 'Hello');
// console.log(weakMap)


// // Add new data in weak map show Error
// const weakMap = new weakMap();
// // adding string as a key in weakMap
// weakMap.set('obj', 'Hello'); // Error


// // _______ WeakMap Methods _____________
// const weakMap = new WeakMap();
// console.log(weakMap)

// let obje = {}

// // Adding object (element) to WeakMap
// weakMap.set(obje, 'Hello');

// console.log(weakMap);

// // get the element of a weakMap
// console.log(weakMap.get(obje));

// // cheak if an element is present in weakMap
// console.log(weakMap.has(obje))

// // Delete the element of a WeakMap
// console.log(weakMap.delete(obje))

// console.log(weakMap);


// _________ WeakMaps are Not iterable _____
const weakMap = new WeakMap();
console.log(weakMap)

let objec = {}

// adding object (element) to weakMap
weakMap.set(objec, 'Hello')

// looping through WeakMap
for(let i of weakMap){
 console.log(i)
}



