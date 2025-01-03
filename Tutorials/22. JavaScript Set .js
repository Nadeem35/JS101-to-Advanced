console.log(`In this series you will learn about JavaScript Set Method`);

// ____ Create Set ____
const set =  new Set();
console.log(set)

// Multiple types of value
const set1 = new Set([1, 1, 'hello', {count: true}]);
console.log(set1)

// Set with duplicate value
const set2 = new Set([1,2,3,4,3,2,1]);
console.log(set2);

console.log(set1.values());
console.log(set2.values());

console.log(set.has(2))
console.log(set2.has(2))
console.log(set2.has(5))

// ___ To add new value  in 'set' ____
const set3 = new Set([9,8,7,6,5, 'world', {count: true}]);
console.log(set3);
set3.add(1,2,3)
console.log(set3);


// ---- Removing Element
set3.delete(8)
console.log(set3)

// delete all element
set3.clear();
console.log(set3)


// Iterate Sets
const set4 = new Set([1,2,4]);
for (let i of set4){
 console.log(i)
}


// ______ JavaScript WeakSet _____
// const weakSet = new WeakSet();
// console.log(weakSet);

// let obj = {
//  message: "hello",
//  sendMessage: true
// }


// // adding object (element) to the WeakSet
// weakSet.add(obj);
// console.log(weakSet);

// // trying to add string to weakset
// weakSet.add('Hello');
// console.log(weakSet); // throws Error : Attempted to add a non-object key to a Weakset


// WeakSet Methods
const weakSet = new WeakSet();
console.log(weakSet)

const obj = {a:1};
weakSet.add(obj)
console.log(weakSet);

console.log(weakSet.has(obj))

weakSet.delete(obj)
console.log(weakSet)


// const weakSet1 = new weakSet1({a:1});
// for (let i of weakSet){
//  console.log(i) // TypeError
// }


// ____ mathmatical Set Operations ______
//---- Set Union Operation -----
function union(a,b) {
 let unionSet = new Set(a);
 for(let i of b) {
      unionSet.add(i)
 }
 return unionSet
}

// // Two set of fruits
// let setA = new Set(['Apple', 'Mango', 'Graps'])
// let setB = new Set(['Onion', 'Potato', 'Tomato'])
// let result = union(setA, setB)
// console.log(result)


// Set Intersection Operation
function intersection(setA, setB) {
 let intersectionSet = new Set();
 for (let i of setB){
  if (setA.has(i)){
   intersectionSet.add(i)
  }
 }
 return intersectionSet;
}

let setA = new Set(['Apple', 'Mango', 'Graps'])
let setB = new Set(['Onion', 'Potato', 'Tomato'])
let result = intersection(setA, setB)
console.log(result)
