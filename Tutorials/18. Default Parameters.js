console.log('This is based on Default paraeters');

// // ---- Default paraeters ----
// function sum(x = 32, y = 8) {
//  return x + y;
// }
// console.log(sum());
// console.log(sum(21));
// console.log(sum(21,43));

// // ----------------
// function sum(x=3, y=x, z=x+y) {
//  console.log(x+y+z)
// }
// sum()


// Using a function using a default value expression
const sum = () => 20;
const calculate = function (x, y = x * sum()) {
 return x + y;
}
const result = calculate(10);
console.log(result);

