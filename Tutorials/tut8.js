console.log("This is 8th Lecture")

const age = 20;
// const vari = 59;

if (age==20) {
 console.log("Age is 20");
}
else{
 console.log("age is not 20");
}


if (typeof vari !== 'undefined') {
 console.log('vari is defind')
}
else{
 console.log("vari is undefined")
}


// const doesDrive = true;
const doesDrive = false;

 if (doesDrive || age>18) {
  console.log('You can drive')
 }
 else{
  console.log('You can not drive')
 }

 const agee = 16;
 console.log(agee==30?'Age is 30':'age is not 30');

 switch (agee) {
  case 16:
   console.log('Your age is 16 so not eligible for vote')
   break;
  case 18:
   console.log('age = 18, You are eligible for vote')
   break;
  case 21:
   console.log('age = 21, eligible for UPSC')
   break;
 
  default:
   console.log('Unknown age');
   break;
 }