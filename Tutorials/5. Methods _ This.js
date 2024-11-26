console.log("In this lecture you will about Methods and This");
/*
const student = {
 name: 'Khush',
 age: 24,
 rln: 'frnd',
 greet: function () {console.log('I salute U') }
};
console.log(student);
 console.log(student.age);
 student.greet();
 student.name;
*/

 //______________________________________________
/*
 let number = '3498.0446'
 let result = parseInt(number)
 let resul = parseFloat(number)
 console.log(result)
 console.log(resul)
 console.log(number)
*/
 //_______________________________________________

 let st = {};
 st.name = 'Nadeem',
 st.age = '23',
 st.greet = function(){ console.log('I am fine') };
 
 st.greet();
 // st.name();

 //______________________________________________

 const gues = {
  name: 'brave',
  gender: 'male',
  
  new: function () {
      let age = 24 + ' age';
    console.log('This is a' +' '+ this.name +" "+ this.gender +" at "+ age)
    }
 }
 gues.new();
