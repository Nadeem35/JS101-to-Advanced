console.log('This is based on Modules');

// // exporting a function
// export function Index(name) {
//  return `Hello ${name}`;
// }

// //importing greetPerson from greet.js file
// import { Index } from 'JS/tut3.js';

// // using greetPerson() defined from greet.js
// let displayName = Index('Nadeem');
// console.log(displayName);


// Export multiple objects
export const name = 'JavaScript Program';
export function sum(x, y) {
 return x + y;
}

import { name, sum } from "./module.js";
console.log(name );
let add = sum(54, 6 )
console.log(add)