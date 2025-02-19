// Basic types 
// . Number, String, boolean
// . Array, tuples
// . Any, Unknown, Never, Void
// . Enums

/*

Type Inference
Union and Intersection Types 
Type Aliases

Interfaces

Classes 
. Constructor
. Public, Private, Protected Members
. Randomly Properties

*/

//---------------

// ----  array types -----
// let arr = [1, 2, 3, 5]
// console.log("Before pop = " + arr);

// let arr2 = arr;
// arr2.pop() // when we pop a value from an array it will pop permanently from at origin from pop
// console.log("value od arr2 : " + arr2); 
// console.log("value od arr : " + arr);


// -------  tuples types ---------

// // let arr: [number, boolean, string] = [1, false, 'cost'];
// var arr: [number, string, boolean]
// arr = [32, 'saif', false]// ✅ Correct
// // arr.push(12); // ❌ This will break tuple structure
// arr.push(12);
// console.log(arr);

// ------------- any variable ------

// let valu: any // cant redeclare block scope variable
// var valu: any
// valu = 328;
// valu = "Nadeem"
// console.log(valu)


//  ---------- never -------


// function abcd(): void {
//     return "Hey";
// }
// let res = abcd()
// console.log(res);



// --------- enum ------------
/*
Enums are useful when you need a fixed set of named constants
 1. Handling Directions in a Game or UI
 Imagine you're building a game where a player can move top, left, right, or bottom.


*/

// // --- M-1 ---
enum Direction {
    top = "TOP",
    left = "LEFT",
    right = "RIGHT",
    bottom = "BOTTOM"
}
let res = Direction.top
console.log(res);
console.log(Direction.left);



// // --- M-2 ---
enum MousePosition{
    x = 0,
    y = 0
}
let a =  MousePosition.x
let b =  MousePosition.y

console.log(a);
console.log(b);


// // --- M-1 ---
enum Human{
    name = "Nadeem",
    age = 54
}
console.log(Human.name);
console.log(Direction.right);
console.log(MousePosition.x);

