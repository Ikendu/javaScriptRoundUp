let items = ["john", 23, 99, "joshua"]
let obj = {one: "mNM", two: "ememe"}
items.at(3)
items.at(0)
console.log(items.at(-1))

//for in loop
let details = {
    name: "Ikendu",
    address: "4 Aku Road",
    class: "developer"
}

let newArr = [] 
for (let prop in details) {
    console.log(`${prop} ${details[prop]}`)
    newArr.push(prop)
    newArr.push(details[prop])
}
console.log(newArr)
let mykeys = Object.keys(details)
let myvalues = Object.values(details)
let entries = Object.entries(details)
mykeys
myvalues
entries

let list = entries.map(([first, second])  => [ second] ).flat()
console.log(list)
