const coding = ["js","ruby","java","python","cpp"]

coding.forEach( function (item){
    console.log(item);
} )

// by arrow function
coding.forEach( (item) => {
    console.log(item);
})

//other way of foreach
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)

coding.forEach((item, index, arr)=> {    // iske pass sirif ek hi parameter ka excess nhi kafi kuch hota 
    console.log(item,index, arr);
})

const myCoding = [
    {
        languegeName: "javascript",
        languegeFileName: "js"
    },
    {
        languegeName: "java",
        languegeFileName: "java"
    },
    {
        languegeName: "python",
        languegeFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languegeName)
})
