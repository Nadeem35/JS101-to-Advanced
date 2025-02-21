// console.log("Nadeem -- N'adira ");

//-------- type Interjection ----------
/*
In TypeScript, Type Intersection (&) allows you to combine multiple types 
into one. This means an object must have all the properties from the intersected types.


*/

type City = {
    name: string,
    population: number
}

type Planet = {
    name: string,
    cities: number
}


type CitiesInPlanet = City & Planet;

let value: CitiesInPlanet = {
    name: "Bareilly",
    population: 458999454,
    cities: 75
}
console.log(value.name);


let a: number = 54;
let b: number = 12;
let c: number
c = a + b;
console.log("412 c");
console.log("I am TS !");


//------------------------ 

type sData = {
    name: string;
    age: number;
    adult: boolean; // Required!
}

type tData = {
    name: string;
    age: number;
}

type studentTeacher = sData & tData;

let allData: studentTeacher = {
    name: "Nafis",
    age: 30,
    adult: true // ✅ Must include this!
}

console.log(allData.name);
console.log(allData.age);
console.log(allData.adult); // ✅ Works

