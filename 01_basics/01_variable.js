const accountId =1432423
let accountEmail ="NIkhil@google.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState;

//accountId=223  //not allowed

accountEmail="nik@google.com"
accountPassword="324435436"
accountCity="delhi"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])