console.log('This is Based on try...catch...finally')

// // Example-1: Display Undeclare variable
// const numerator = 100, denominator = 'a';
// try {
//  console.log(numerator/denominator);
//  console.log(a)
// } 
// catch (error) {
//  console.log('An error caught');
//  console.log('Error message:' + error)
// }

// The syntax of try...catch...finally

// try {
//  setTimeout(function() {
  
//  }, 3000);
// } catch (e) {
//  console.log("won't work")
// }

// // --- setTimeout ---
// setInterval(() => {
//  try {
//  } catch (error) {
//   console.log("error is caught");
//  }
// }, 3000);


//_____✍🏻_____ Code With Harry ____✍🏻________
//________👊🏻setTimeout()👊🏻__________

function greet(name, bytext) {
 console.log("Hello Good Morning " + name + " " + bytext)
}

// ________________________________
// timeOut = setTimeout(greet, 5000, "Nadeem", "I am responsible for my mess in life");
// console.log(timeOut);
// clearTimeout(timeOut);

//___________________________________
// setInterval = setInterval(greet, 1000, "Nadeem", "Good Night")
// clearInterval(setInterval)


function displayTime() {
 time = new Date();
 console.log(time)
 document.getElementById('time').innerHTML = time;
}
// setInterval(displayTime, 1000);


//______👊🏻Error Handling & try catch👊🏻______
let a = "Harish Bhai";
if (a = undefined) {
 throw new Error('This is not undefind')
} 
else{
 console.log('This is undefind')
}

//_______________________________________
try {
 null.console
 console.log('this is inside the try block')

 functionHarry ();

} catch (error) {
 console.log("error")
 console.log("Are you ok?")
 console.log("error.name")
 console.log("error.message")
}finally{
 console.log("Finally we run this")
}
