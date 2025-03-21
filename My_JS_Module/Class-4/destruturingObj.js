// const Gal = {
//   name: "Adir",
//   age: 23,
//   classs: "School",
//   love: "loyal"
// }

// const {name, age, classs, love} = Gal
// console.log(name, age, classs, love)

// -----------------


// const person = {
//   name: "Neeraj",
//   age: 26,
//   city: "Bangalore",
// };

// const { name, city, age } = person;
// console.log(name, age, city);


// -----------------📍


// const { name: personName, city, age: personAge } = person;
// console.log(personName, personAge, city);

// const { name1 = "Anonymous", myName ="Nadeem", city, age } = person;
// console.log(name1, age, city, myName);

// ------------- Nested Destructuring -------------

const person = {
  name: "Neeraj",
  age: 26,
  address: {
    city: "Bengaluru",
    country: "IN",
  },
};

const {
  name,
  address: { city, country },
} = person;

// const { name, ...rest } = person;
// console.log(name, rest);
