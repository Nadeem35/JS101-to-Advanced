console.log('This is based on Template Literals')

const name = 'Salahuddin';
console.log(`My hero is ${name} !`);


const message = 'my message to the community\n' + 'eiwnc wen cewjn cls\n' +
'skjakjda ds c  sca dj c'
console.log(message)

const message1 = `ih i ediahej ewaceascm dcsanamncwiehfwja ce ae c akesn 
daadkahwd
 aaks akjsda  `
console.log(message1);

name1 = 'Saifi'
console.log('My name ' + name1)


const name2 = 'Jacket'
console.log(`my Name ${name2}`)

const rslt = 45 + 55
console.log(`The result of 45 + 55 = ${rslt}`)


// -------------------
function tagExample(string) {
 return string;
}
const result = tagExample('Hello Jamia')
console.log(result)


// 
function tagExample(strings) {
 return strings;
}
const result1 = tagExample`Welcome`;
console.log(result1);


// ------------------
const name3 = 'Abd';
const greet = true;

function tagExample(strings, nameValue) {
 let str0 = strings[0];
 let str1 = strings[1];

 if(greet){
  return `${str0}${nameValue}${str1}`;
 }
}

// creating tagged literal
// passing argument name
const result3 = tagExample`Hello ${name3}, How are you?`;
console.log();

