console.log('In this tutorial you will learn About "JavaScript setInterval" ');


// // Ex-1___ Display a Text Once Every 1 Second _____
// function greet() {
//  console.log('Hello World')
// }
// setInterval(greet, 3000);



// Ex-2 ______ Display Date & time every 5 second ______
// function showTime() {
//  // return new date and time
//  let dateTime = new Date;

//  let time1 = dateTime.toLocaleTimeString();
//  let time2 = dateTime.toLocaleDateString();

//  console.log(time1)
//  console.log(time2)
// }
// let Display = setInterval(showTime, 4000)




//  ______ To display a name ______
// function greet(name, lastName) {
//  console.log('Welcome' + " " + name + " " + lastName)
// }
// // Passing argument to the setInterval
// setInterval(greet, 3000, 'Mustafa Raza', 'Khan');




// ------------------------

// async function example

async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}

f(); 

async function n(){
    console.log('I am async function')
    return Promise.resolve("This is another promise")
}
n().then(function(result){
    console.log(result)
})


// >>>>>>>>>>>>>---------------<<<<<<<<<<<<<<<<<<<
