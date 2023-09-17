const promise = new Promise((resolve, reject) => {
    let random = Math.ceil(Math.random() * 4)
    //console.log(random)
    if (random === 3 || random === 2){
       resolve("solution was reached") 
    } else {
        reject("solution was not reached")
    }   
})
console.log(promise)
//promise.then(data => console.log(data)).catch(data => console.log(data))