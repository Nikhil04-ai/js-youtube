const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails : function(){
        //console.log("Got user detail from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

// const promiseOne = new Promise()
// const data = new Date()

function User(username , loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.user}`);
    }

    return this
}

const userOne = new User("hitesh",12, true)  // by write new it will create a new object and also prevent from overwritting 
const userTwo = new User("nikhil",5,false)

console.log(userOne);
