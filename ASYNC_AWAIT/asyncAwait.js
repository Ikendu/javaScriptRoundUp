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
    let user = users.find(item => item.name === name)
    return new Promise((resolve, reject) => {
        if (user) return resolve(user)
        else reject(`The name ${name} is invalid`)
    })
}
const getArticle = (id) => {
    let data = articles.find(item => item.userId === id)
    return new Promise((resolve, reject) => {
        if (data) return resolve(data.article)
        else reject(`Wrong Id`)
    })
} 

const getData = async (name) => {    
    try {
        let user = await getUser(name)
        let data = await getArticle(user.id)
        console.log(data) 
    } catch (err) {
        console.log(err)
    }
}
getData("chibundu")
getData("onyinye")
getData("akuoma")

//using chainging of .then() make it individually

getUser("chibundu")
.then(user => getArticle(user.id))
.then(item => console.log(item[2]))
.catch(err => console.log(err))

getUser("onyinye")
.then(user => getArticle(user.id))
.then(item => console.log(item))
.catch(error = console.log(error))