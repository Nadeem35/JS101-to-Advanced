// --- What is promises ---
JavaScript mein Promise ek object hai jo asynchronous operations ko handle karne ke liye use hota hai. 
Simple shabdon mein, agar koi kaam future mein complete hoga (jaise API call, file read, etc.), toh uske result ko handle karne ke liye Promise ka use hota hai.

// === Promise Ka Basic Concept 
Ek Promise future mein ek value return karega:
Success (Resolved): Jab kaam successfully ho jaye.
Failure (Rejected): Jab kaam fail ho jaye (error aaye).
  

// === States of a Promise ===
1. Pending: Jab promise abhi bhi process mein hai, aur result available nahi hai.
2. Fulfilled (Resolved): Jab promise successfully complete ho gaya aur value mil gayi.
3. Rejected: Jab promise fail ho gaya aur error return hui.

// === Points to Remember ---
1. then(): Jab promise resolve ho jaye (success), uske result ko handle karne ke liye then() ka use hota hai.
2. catch(): Jab promise reject ho jaye (failure), uske error ko handle karne ke liye catch() ka use hota hai.
3. finally(): Chahe promise resolve ho ya reject, finally() hamesha execute hota hai.


// ---  Why Promises are Useful? ---
Callback Hell ka Solution: Asynchronous operations ko handle karna easier banata hai.
Readable Code: Promises ka code clean aur readable hota hai.
Chaining: Ek promise ke baad dusra kaam karna possible hota hai (using .then()).


  

// const promise = new Promise((resolve, reject) => {
//     // Asynchronous code
//     if (success) {
//       resolve(result); // Fulfilled
//     } else {
//       reject(error); // Rejected
//     }
//   });

const fetchData = new Promise((resolve, reject) => {
  const success = true; // Simulating success
  if (success) {
    resolve("Data fetched successfully!");
  } else {
    reject("Failed to fetch data.");
  }
});



fetchData
  .then((result) => {
    console.log(result); // "Data fetched successfully!"
  })
  .catch((error) => {
    console.error(error); // "Failed to fetch data."
  })
  .finally(() => {
    console.log("Operation completed."); // Runs no matter what
  });
