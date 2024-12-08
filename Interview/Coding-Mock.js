// var x = 20;
// function foo() {
//   console.log(x);
//   var x = 10;
// }
// foo(); // undefind

/*--------------------------------------------------------------*/

// var a = 20;
// function foo() {
//   console.log(x);
//   let x = 10;
// }
// foo(); // can't access before intialisation

/*_________________________________________________________________________*/

// console.log("Start"); // sync
// setTimeout(() => {
//   console.log("Timeout"); // async
// }, 0);
// console.log("End"); // sync

// //// setTimeout(): Ye asynchronous function hai. Isme callback function ko Event Loop ke zariye execute hone ke liye queue mein daal diya jata hai. 
//// Bhale hi timeout 0ms hai, ye callback tabhi chalega jab synchronous code pura ho jaye.

/*_________________________________________________________________________*/
// //// what will be o/p

// setTimeout(() => {
//   console.log("TimeOut");
// });

// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");

/*_______________________________ 💥 Async function always return o/p in promise__________________________________________*/

// async function khan() {
//   console.log("Hello World");
// }
// console.log(khan());

/*____________________________ to reject or solve promise problem what should be do_____________________________________________*/

// ////-- If you want to see the resolved value, you can use .then() or await:

// async function khan() {
//   console.log("Hello World");
// }
// khan().then((result) => console.log(result));
// // Logs undefined as resolved value

/*_________________________________________________________________________*/

// console.log([1, 2] == [1, 2]); // output false because array store at distinct m/m location

// let a = [1, 2, 3]
// let b = a;
// console.log(a==b); // O/P --> false because its compairing the reference not value

/*
In JavaScript, the equality operators (== and ===) compare objects by reference, not by value. 
This means that two arrays are only considered equal if they reference the exact same memory location.

In your code, [1, 2] creates a new array in memory.
The second [1, 2] also creates a new, distinct array in memory.
*/

/*_________________________________________________________________________*/

// const obj1 = {};
// const obj2 = {};

// console.log(obj1 == obj2); // also False

//-------------------------------------------

// const user1 = {
//   name: "Nadeem",
//   age: 25,
//   address: {
//     city: "Bareilly",
//     State: "UP",
//   },
// };

// const user2 = user1;

// user2["name"] = "Zaid";

// console.log(user1); // Zaid
// console.log(user2); // Zaid

//----- Bcs assigning obj2 = obj1 so both are coming from the same Location when we made changes in one then it will also made in another

/*_________________________________________________________________________*/

//--- Q. find the value which is less than 3

// const num = [1, 2, 3, 5, 4];
// const res = num
//   .filter((e) => {
//     return e < 3;
//   });
// console.log(res);

// -----
// const num = [1, 2, 3, 5, 4];
// const res = num
//   .filter((e) => {
//     return e < 3;
//   })
//   .map((val) => {
//     // return val + 5;
//     // return val + val;
//     return val * 111;
//   });
// console.log(res);

// ---- convert return keyword into implicit return (means without return keyworn we are using arrow(=> keyword))

// const num = [1, 2, 3, 5, 4];
// const res = num.filter((e) => e < 3).map((val) => val * 100);
// console.log(res);

// -------------
// const num = [1, 2, 3, 5, 4];
// const res = num
//   .filter((e) => e < 4) // Implicit return
//   .map((val) => val * 101); // Implicit return

// console.log(res);

// -----------------

// const num = [2, 4, 6, 8];

// // const newarr = num.filter((num) => num > 5);

// const newarr = num.filter((a) => a <= 6).map((b) => b * 10);
// console.log(newarr);

