let text = document.querySelectorAll(".text")
console.log(text)

console.log(Array.from(text))

let gift = Array.from(text).map(item => item.textContent)
console.log(gift)


let items = Array.from({length:150}, (item, index) => index)
let numOfItems = 8
let pages = items.length / numOfItems

//using slice
let paginate = Array.from({length:15}, (item, index) => {
    let start = index * numOfItems
    let end = start + numOfItems
    return items.slice(start, end)
})
//using splice
let paginat = Array.from({length: 20}, (item, index) => {
    return items.splice(0, numOfItems) 
})

 console.log(paginat)