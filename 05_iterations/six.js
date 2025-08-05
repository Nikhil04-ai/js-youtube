const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
})

console.log(values);

const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => num>4)
// console.log(newNums);

// const newNums = myNums.filter((num) => {
//     return num>4                             // agar hum scope open karte hai too hume return karna parega 
// })

const newNums = []

myNums.forEach((num) => {
    if (num> 4) {
        newNums.push(num)
    }
})
console.log(newNums);

// let userBooks = books.filter((bk) => bk.genre==="History")

// userBooks = books.filter((bk) => {
//     return bk.publish >= 1995 && bk.genre ==="History"
// })
//  console.log(userBooks);