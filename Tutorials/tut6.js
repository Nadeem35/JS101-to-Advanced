console.log("String properties methods and template");

let name = "Nadeem";
    greet = "Good Morning";
console.log(greet +' '+ name);

let html;
html = "<h1>This is greate personalty to follow sunah</h1>" + "<p>This is my paragraph</p>"
html = html.concat('Nadeem','str1','Aatia')
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toLocaleUpperCase());
// console.log(html.toLowerCase());


// console.log(html[3]);  // to print nth character
// console.log(html.indexOf('greate'));
// console.log(html.lastIndexOf('<'));
// console.log(html.indexOf('name')); //if not present then show -1
// console.log(html.charAt(4))
// console.log(html.endsWith('str1')); //return boolean
// console.log(html.includes('gr')); 
// console.log(html.substring(1,7)); 
// console.log(html.slice(1,-7));
// console.log(html.split(' '));
// console.log(html.replace('greate','beautiful')); // wil br replace only first occurance

let fruit1 = 'Orange';
let fruit2 = 'Graps';
let myhtml = `Hello ${name} , ${greet}
              <h1> This is my "Favorite" fruits</h1>
              <p>You like ${fruit1} and ${fruit2} </p>`
document.body.innerHTML = myhtml;