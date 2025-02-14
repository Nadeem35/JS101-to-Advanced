console.log("This is 16th lecture");

// let element = document.createElement('image');

// // Add a class name to the li element
// element.className = 'my Name'
// element.id = 'This is brave';
// element.setAttribute('title', 'nexttitle')
// element.innerText = '<b>This is created by nadim</b>'
// element.innerHTML = '<b>This is created by nadim</b>'

// let ul = document.querySelector('ul.this')
// ul.appendChild(element)
// console.log(ul);
// // console.log(element);

// //---------------------

// let result;
// const operator = prompt('Enter any nuber');
// const num1 = parseFloat(prompt('Enter first number'));
// const num2 = parseFloat(prompt('Enter second number'));

// switch (operator) {
//  case '+':
//   result = num1+num2;
//   console.log(`result of ${num1} + ${num2} = ${result}`)
//   break;
  
//   case '-':
//    result = num1-num2;
//    console.log(`result of ${num1} - ${num2} = ${result}`)
//    break;
   
//    case '*':
//     result = num1*num2;
//     console.log(`result of ${num1} * ${num2} = ${result}`)
//     break;
    
//     case '/':
//      result = num1/num2;
//      console.log(`result of ${num1} / ${num2} = ${result}`)
//   break;

//  default:
//   result = 'you enter wrong operator';
//   break;
// }

let fruit = prompt("Enter fvrt fruit")
switch (fruit) {
 case 'apple':
 case 'papaya':
 case 'grapes':
  console.log(`Your favorite fruit is ${fruit}`)
  break;

 default:
  console.log('Your choice is not available');
  break;
}


