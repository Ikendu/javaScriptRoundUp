console.log(new Date())
console.log(new Date().getTime())

console.log(Date())
console.log(Date.now())

// setTimeout(() => {
//     console.log(Date.now())
// }, 2000)
console.log("calculations")
let mytime = new Date()
let leter = new Date(2023, 10, 19)
let diff = leter - mytime
console.log(mytime, leter, diff) 
console.log((leter.getTime() - mytime.getTime()) / 1000 /60/60/24/30)

let nowNum = leter.getTime()


