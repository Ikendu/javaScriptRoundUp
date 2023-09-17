const menu = [
    {
        name: 'chocolate',
        category: 'breakfast',
    },
    {
        name: 'moimoi',
        category: 'lunch',
    },
    {
        name: 'beans',
        category: 'dinner',
    },
    {
        name: 'cassava',
        category: 'lunch',
    },
    {
        name: 'pancake',
        category: 'breakfast',
    },
    {
        name: 'vegetable',
        category: 'dinner',
    },
    {
        name: 'okpa',
        category: 'lunch',
    },
    {
        name: 'rice',
        category: 'breakfast',
    },
    {
        name: 'akara',
        category: 'lunch',
    },
    {
        name: 'fruits',
        category: 'dinner',
    },

]
let category = ["All", ...new Set(menu.map((item) => item.category
.replace(/^[a-z]/g, g => g.toUpperCase())))]

const result = document.querySelector(".result")

result.innerHTML = category.map(item => `<button>${item}</button>`).join(" ") 