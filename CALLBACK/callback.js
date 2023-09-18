//callback function
const toUpper = (value) => {
    return value.toUpperCase()
}
const rev = (value) => {
    return value.split("").reverse().join("").toUpperCase()
}
const converter = (value) => {
    return Array.from(value)
}
const handleName = (item, cb) => {
    let fullName = `Aniede ${item}`
    return cb(fullName)
} 
console.log(handleName("Chibundu", rev))

//using setTimeout
let btn = document.querySelector(".btn")
let mbu = document.querySelector(".mbu")
let abuo = document.querySelector(".abuo")
let atu = document.querySelector(".atu")
let anu = document.querySelector(".anu") 

btn.addEventListener("click", () => {
    setTimeout(() => {
        mbu.style.color = "red"
        setTimeout(() => {
            abuo.style.color = "blue"
            setTimeout(() => {
                atu.style.color = "brown"
                setTimeout(() => {
                    anu.style.color = "green"
                }, 2000)
            }, 2000)
        }, 2000)
    }, 1000)
})
// btn.addEventListener("click", () => {
//     setTimeout(() => {mbu.style.color = "red"}, 1000)
//     setTimeout(() => {abuo.style.color = "blue"}, 3000)
//     setTimeout(() => {atu.style.color = "green"}, 5000)
//     setTimeout(() => {anu.style.color = "green"}, 7000)
// })    

