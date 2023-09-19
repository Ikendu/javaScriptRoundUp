const url = "https://www.course-api.com/react-tours-project"
//console.log(fetch(url))


// let getter = fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))

const myData = async() => {
    try {
        let res = await fetch(url)
        //optional for handling error
        if(!res.ok) {
            let msg = `There was an error "${res.status} ${res.statusText}"`
            console.warn(msg)
            //throw new Error(msg)
        }
        console.log(await res.json())
    } catch (error) {
        console.log(error)        
    }
}
myData()

//getting height and width of the window
console.log( "heigth", window.innerHeight)
console.log( "width", window.innerWidth)

