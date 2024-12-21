console.log("Lecture based on Number");

// const a = 3;
// const b = 43.32;
// console.log(a)
// console.log(b)

// const a1 = 3e9;
// const a2 = 3e-6;
// console.log(a1)
// console.log(a2)


// ---- In hexadecimal Notation ----
const a = 0xff;
const b = 0x00;
console.log(a)
console.log(b)

const c = '4' % 6;
console.log(c);

const d = isNaN()
console.log(d)

const e = isNaN(5 - 3)
console.log(e);

const f = 4/0;
const g = -4/0;
console.log(f)
console.log(g)


const value = 99441141121154214656564555555555554n;   
const value1 = value + 1n;
console.log(value);

const a1 = 0.1;
const b1 = 0.2;
// console.log(a1+b1)

const x = 0.1 + 0.2;
console.log(x) // 0.30000000000000000000004
// --- to fix above problem ----
console.log(x.toFixed(5))

const h = (0.1 * 10 + 0.2 * 10)/10
console.log(h)

const y = 999999999999999; // Accurate upto 15 digit
const y1 = 8888888888888888; // Accurate upto 16 digit
console.log(y)
console.log(y1)

// --- Creating an object from a number  ---
const z = 43 
const z1 = new Number(45)
console.log(z)
console.log(z1)
console.log(typeof z)
console.log(typeof z1)


//  --- Number Method ---

// cheak if a is integer
const p = 12;
console.log(Number.isInteger(p))

const q = NaN;
console.log(Number.isNaN(q))

const r = 5.453;
console.log(r.toFixed(2))

// --- JavaScript Number Properties ---
// largest possible value
const s = Number.MAX_VALUE
console.log(s)

const t = Number.MIN_VALUE
console.log(t)

const u =  Number.MAX_SAFE_INTEGER
console.log(u)

const v  = Number.MIN_SAFE_INTEGER
console.log(v)


const w = '54'
const w1 = true

const r1 = Number(w)
const r2 = Number(w1)

console.log(w)
console.log(w1)

console.log(r1)
console.log(r2)