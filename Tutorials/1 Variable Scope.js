
//------ Variable Scope --------
/*
let a = 'Hellow';
function greet () {
  console.log(a);
}
greet();

// ------ OR  -------

function green() {
  b = "Nadeem";   //It become global variable without declaring
 console.log(a + b);
}
green()
console.log(a + b);
console.log(a);
console.log(a + b);
*/

//----- Global, Local & Block scope Variable --------

var a = "Hellow";
function greet() {
 let b = "Nadeem";
 console.log(a + b);

 if (b == 'Nadeem') {
  //  let c = "good";  // c is block scoped variable
  var c = "good";  // Now c is local
  //  c = "good";  // c is global
  console.log(a + " " + b + ' ' + c);
 }
 console.log(a + " " + b + ' ' + c); // here c shows uncought error if use let c 
}
greet();

