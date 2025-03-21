// Object.keys() method -> it returns an array of the object's enumerable properties.

let obj = {
  for: 1,
  let: 2,
  return: 3,
  u: undefined,
};

// const keys = Object.keys(obj);
// console.log(keys);

// ------------------------

// const sanams = {
//   first: "Khushnam",
//   seconf: "Ghulista",
//   now: "Adi",
// };
// const keee = Object.keys(sanams);
// console.log("Keys of the sanams : ", keee);

// const valuu = Object.values(sanams);
// console.log("Values of the sanams ", valuu);

// ------------------------

// Object.entries() method - returns both keys and values in form of arrays

// const entries = Object.entries(obj);
// console.log(entries);

// Object.values() method - returns values of keys

// const values = Object.values(obj);
// console.log(values);

// -----------------


const kies = Object.entries(obj)
console.log(kies)

const villu = Object.values(obj)
console.log(villu)