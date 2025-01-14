console.log('In this tutorial you will learn About"JavaScript Callback Function"');


//__________ JavaSript call back function _______________
// function greet(name,callback) {
//  console.log("Hi" + ' ' + name )
// }
// greet('nadeem')



// __________________________
// function greet(name, callback) {
//  console.log('hi'+ ' ' + name)
//  callback();
// }
// // callback function
// function callme() {
//  console.log('I am a function callback');
// }
// greet('nadeem', callme);



// ____ Program that show the delay in execution ______
// function greet() {
//  console.log('Hello world');
// }
// function sayName(name) {
//  console.log('hello' + " " + name);
// }
// // Calling function
// setTimeout(greet, 3000);
// sayName('Comarde');





// ____ callback Function Example _____________
function greet(name, myFunction) {

 // callback function
 // execute only after the greet() is executed
 console.log('Hello Developers');
 myFunction(name);
}
// callback function
function sayName(name) {
 console.log('Welcome' + ' ' + name);
}
// calling the function after given second
setTimeout(greet, 3000, "Sultan Muazzam", sayName)


