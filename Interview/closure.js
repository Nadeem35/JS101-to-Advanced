What is closure in Javascript ?
Closure JavaScript ka ek feature hai jisme ek inner function apne surrounding scope (lexical scope) ke variables ko yaad rakhta hai, chahe outer function execute hone ke baad khatam hi kyu na ho jaye.
Ek tarah se, closure ka matlab hai ki function apne surrounding environment ke variables ko access aur preserve kar sakta hai, even after the function is no longer active.

closure in simple language 
1. Closure JavaScript ka ek feature hai jisme ek inner function apne surrounding scope (lexical scope) ke variables ko yaad rakhta hai, chahe outer function execute hone ke baad khatam hi kyu na ho jaye.
2. Ek tarah se, closure ka matlab hai ki function apne surrounding environment ke variables ko access aur preserve kar sakta hai, even after the function is no longer active.


  // Exam - 1
  function outerFunction() {
    let outerVariable = "I am from outer scope";
    function innerFunction() {
        console.log(outerVariable); // Accessing variable from outerFunction
    }
    return innerFunction;
}
const closureFunction = outerFunction(); // outerFunction call hota hai
closureFunction(); // Output: I am from outer scope

// Explanation --->
innerFunction ek closure banata hai.
Jab outerFunction execute hota hai, tab outerVariable create hota hai aur innerFunction us variable ko yaad rakhta hai.
Even though outerFunction finish ho gaya, closureFunction still outerVariable ko access kar sakta hai.



  // Exam - 2
  function createCounter() {
    let count = 0; // Outer variable
    return function () { // Inner function
        count++; // Accessing and modifying outer variable
        console.log("Current count:", count);
    };
}
const counter = createCounter(); // Closure ban gaya
counter(); // Output: Current count: 1
counter(); // Output: Current count: 2
counter(); // Output: Current count: 3


// ---> Closure Summary :
. Closure ek JavaScript feature hai jo ek function ko apne outer scope ke variables ko access aur yaad rakhne ki power deta hai, even after outer function execute ho chuka ho.
. Yeh asynchronous tasks (jaise event listeners, API calls) aur private data ko secure karne ke liye kaam aata hai.
. Closure real-world applications me bahut useful hota hai!
  

