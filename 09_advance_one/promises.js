const promiseOne = new Promise(function(resolve,reject){
    // DO an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Asyn task is compelete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeOut(function(){
      console.log("Async task 2");
      resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const PromiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"niks@example.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username:"nikhil" , password:"123"})
        } else{
            reject('Error: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeOut(function(){
        let error = true
        if (!error){
            resolve({username:"javascript", password:"123"})
        } else {
            reject('ERROR: js went wrong')
        }
    },1000)
});


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch(error) {
        console.log(error);
    }
}

consolePromiseFive()


// async function getAllUser(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/user')

//         const data = await response.json()
//         console.log(data);
//     } catch(error){
//         console.log("E:", error)
//     }
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/user')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
