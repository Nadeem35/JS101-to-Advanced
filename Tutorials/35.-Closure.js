// function greet(name, title){

//     function display(age) {
//         console.log('Hello'+ ' '+ name +' '+ title+' '+ age)
//     }
//     display(22)
// }
// greet('nadeem', 'sifi')




function salam(name, cast){

    function display() {
        console.log('Hello dear' +' '+ name +' '+ cast)
    }
    return display;
}

const g1 = salam('nadeem', 'saifi')

console.log(g1)
g1()