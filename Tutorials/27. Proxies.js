console.log(`In this tutorial you will learn about Proxies`);

// // _____ Creating  a Proxy object ________
// let student1 = {
//  age: 23,
//  name: 'Nadeem'
// }
// const handler = {
//  get: function(obj, prop){
//   return obj[prop] ? obj[prop] : 'Property does not exist';
//  }
// }
// const proxy = new Proxy(student1, handler);
// console.log(proxy.name);
// console.log(proxy.age);
// console.log(proxy.class); // Property does not exist




// ____ Passing Empty Handler ____
// let student = {
//  name: 'Naved',
//  age: 42
// }
// const handler = { };
// // Pasing Empty handler
// const proxy1 = new Proxy(student, {});
// console.log(proxy1);
// console.log(proxy1.name)


// ___ get() handler ____
// const student1 = {
//  name: "Khabib",
//  age: 34,
//  win: '29 - 0'
// }
// const handler = { 
//  get(obj, prop){
//   return obj[prop];
//  }
// }

// const proxy = new Proxy(student1, handler);
// console.log(proxy.name)
// console.log(proxy.age)
// console.log(proxy.win)



// ___ set() handler ____
// let student = {
//  name: 'Nadir Ali',
//  age: 34,
//  profession: 'fighter'
// }
// let setNewValue = {
//  set: function (obj, prop, value) {
//   obj[prop] = value;
//   return;
//  }
// }

// let proxy = new Proxy(student, setNewValue);
// console.log(proxy);
// proxy.medal = 12;
// console.log(proxy);


// ______ Use of Proxy ______
// ------ 1. For Validstion -------------
// let student = {
//  name: 'Haider',
//  laqab: 'Bab-e-ilm',
//  age: 'childhood'
// }
// const handler = {
//  // get the object key and value
//  get (obj, prop){
//   // check condition
//   if (prop == 'name') {
//    return obj[prop];
//   } 
//   if (prop == 'laqab') {
//    return obj[prop];
//   } 
//   if (prop == 'age') {
//    return obj[prop];
//   } 
//   else{
//    return 'Not allowed';
//   }
//  }
// }
// let proxy = new Proxy(student, handler)
// console.log(proxy.name)
// console.log(proxy.age)
// console.log(proxy.laqab)
// console.log(proxy.leader)


// ______ Read Only view of an Object ________
// let student = {
//  name: "Nooruddin",
//  age: '25',
//  work: 'Trainer'
// }
// const handler = {
//  set: function (obj, prop, value) {
//   if (obj[prop]) {
//    // Can't change the student value
//    console.log('Read only')
//   }
//  }
// };
// const proxy = new proxy(student, handler);
// proxy.name = 'Nasim';
// proxy.age = '21';


// ________ Side Effeccts ________
const myfunction = () => {
 console.log('Execute this function')
};
const handler = {
 set: function (target, prop, value) {
  if(prop === 'name' && value === 'Jabir'){
   // Ccalling another function
   myfunction();
  }
  else{
   console.log('can only access name Property');
  }
 }
}
const proxy = new Proxy({}, handler);
proxy.name = 'Hamsafar';
proxy.age = 34;

