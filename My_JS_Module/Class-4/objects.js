const person = {
  name: "Neeraj",
  age: 26,
  city: "Bangalore",
  "full Name": "Neeraj Chaudhary",
  // 📍 function inside object called as method
  greet: function () {
    let a = 10;
    console.log("Hello Me");
  },
};

// const person1 = new Object();
// person1.name = "Hasan";
// person1.profession = "Student";

// console.log(person, person1);

// --------------------------

// How to access key-value from object

// Dot(.) Notation -> It requires the key be a valid identifier
// That implies:
// 1. Contains no spaces
// 2. Does not start with digit
// 3. Does not include special characters($, &, _ are allowed)

// console.log(person.city);
// console.log(person.'full Name');

// Bracket Notation([]) - works with any string
// console.log(person["full Name"]);

// Note: Every key internally converts to string

// let obj = {
//   0: "Hello",
// };
// console.log(obj[0]);
// console.log(obj["0"]);
// console.log(person.greet());

// =======================================

// 📍 THERE IS NO LIMITATIONS ON PROPERTY NAMES. THEY CAN BE ANY STRINGS OR SYMBOLS

// let obj = {
//   for: 1,
//   let: 2,
//   return: 3,
// };

// console.log(obj.for + obj.let + obj.return); // 6

// ----------------

// let marks = {
//   m1: 94,
//   m2: 43,
//   m3: 89,
//   m4: 88,
// };
// console.log(marks.m1 + marks.m2 + marks.m3 + marks.m4);
// console.log(marks.m1 + marks.m2 + marks.m3 - marks.m4);
// console.log(marks.m1 + marks.m2 - marks.m3 - marks.m4);
// console.log(marks.m1 + marks.m2 * marks.m3 - marks.m4);

// =======================================
// Objects Methods and use Cases

// 1. delete operator 📍

// delete objName.propertyName;

// let obj = {
//   for: 1,
//   let: 2,
//   return: 3,
//   Boolean: 487
// };

// console.log(obj);
// delete obj.let;
// delete obj.Boolean
// delete obj.for
// console.log(obj);

// =================================
// checking if a property exists:
// in operator
// "key" in object

let obj = {
  for: 1,
  let: 2,
  return: 3,
  u: undefined,
};

console.log(obj.abc); // undefined
console.log("for" in obj);
console.log("abc" in obj);
console.log(obj.abc === undefined); // can fail if property itself is undefined

console.log(obj.name === undefined);

// hasOwnProperty Method 📍
console.log(obj.hasOwnProperty("for"));
console.log(obj.hasOwnProperty("saifi"));
 

