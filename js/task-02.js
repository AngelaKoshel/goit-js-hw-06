const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const array = [];
ingredients.forEach((item) => {
  let elem = document.createElement("li");
  elem.classList.add("item");
  elem.textContent = item;
  array.push(elem);
})

list.prepend(...array);

console.log(list);