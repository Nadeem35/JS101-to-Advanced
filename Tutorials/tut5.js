//  Type coercion and type correction
console.log("Welcome to 5th lecture");
let myVar;
myVar = String(39);
// console.log(myVar,(typeof myVar));

let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = Date();
// console.log(date, (typeof date));

let arr = String([3,4,6,7,8,5,'Labbaik']);
// console.log(arr.length, (typeof arr));

// let i = 9;
let i = Date();
// console.log(i.toString(),typeof i);

let stri = Number("487");
stri = Number('487e');    
stri = Number(false) // will be return in 0/1
stri = Number(true)
stri = Number([3,6,7,3,9,8,80])
// console.log(stri, typeof stri);


let num = ('49.23');
    num = parseInt('49.23');  // use to convert string into number
    num = parseFloat('49.233489');
// console.log(num, typeof num);
console.log(num.toFixed(4), typeof num);  // to print digit after .



// Type coercion

let mystr = Number("74738"); // to convert string into number
    mynum = 74738;
console.log(mystr + mynum); 