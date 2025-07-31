// singleton

// object literals 

const mysym =Symbol("key1")
const jsUser = { 
    name: "Nikhil",              // here the key Treated as string even we are written here  
    "full name" : "Nikhil Mehta",
    [mysym] : "myKeys1",         // correct way print the symbol
    age:18,
    location: "Jaipur",
    email: "nikhil@google.com",
    isLoggedIn : false,
    lastloginDays: ["Monday","Saturday"]

}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])   // but in this case we have to excess via bracket 
console.log(jsUser[mysym])

// jsUser.email = "nikhil@chatgpt.com"
// Object.freeze(jsUser)
// jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello Js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())


