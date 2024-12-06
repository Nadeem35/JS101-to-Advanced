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
