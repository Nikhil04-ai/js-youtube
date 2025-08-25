// let myName = "hitesh"
// let mychennel = "chai    "

// console.log(myName.trueLength);


let myHeros = ["thor","spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`)
    }

}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);

}

Array.prototype.Nikhil = function(){
    console.log(`Nikhil says hello`);
}

heroPower.hitesh()
myHeros.hitesh()
myHeros.Nikhil()
//heroPower.Nikhil()   // hamne sirif array ko Nikhil ka access diya too ye myHeros ko nhi milegi 

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}


const TeachingSupport = {
    isAvailable : false
    
}

const TASupport = {
    makeAssignment : ' js assignment',
    fullTime: true,
    __proto__: TeachingSupport

}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);

}

anotherUsername.trueLength()
"Niikhil".trueLength()
"mehta".trueLength()

