
// const data = {
//     "name":"Nadeem", "age": "23", "course":"BTECH",
    
//     "Hobbies":{
//         "cricket": false,
//         "Badminton": true,
//         "Singing": false,
//         "Reading": true,
//     },

//     "Qualification":['10th', '12th', 'Diploma', 'B.tech']
// }

// console.log(data.name);
// console.log(data.age);
// console.log(data.course);
// console.log(data.Hobbies.Badminton)
// console.log(data.Hobbies.Reading)

// console.log(data.Qualification[1])
// console.log(data.Qualification[3])

// console.log(data["age"])





// >>>>>>>>>>>---Converting JSON data into object---<<<<<<<<<<<<<<<

// const jsondata = '{"name":"Nadeem", "title":"saifi", "city":"bareilly" }'

// const obj = JSON.parse(jsondata)

// console.log(obj.name)
// console.log(obj.city)


// >>>>>>>>>>>--- object into Converting JSON data ---<<<<<<<<<<<<<<<

//   javascript object
const obj = { "name": "nadeem", "bg": "O+", "class": 5}

const jsonn = JSON.stringify(obj)

console.log(jsonn)