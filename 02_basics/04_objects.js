// const tinderUser = new Object() //singleton object
const tinderUser={}  // non singleton object

tinderUser.id = "123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const regularUser= {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Nikhil",
            lastname:"choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {1:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)  // if we did not give empty target object {} then  we also get our require output 

const obj3 = {...obj1 , ...obj2}   // but we mostly use this spread operator 
console.log(obj3)

// const users = {

// }
// users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

