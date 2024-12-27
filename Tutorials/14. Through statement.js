console.log("In this tutorial you will learn about Through statement");

const number = 24;
try {
 if (number > 33) {
  console.log('Success');
 }
 else{
  throw new Error('Your marks is less than 33%')
 }
 console.log('Hello You finally passsout');
} catch (error) {
 console.log('An error caught');
 console.log('Error message: ' + error)
}


console.log('__________ Break Line_________')

const marks = 34;
try {
 if (marks >= 34) {
  console.log('Congratulation');
  console.log('You are passout')
 }
 throw new error('Your marks is less than than 33%')
} catch (error) {
 console.log('Error message: ' + error)
}


// --- Rethrow an Exeception ---
const numbers = 75;
try {
 throw new Error('This is the throw')
} catch (error) {
 console.log('An error caught')
 if (numbers + 5 > 60) {
  console.log('Error message ' + error);
  console.log('Error resolved');
 }
 else {
  console.log('The value is low'); 
 }
}

