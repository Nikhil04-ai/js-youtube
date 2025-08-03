function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}

sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3,5)
console.log("result:",result);

function calculateCartPrice(val1,val2, ...num1){   // rest operator
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))
 
const user ={
    username: "Nikhil",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

handleObject(user)

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));