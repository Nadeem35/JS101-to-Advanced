console.log('While, do-while loop in JS');

if(1){
  // let i = 63; //show error to define in fncsn
  i = 63;
 console.log(i);
}
console.log(i)

function ui(name) {
 let i = 43;
 console.log(i)
 return `This is a ${name}`;
}
console.log(ui("Nadeem"),i)


const mygreet = function greet(name, Thanks = 'Thank you') {
 console.log(`Good morning ${name} JavaScript was previously used mainly for making webpages interactive such as form validation, animation etc. Nowadays, JavaScript is also used in many other areas such as server-side development, mobile app development and so on. ${Thanks}`);
 return 543;
}

let name = 'saif';
let name2 = 'Uzair';
// greet(name2); 
let val = mygreet(name, 'Thanks my dear');
// console.log(val);

const myobj = {
 name: "skillF",
 game: function () {
  return "IAS";
 }
}
// console.log(myobj.game());


// arr = ['Business', 'job', 'Politics'];
// arr.forEach(function(element, index, array) {
//  console.log(element,index,array)
// });

