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

//using setTimeout
let btn = document.querySelector(".btn")
let first = document.querySelector(".first")
let second = document.querySelector(".second")
let third = document.querySelector(".third")
let fouth = document.querySelector(".fouth")

btn.addEventListener("click", () => {
    setTimeout(() => {
        first.style.color = "red"
    }, 2000);
    setTimeout(() => {
        second.style.color = "green"
    }, 4000);
    setTimeout(() => {
        third.style.color = "blue"
    }, 6000);
    setTimeout(() => {
        fouth.style.color = "pink"
    }, 8000);
})
