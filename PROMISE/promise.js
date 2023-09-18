const promise = new Promise((resolve, reject) => {
  let random = Math.ceil(Math.random() * 4);
  console.log(random);
  if (random === 3 || random === 2) {
    resolve("solution was reached");
  } else {
    reject("solution was not reached");
  }
});
console.log(promise);
promise.then((data) => console.log(data)).catch((data) => console.log(data));

//more on promises
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  addColor(".mbu", 1000, "red")
    .then(() =>
      addColor(".abu", 2000, "blue").then(() =>
        addColor(".atu", 2000, "brown").then(() =>
          addColor(".anu", 2000, "purple")
        )
      )
    )
    .catch((err) => console.log(err));
});

let button = document.querySelector(".but");
button.addEventListener("click", () => {
  addColor(".one", 1000, "#0063F8")
  .then(() => addColor(".two", 2000, "#F60492")
  .then(() => addColor(".three", 2000, "#EB9705")
  .then(() => addColor(".four", 3000, "#9F7BFC")))).catch((err) => console.log(err));
});

const addColor = (selector, time, color) => {
  let element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else reject(`There is no selector named: "${selector}"`);
  });
};
