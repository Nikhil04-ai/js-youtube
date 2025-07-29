const name = "Nikhil"
const repocount = 50

console.log(name + repocount + " Value");  //but this way is outdated to concatinate

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)


const gameName = new String('hiteshhc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)  // you can give negative value in slice but you can't give give negative value in in substring 
console.log(anotherString)

const newStringOne ="    Nikhil    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url ="https://nikhil.com/Nikhil%20mehta"

console.log(url.replace("%20",'-'))
console.log(url.includes("nikcom"))