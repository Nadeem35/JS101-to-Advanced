console.log('In this tutorial you will learn About "JavaScript async/await" ');


// async function name(parameter1, parameter1, parmeter3, ...parameterN) {
//  // Statement
// }



// ________________
// async function f(){
//  console.log('Async function')
//  return Promise.resolve(1)
// }
// f();    // Async funtion


// _____________
// async function f(){
//  console.log('Async function')
//  return Promise.resolve(4);
// }
// f().then(function(result){
//  console.log(result)
// });



//_____ await keyword __________
// let promise = new Promise(function (resolve, reject){
//  setTimeout(function(){
//   resolve('')
//  })
// })




// ___________ JavaScript await Keyword _________
// let promise= new Promise(function (resolve, reject) {
//  setTimeout(function(){
//   resolve('Promise resolved')}, 4000);
// });

// // async function
// async function asyncFunc() {
//  // wait untill the promise resolves
//  let result = await promise; // here await is not use
//  console.log('Hello')
// }
// // calling the async function
// asyncFunc(); 



// _________ Use multiple promise _____________
let promise1;
let promise2;
let promise3;

async function asyncFunc () {
 let result1 = await promise1;
 let result2 = await promise2;
 let result3 = await promise3;

 console.log(result1);
 console.log(result2);
 console.log(result3);
}




// ___________ Error Handling _________
let promise= new Promise(function (resolve, reject) {
 setTimeout(function(){
  resolve('Promise resolved')}, 4000);
});

// async function
async function asyncFunc() {
 try {
  // wait untill the promise resolves
  let result = await promise; // here await is not use
  console.log(result)
  
 } catch (error) {
  console.log(Error);
 }
}
// calling the async function
asyncFunc();   // Promise rsolved




