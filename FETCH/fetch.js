const url = "https://www.course-api.com/react-tours-project"
//console.log(fetch(url))


// let getter = fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))

const myData = async() => {
    try {
        let res = await fetch(url)
        console.log(await res.json())
    } catch (error) {
        console.log(error)        
    }
}
myData()

