// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreVAlue  = 100.3;

const isLoggedIn = false;
const outsideTemp = null;  // object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');

// console.log(id === anotherId);

// const bigNumber = 34566759838389494n



// reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman","naagraj", "doga"];
// let myObj = {
//     name: "ritu",
//     age: 20,
// }

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof bigNumber);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof


// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)

let myYoutubename = "ritusharmadotcom"

let anothername = myYoutubename
anothername = "Chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "ritu@google.com"

console.log(userOne.email);
console.log(userTwo.email);
