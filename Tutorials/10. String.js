console.log('In this tutorial you will learn about Array String');

const name = `nadeem`
const name1 = 'naheem'
console.log(`${name} and ${name1} both are brothers each other`)

//Accessing String Charecters
const a = 'HelloN';
console.log(a[0]);
console.log(a.charAt(5));

// JS is Case-Sensitive
const x = 'Hello';
const y = new String('Hellow')
console.log(x)
console.log(y)

console.log(typeof x) // String
console.log(typeof y)  // Object

// --- JavaScript String method ---
const text1 = 'hello';
const text2 = 'world';
const text3 = '        JavaScript       ';
// concatenating two string
const result1 = text1.concat(text2);
console.log(result1);

// converting lower case into upper case
const result2 = text2.toLocaleUpperCase()
console.log(result2)

// converting upper to lower
const result3 = text3.toLocaleLowerCase();
console.log(result3)

// converting string to array
const result4 = text1.split()
console.log(result4);

// slicing the string
const result5 = text2.slice(2,5)
console.log(result5)


// --- String() function
const p = 342;
const q = true;
// converting to string
const p1 = String(p)
const q1 = String(q)
console.log(p1)
console.log(q1)

// Escape charecter
const name0 = 'This is \'Salba\'.';
console.log(name0)


