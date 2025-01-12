console.log('In this tutorial you will learn About "JavaScript setTimeout()"');



// _____ Display a Text Once After 3 Second ______
// function greet() {
//  console.log('Hellow jamia"an')
// }
// setTimeout(greet, 3000);
// console.log('This is First message')
// console.log('Now count second from 1 - 3')


// -------------
// function greet() {
//  console.log('Welcome back')
// }
// let intervalID = setTimeout(greet, 5000)
// console.log('id ' + intervalID)





// ______ Display a Time every 3 Second ________

// // --- Program to display the time every 3 second ---
// function showTime() {
//  // return the date & time
//  let dateTime = new Date();

//  // return the current local time
//  let time = dateTime.toLocaleTimeString();

//  console.log(time)

// // display the time after 3 second
// setTimeout(showTime, 5000);

// }

// // calling function
// showTime();




// Ex-3 Use ClearTimeout() Mthod
let count = 0;

function increaseCount(){

 count = +1;
 console.log(count)
}
let id = setTimeout(increaseCount, 3000)

clearTimeout(id);
console.log('setTime is stopped.')

 


// _________ Program to display Name ___________
function greet(name, lastName) {
 console.log('Hello' + ' ' + name + ' ' + lastName)
}

// Passing argument to setTimeout
setTimeout(greet, 1000, 'Nadeem', 'saifi');


