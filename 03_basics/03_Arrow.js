const user = {
    username : "Nikhil",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);    // user scope ke ander ke sare object print ho jayegenge jo current context ko refer karte hai 
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()


console.log(this);  // globally current context empty dictionary hota hai 

function chai(){
    let username = "hitesh"
    console.log(this.username);  // this function ke ander kaam nhi karta only object ke ander kaam karta hai
}

// chai()

const chai = () => {
    let username = "Nikhil"
    console.log(this);   // gives empty dict 
}

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) =>  num1 + num2

// const addTwo = (num1 , num2) =>  (num1 + num2)

const addTwo = (num1 , num2) =>  ({username : " Nikhil"})

console.log(addTwo(3,4))
