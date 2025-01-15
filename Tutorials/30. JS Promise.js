console.log('In this tutorial you will learn About"JavaScript Promise"');


// _____ Create a Promise _____
// let promise = new Promise(function(resolve, reject){
//  // do something
// })


// Ex-1 ================
// const count = true;
// let countValue = new Promise(function(resolve, reject){
//  if (count) {
//   resolve("This is countable value")
//  }else{
//   reject("There is no countable value")
//  }
// });
// console.log(countValue)




// Exp-2 =========================
// // return a promise
// let countValue = new Promise(function(resolve, reject){
//  resolve("promise resolved");
// })

// // executes when proise is resolved seccessfully
// countValue
// .then(function successvalue(result){
//  console.log(result)
// })
// .then(function successvalue1(){
//  console.log("You can call multiple function in this way")
// })




//______ JavaSript catch() method_______________
// let countValue = new Promise(function(reject){
// reject('Promise rejected');
// });

// countValue.then(
//  function successValue(result) {
//   console.log(result);
//  },
// )
// .catch(
//  function errorValue(result) {
//   console.log(result);
//  }
// );




// ______ Javascript Promise ________
// ====== JavaScript Callback function ======
// api(function (result) {
//  api2(function (result2) {
//   api3(function (result3) {
//    // do work
//    if(error){
//     // Do something
//    }
//    else{
//     // do something
//    }
//   });
//  });
// });



// ___________ JavaScript finally method ___________
let countValue = new Promise (function (resolve, reject){
 // could be rsolved or rejected
 resolve('Promise resolved');
});

// add other blocks of codes
countValue.finally(
 function greet() {
  console.log('This code is executed.');
 }
)

