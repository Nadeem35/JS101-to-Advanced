console.log("This is 7th Lecture");
 
const marks = [36,87,65,68,67,89,78]
const frt = ['Apple', 'Papaya','Grapes','Pineapple'];
const mixed = [43,"str", 'Saif',[5,7,3]];

const arr = new Array(67,89,90,78, 'orange');

console.log(marks)
// console.log(frt)
// console.log(mixed)
// console.log(arr.length);
// console.log(arr.isArray('jds'));

arr[0] = 'nadeem';  // change arrays's value
let elements = arr[0];
console.log('NewElement:', elements)
arr[4] = 'Graps'
// console.log(arr)

let value = marks.indexOf(89);
// console.log(value)

// --- Mutating or Modifing arrays element

// marks.push(438); //replace last array
// marks.unshift(304); //replace start array

// marks.pop(948);  // remove last array 
// marks.shift() // remove 1st aray

// marks.splice(2,4) //remove 5 from 2
// marks.reverse();
// console.log(marks);

let marks1 = [3,7,5,3,9,0,5]
let marks2 = [4,7,9,6,8,3];
news = marks1.concat(marks2);
// console.log(news);

let name = {
 fname: 'sultan',
 mname: 'nadeem',
 lname: 'saifi',
 rslt: true,
 marks: [5,6,7,8,2]
}
console.log(name);
console.log(name.mname);
console.log(name.rslt);
console.log(name.marks);
console.log(name['marks']);