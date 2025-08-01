// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100
const scoreValue= 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id ===anotherId);

const bigNumber = 7656554467656n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "Nikhil",
    age: 20,

}

const myFunction= function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename="NikhilMehtadotcom"


let anothername=myYoutubename
anothername="niksmehta"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email="niksmehta@google.com"

console.log(userOne.email);
console.log(userTwo.email);