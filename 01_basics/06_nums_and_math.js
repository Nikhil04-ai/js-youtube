const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));  // after decimal how many value you want to take for that you can use toFixed 

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)) // use for roundoff the number

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN')); //put comma in values 

// ++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))

console.log(Math.random());
console.log(Math.floor(Math.random()*10 + 1));


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min)