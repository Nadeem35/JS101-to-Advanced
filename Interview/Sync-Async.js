/*
What is the difference between synchronous and asynchronous programming in JavaScript?
*/

/*
JavaScript mein synchronous aur asynchronous programming ka concept kaafi important hai, especially jab aapko code ko optimize karna ho ya time-consuming operations handle karne ho. 
Yahan par in dono concepts ka difference explain kiya gaya hai:

1. Synchronous Programming
Definition: Synchronous programming ka matlab hai ki ek time pe sirf ek task execute hota hai. Jab ek task chal raha hota hai, tab dusra task wait karta hai.
Flow: Code line by line execute hota hai, aur ek task complete hone ke baad hi next task start hota hai.
Issues: Agar koi task time-consuming hai (jaise file reading, network request), toh baaki tasks ko wait karna padta hai, jis se performance issues ho sakte hain.



*/

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
// Agar yeh code ek slow operation jaise file read kar raha ho, toh baaki operations (jaise "Task 2" aur "Task 3") wait karenge jab tak "Task 1" complete na ho jaye.



/*



2. Asynchronous Programming
Definition: Asynchronous programming ka matlab hai ki multiple tasks ek time pe parallelly execute ho sakte hain. Jab ek task chal raha hota hai, tab dusre tasks wait nahi karte, 
wo apne respective time pe execute ho jaate hain.

Asynchronous (Event Loop ke through): Jab hume time-consuming kam karna hota hai (jaise file read, API call, ya timer), toh JavaScript inhe asynchronously handle karta hai bina baaki code ko block kiye. 
Yeh "Event Loop" aur "Callback Queue" ka use karke hota hai. 

Flow: Code ko execute karte waqt kuch tasks background mein run karte hain, aur jab wo complete hote hain, tab apne callback function ya promise ke through result return karte hain.
Role of the event loop: JavaScript asynchronous tasks ko background me execute karta hai aur jab wo ready hote hain, tab unhe "Callback Queue" se le kar "Call Stack" me daal kar run karta hai.
Yeh asynchronous tasks ko synchronous execution ke saath seamlessly combine karne ka tarika hai.
The Callback Queue and the Call Stack are two key components of JavaScript's runtime environment that help it manage synchronous and asynchronous tasks efficiently.

Advantages: Asynchronous code ki wajah se aapki application ka performance better hota hai, kyunki time-consuming tasks ko background mein process kiya jaata hai, aur user ko wait nahi karna padta.

*/

console.log("Task 1");
setTimeout(() => {
    console.log("Task 2");
}, 2000);  // 2 seconds ka delay
console.log("Task 3");

// Task execution :- Task 1, Task 3, Task 2