// --------------------
/*
The filter method in JavaScript is used to create a new array containing all the elements of the original array that satisfy a specific condition.

Main Task:
The primary purpose of the filter method is to filter out elements that do not meet the given condition, leaving only the ones that pass the test.

How It Works:
The filter method takes a callback function as its argument.
The callback function is invoked for each element in the array.
If the callback returns true, the element is included in the new array.
If the callback returns false, the element is excluded from the new array.

Syntax:
array.filter(callback(element, index, array), thisArg);

callback: A function that tests each element of the array. It receives the following arguments:

element: The current element being processed.
index (optional): The index of the current element.
array (optional): The original array.
thisArg: (optional) Value to use as this when executing the callback.

Return Value:
A new array with elements that pass the test. If no elements pass, the method returns an empty array.
*/

//--- 1. Filtering Even Numbers

// const numbers = [1, 2, 3, 4, 5];
// const evens = numbers.filter((num) => num % 2 === 0);
// console.log(evens); // [2, 4]

//--- !2. Filtering Strings Based on Length

// const words = ["apple", "bat", "cat", "elephant"];
// const longWords = words.filter((word) => word.length > 3);
// console.log(longWords); // ['apple', 'elephant']

//--- 3. Removing Falsy Values

// const mixed = [0, 1, false, 2, "", 3];
// const truthyValues = mixed.filter(Boolean);
// console.log(truthyValues); // [1, 2, 3]

// Key Points
// Does not modify the original array.
// Always returns a new array.
// Useful for selecting elements based on a condition, like filtering out specific values or finding valid items in a list.

// ----
// const as = ["Shah", "Shafi", "Nadeem", "Sanam", "Ayyan"]
// const re = as.filter(as => as.length >= 3);

// ----
// const as = [0, 1, 2, null, false, Boolean, true];
// const re = as.filter(Boolean) // boolean is an function element here
// console.log(re);

// ---- to find function element overall ----

// const res = as.filter((as) => typeof as == "function");
// console.log(res);

// ----
// const as = [0, 1, 2, null, false, Boolean, NaN, true];
// const res = as.filter(as => typeof as == "function");
// console.log(res); // Output: [Boolean]

/*____________________ Map Methods _____________________*/

// const num = [2, 4, 6, 8, 10];
// const res = num.map((num) => num * num);
// console.log(res);

// ----
// const users = [
//   { name: "Nadeem", age: 25 },
//   { name: "Chaman", age: 30 },
//   { name: "Fari", age: 35 },
// ];

// ----
// const names = users.map(user => user.name);
// console.log(names); // ["Alice", "Bob", "Charlie"]

// ----
// const words = ["hello", "world", "Sanam"];
// const res = words.map(words => words.toUpperCase())
// console.log(res); // ["HELLO", "WORLD", "SANAM"]

// ----
// const array = [10, 20, 30, 40, 50, 60];
// const indexes = array.map((_, index) => index);
// console.log(indexes); // [0, 1, 2]

// ----
// const as = [0, 1, 2, null, false, Boolean, NaN, true];
// const res = as.map(item => (typeof item === "function" ? "yes" : "Not"));
// console.log(res); //  ['Not', 'Not', 'Not', 'Not', 'Not', 'yes', 'Not', 'Not']

/*__________________________________________*/

// --- Split array into string
// const str = "hello sanam chaman"

// const arr = str.split(' ')
// console.log(arr);

// ----  to convert every 1st letter of the word in uppercase
// const res = arr.map(arr => arr[0].toUpperCase()+ arr.slice(1) )
// console.log(res);

/*__________________________________________*/

// // Gues the o/p (explaination in procodrr lectr)
// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 5000);
// }

/*__________________________________________*/

// setTimeout(() => {
//   console.log("Timeout"); // callback Queue
// }, 0);
// Promise.resolve().then(() => {
//   console.log("Inside promise"); // Macro task queue more prior then call back
// });
// console.log("ENd");

/*__________________________________*/
//-- Method to avoid promises from async function
// async function brave() {
//   console.log("Hello India");
// }
// console.log(brave()); // nutral
// brave().then((res) => console.log(res)); // avoid promise

