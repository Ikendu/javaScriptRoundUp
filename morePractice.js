let person = {
    name: "John"
}
person.age = 25
person.section = "Developer" 
console.log(person)

let user = "name"
let persons = [
    {[user] : "Chibundu", age: 35, job: "developer"},
    {name : "Victor", age: 28, job: "system tech"},
    {name : "Ekene", age: 25, job: "force"},
    {name : "Faith", age: 23, job: "navy"},
    {name : "Ikenna", age: 34, job: "army"},
]

//using functions
const update = (key, value) => {
    return persons[0][key] = value
}

console.log(update("wife", "Gift"))
console.log(update("child", "Akuoma"))
console.log(update("midName", "David"))
console.log(update("portfolia", []))
console.log(update("more details", {}))

console.log(persons)
//filter
let elder = persons.filter(item => item.age > 30)
//find
let getter = persons.find(item => item.age > 30)
//reduce
let names = persons.reduce((names, person) => names
.concat(person.name), []) 
console.log(elder)
console.log(getter)
console.log(names)

//array destructuring
let [ndu, ,vic, ekene, faith, ike] = names
console.log(ndu, vic, faith)

//array.from
let myname = "Chibundu"
console.log(Array.from(myname))

//callback function
const toUpper = (value) => {
    return value.toUpperCase()
}
const rev = (value) => {
    return value.split("").reverse().join("").toUpperCase()
}
const converter = (value) => {
    return Array.from()
}
const handleName = (item, cb) => {
    let fullName = `Aniede ${item}`
    return cb(fullName)
} 
console.log(handleName("Chibundu", rev))