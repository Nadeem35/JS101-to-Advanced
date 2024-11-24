console.log("In this lecture you will learn about Recursion")

/*
function countDown(number) {
 console.log(number);  // Display the number
 const newNumber = number - 1;  // Decrease the number values

 if (newNumber >= 5) {   // Base case
  countDown(newNumber)
 }
}
countDown(14)


//______________________________________________________

function factorial(x) {

 // if number is 0
 if (x === 0) {
  return 1;
 }

 // if number is positive
 else {
  return x * factorial(x - 1);
 }
}

const num = 5;
//calling factorial() if num is non-negative
if (num > 0) {
 let result = factorial(num);
 console.log(`The factorial of ${num} is ${result}`);
}

*/


function countDown(number) {
 console.log(number);
 const newNumber = number-1;

 if (newNumber > 4) {
    countDown(newNumber)
 }
}
countDown(8);



function factorial(x) {
 if (x == 0) {
  return 1;
 }
 else {
  return x * factorial(x-1);
 }
}
const num = 5;
if (num > 0) {
 let result = factorial(num);
 console.log(`Factorial of ${num} is ${result}`);
}



