console.log("This is 15th Lecture")

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
let nodename = cont.childNodes[3].nodeName;
let nodeType = cont.childNodes[1].nodeType;
console.log(nodename)
console.log(nodeType)
// Nodes type
// 1 - for element
// 2 - for attributes
// 3 - for Text Node
// 8 - for Comment
// 9 - for document
// 10 - for doctype

// console.log(cont);
// console.log(cont.childNodes);
// console.log(cont.children); //show only element

let container = document.querySelector('div.container');

// console.log(container.children[3].children[1].children);

// console.log(container.firstChild)
// console.log(container.firstElementChild)

// console.log(container.lastChild)
// console.log(container.lastElementChild)
console.log(container.childElementCount) //count of child element

console.log(container.firstElementChild.parentNode)
console.log(container.firstElementChild.nextSibling)
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling)