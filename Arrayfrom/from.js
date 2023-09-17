let text = document.querySelectorAll(".text")
console.log(text)

console.log(Array.from(text))

let gift = Array.from(text).map(item => item.textContent)
console.log(gift)


let items = Array.from({length:150}, (item, index) => index)
let numOfItems = 12
let pages = items.length / numOfItems

let paginate = Array.from({length:15}, (item, index) => {
    let start = index * numOfItems
    let end = start + numOfItems
    return items.slice(start, end)
})

 console.log(paginate)