// var c = 300
let a=300

if (true) {
    let a = 10
    const b=20
    // var c=30
    console.log("Inner:",a)
    }
console.log(a);
// console.log(b);
// console.log(c);   // iska scope globally hota hai 


function One(){
    const username ="Nikhil"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // ye website kon excess nhi kar payega 

    two()
}

One()

if (true) {
    const username = "hitesh"
    if(username === "hitesh") {
        const website ="youtube"
        console.log(username + website);
    }
    // console.log(website) // ye scope se bahar hai 
}
// console.log(username); //  ye bhi error dega kyo ki scope ke bahar hai

// +++++++++++++++++++++ interesting ++++++++++++++++++++++++++++

addone(5)            // but  yeha koi error nhi dega aagr hum iss tarh se function ko decleare kare 
function addone(num){
    return num + 1
}

// addTwo(5)                      // edhar declearetion se pahle excess kar raha hai too yeha error dega (isko hosting kahte hai)
const addTwo = function(num){
    return num + 2
}


