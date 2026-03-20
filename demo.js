let age = 25;

const name = "Abi";

const user = { name: "Abi" };
user.name = "John"; // Allowed
user = {}; // Not allowed

let score = 10;
score = 20;

var x = 10; //legacy!

if (true) {
  var x = 10;
}
console.log(x); // 10 leaks outside block

let value = "hello"; // string
value = 100; // number

let a = 10;
let b = 10.5;

console.log(1 / 0); // Infinity

console.log("abc" / 2); // NaN

NaN + 5; // NaN

let big = 9007199254740991n;

let age1 = 22; //template literal
console.log(`I am ${age} years old`);

let isActive = true; //boolean

let data = null; //null

let x; // undefined
