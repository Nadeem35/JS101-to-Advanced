//Call by value(primitive data types) vs call by reference(non primitive data type)

// let str = "Hello";
// let copy = str; // call by value
// console.log(copy) // Hello
// copy = "hi";
// console.log(str); // Hello
// console.log(copy) // hi

// -------------------------

// let obj = {
//   a: 1,
//   b: 2,
// };

// let objCopy = obj; // pass their reference
// objCopy.b = 4; //  change in origional obj not only only objCopy
// console.log(obj); // 
// console.log(objCopy);


//-------------- Cloning(creating a duplicate copy) -------------------

// How to solve it -> Cloning

// Object.assign() or spread(...) operator

// const person = { name: "Neeraj", age: 30 };
// let clone = Object.assign({}, person);
// // let clone = { ...person };
// person.age = 25;
// person.name = "Nadeem Adi"
// console.log({ clone, person });

// ---------------- Nested cloning -----------------

// let a = 10;
// let b = a;
// console.log(a === b); // true (Call by value, not by reference)

// const person = {
//   name: "Neeraj", // cloned
//   age: 30, // cloned
//   // not cloned
//   size: {
//     height: 180, // not cloned
//     weight: 80, // not cloned
//   },
// };

// let clone = Object.assign({}, person); // it does a shallow cloning(upar-upar se copy karna)

// console.log(person.size === clone.size); // true (it does a shallow cloning)
// person.age++;
// person.size.height++;
// console.log(clone.size.height); // 181
// console.log(person.age) // 31
// console.log(clone.age); // 30


////// -------------- Deep cloning (cloning at each & every level) ---------------

// deep cloning
// deep cloning start
function deepCloning(input) {
  // var res = Array.isArray(input) ? [] : {};
  var res = {};
  // Base Condition
  if (typeof input !== "object") return input;
  for (let key in input) {
    res[key] = deepCloning(input[key]);
  }
  return res;
}
// deep cloning end

const person = {
  name: "Neeraj", // cloned
  age: 30, // cloned
  // not cloned
  size: {
    height: 180, // not cloned
    weight: 80, // not cloned
  },
};

let clone = deepCloning(person);

console.log(person.size === clone.size); // false ( deep cloning)
person.age++;
person.size.height++;
console.log(clone.size.height); // 180
console.log(clone.age); // 30
console.log(person.age) // 31
console.log(person.size.height) // 181