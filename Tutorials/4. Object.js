console.log('This is based on OBJECT');
/*
const myg = {
 name: "Shanam",
 age: 23,
 Reln: 'friend',
 Qualifiaction: "B.A.",

 //________Nested Object________
 Marks:{
  Math: 78,
  Physics: 92,
  Chemistry: 82,
  English: 74,
  Hindi: 73
 }
}
console.log(myg);
console.log(typeof myg);

//_____Accessing properties________
console.log(myg.name);
console.log(myg.Qualifiaction);

console.log(myg["name"]);
console.log(myg['Qualifiaction'])

console.log(myg.Marks.Physics)
console.log(myg.Marks.Chemistry)


const cse = {
 fName: "Faculty of Engineering & Technology",
 dName : 'computer science',
 lab: 12,
 greet: function () { console.log('Hello Hey') }
}

cse.greet()
cse.dName;
*/

//object

// let student = { };
// student.name = 'john';

// student.greet = function () {
//  console.log('hello');
// }
// student.name;

const person = {
 namee: 'nadeem',
 age: 21,
 greet: function() {
  let sname = 'saifi';
  console.log('My name is' + ' '+ this.namee); }

};

person.greet();

