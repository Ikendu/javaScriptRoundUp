const promise = new Promise((resolve, reject) => {
    let random = Math.ceil(Math.random() * 4)
    console.log(random)
    if (random === 3 || random === 2){
       resolve("solution was reached") 
    } else {
        reject("solution was not reached")
    }   
})
console.log(promise)
promise.then(data => console.log(data))
.catch(data => console.log(data))

//more on promises
let btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    addColor(".mbu", 1000, "red")
    .then(() => addColor(".abu", 2000, "blue")
    .then(() => addColor(".atu", 2000, "brown")
    .then(() => addColor(".anu", 2000, "purple"))))
    .catch((err) => console.log(err))
})

let button = document.

const addColor = (selector, time, color) => {
    //console.log("add color")
    let element = document.querySelector(selector)
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(()=>{
                element.style.color = color
                resolve()
            }, time)
        } else reject(`There is no selector named: "${selector}"`)
    })
}