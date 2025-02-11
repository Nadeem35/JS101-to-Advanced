console.log("This is 14th lecture");

/*
element selectors:
1. Single element selectors
2. Multi element selectors
*/

// 1. Single element selector
// let element = document.getElementById("tofetch");
let element = document.getElementById("2div");

// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
// element.style.background = 'blue';
// element.style.bgcolor = 'blue';
element.style.accentColor = '300px';

element.innerText = 'Nadeem is nadim';
element.innerHTML = '<b> Nadeem is nadim </b>';
console.log(element.innerHTML);

// console.log(element);


let sel = document.querySelector('#tofetch')
sel = document.querySelector('.child')
sel = document.querySelector('b')
sel = document.querySelector('h1')
sel = document.querySelector('div')
sel.style.color = 'violet'
// console.log(sel);

for (let index = 0; index < sel.length; index++) {
 const element = sel[index];
 console.log(sel);
 element.style.color = 'blue';
}


// 2. Multi element selectors
let capital = document.getElementsByClassName('child');
    // capital = document.getElementsByClassName('container');
// console.log(capital[0].getElementsByClassName('child'));