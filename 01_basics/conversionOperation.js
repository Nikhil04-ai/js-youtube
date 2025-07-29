let score ="33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score)

console.log(typeof valueInNumber);

//"33" => 33
//"33abd"=>NaN
//true =>1; false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
//""=>false 
//"hitesh" =>true 


let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber) 

// ******************* Operations *********************

let value = 3
let negValue = -value 
console.log(negValue);

let str1 = "hello"
let str2 =" Nikhil"

let str3 =str1 + str2
console.log(str3)

console.log("1"+2);
console.log(1 + "2");
console.log("1"+2+2);
console.log("1"+2+2);
console.log(1+2+"2");   //32 not 122

console.log(+true); //1
console.log(+"");   //0

let gameCounter = 100
++gameCounter;
console.log(gameCounter);



