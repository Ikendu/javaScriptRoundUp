//async await
//await must be present before using async
//async always returns a promise
//await always wait till promise is fulfiled  

//opening example
const example = async () => {
    return ("coming to async await")
}

const sumfunc = async () => {
    const result = await example()
    console.log("Hello checker")
    return (result)
} 
//console.log(sumfunc())

//main example
let users = [
    {id: 1, name: "chibundu"},
    {id: 2, name: "onyinye"},
    {id: 3, name: "akuoma"},
    {id: 4, name: "ikendu"}
]
let articles = [
    {userId: 1, article: ["one", "two", "three"] },
    {userId: 2, article: ["four", "ise", "isee"]},
    {userId: 3, article: ["asaa", "atato", "nine", "ten"]},
    {userId: 4, article: ["mbu", "abu", "atu"]}
]
const getUser = (name) => {
    let getter = users.find(user => user.name == name)
    return new Promise((resolve, reject) => {
        if (getter) return resolve(getter)
        else reject(`No user named ${getter.name}`)
    })
}
const getArticle = (id) => {
    let getter = articles.find(item => item.userId === id )
    return new Promise ((resolve, reject) => {
        if (getter) return resolve(getter.article)
        else reject("the id is invalid")
    })
}

getUser("chibundu").then((item => console.log(item))).catch()