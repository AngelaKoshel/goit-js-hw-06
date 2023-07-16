const categories = document.querySelector("#categories");
const categoriesArray = [...categories.children];

console.log(`Number of categories: ${categoriesArray.length}`);

categoriesArray.forEach((li) => {
    console.log(`Category: ${li.firstElementChild.textContent
        }`);
    console.log(`Elements: ${li.querySelector("ul").childElementCount}`);
})