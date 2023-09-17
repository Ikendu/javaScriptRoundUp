const people = [
    {
        name: 'Ikenna',
        age: 28,
        status: 'student'
    },
    {
        name: 'Chibundu',
        age: 33,
        status: 'developer'
    },
    {
        name: 'Gift',
        age: 26,
        status: 'graduate'
    },
    {
        name: 'Akuoma',
        age: 2,
        status: 'play-Nursary'
    },
 ]

const names = people.map((item) => `
    <center>
    <h3>${item.name}</h3>
    <p>${item.age}</p>
    </p>${item.status}<p>
    </center>
    ` 
);
const minnor = people.filter(item => item.age < 33)
.map(ele => `<h3>${ele.name}</h3>`)

const result = document.querySelector('.result');
result.innerHTML = names.join('')

const min = document.querySelector('.min');
min.innerHTML = minnor.join('')
