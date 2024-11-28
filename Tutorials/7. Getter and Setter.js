console.log("Getter and Setter")

// //-----Data Properties------
// const student = {

//  //Data property
//  FirstName: 'Mohd',

// //accessor properties(getter)
// get getName(){
//        return this.FirstName;
//     }
// };
// // Acessing Data Property
// console.log(student.FirstName);
// // Accessing Getter methods
// console.log(student.getName);
// //Trying to access as a method
// console.log(student.getName());



// //----JavaScript setter------
// const student = {
//        firstName: 'Mohd',
//   set changeName(newName){
//    this.firstName = newName
//   }
// }
// console.log(student.firstName)

// //change(set) object property using a setter
// student.changeName = 'abd';
// console.log(student.firstName)


//------JavaScript  Object.defineProperty()------

const student = {
 firstName: "Abdul",
}

//getting property
Object.defineProperty(student, "getName",{
 get: function () {
  return this.firstName;
 }
});

// setting property
Object.defineProperty(student, "changeName",{
 set : function (value) {
  this.firstName = value;
 }
});

console.log(student.firstName)

// Changing the property value
student.changeName = 'Salah';
console.log(student.firstName)