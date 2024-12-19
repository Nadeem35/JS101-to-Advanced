console.log("This lecture is based on Multi-Dimentional Array");

// // ---- multidimentional array ----
// // Example - 1
// const data = [[1,2,3], [2,3,4], [3,4,5], [4,5,6]];
// console.log(data)

// // Example - 2
// let studentsData = [['Bilal', 37], ['Ajaj', 38], ['Galib', 39], ['Sufyan', 40], ['Zaid', 41]]

// console.log(studentsData)



// // Example - 3
// let student1 = ['Bilal', 37];
// let student2 = ['Ajaj', 38];
// let student3 = ['Sufyan', 40];
// let student4 = ['Zaid', 42];

// console.log(student1, student2, student3, student4)


// let x = [
//  ['Bilal', 37],
//  ['Ajaj', 38], 
//  ['Galib', 39], 
//  ['Sufyan', 40], 
//  ['Zaid', 41]
// ];

// console.log(x)

// console.log(x[0][0])
// console.log(x[0][1])
// // console.log(x[0][2])

// console.log(x[1][0])
// console.log(x[1][1])
// // console.log(x[1][2])

// console.log(x[2][0])
// console.log(x[2][1])
// // console.log(x[2][2])

// console.log(x[3][0])
// console.log(x[3][1])
// // console.log(x[3][2])

// console.log(x[4][0])
// console.log(x[4][1])
// console.log(x[4][2])


// --- Adding element into multidimentional array ---


let x = [ ['Bilal', 37], ['Ajaj', 38], ['Galib', 39], ['Sufyan', 40], ['Zaid', 41] ];

// Adding Element to the outer Array
x.push(['Ramzan', 49])
x.push(['saba', 56]);
// console.log(x)

// --- Adding element in inner array ---
x[5][1] = 'Welcome';
// console.log(x)

// Using push()
x[3].push('Good');
console.log(x)

// Using splice()
x.splice(1, 0, ['Salahuddin', 313]);
console.log(x)

// --- Remove an element from a Multidimentional array ---

// Using pop() method
x.pop();    // remove from end
x[1].pop(); // remove from inner
x.splice(1,1);


// ------- Iterate over Multidimentional Array ------
let pillar = [ ['Namaz', 5], ['Roza', 30], ['Huz', 1]]
pillar.forEach((pillar) => {
 pillar.forEach((data) => {
  console.log(data)
 });
});

let marks = [['Physics', 92], ['chemistry', 97],['Math', 99]];
for(let i of marks){
 for(let j of i) {
  // console.log(j);
  }
}


// ---- using for loop  ----
for (let i = 0; i < marks.length; i++) {
 // looping outer array element
 let innerArrayLength = marks[i].length;
 // get the length of the inner array elements
 for( let j = 0; j < innerArrayLength; j++){
  // looping inner array elements
  console.log(marks[i][j])
 }
}


