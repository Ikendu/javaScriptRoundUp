//using a helper function to element from html documents
//using if-else
const getter = (selector, isList) => {
    if(isList){
        let ele = document.querySelectorAll(selector)
        let arr = [...ele]
        if(arr.length > 0 ) return arr
        console.warn("recheck the selector")
    } else {
        let ele = document.querySelector(selector)
        if(ele) return ele
        console.warn("recheck the selector")
    }    
}
// let ele = getter(".txt")
// let btn = getter(".btn")
// console.log(btn)
// console.log(ele)

// btn.addEventListener("click", () => {
//     ele.style.color = "blue"
// })

//spread and ternary operator
const getDoc = (selector, isList) => {
    isList? ele = [...document.querySelectorAll(selector)]
    : ele = document.querySelector(selector)

    if(ele && !isList || isList && ele.length > 0) return ele
    return "Please recheck the selector"
}
console.log(getDoc(".txt"))

let but = getDoc(".btn")
let item1 = getDoc(".mbu")
let item2 = getDoc(".abu")
let item3 = getDoc(".atu")
but.addEventListener("click", () => {
    setTimeout(()=>{
        item1.style.color = "green"
        setTimeout(()=>{            
            item2.style.color = "blue"
            setTimeout(()=> {
                item3.style.color = "pink"
            }, 2000)
        }, 2000)
    },1000)
})
