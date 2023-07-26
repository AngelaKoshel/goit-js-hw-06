const ul = document.querySelector("ul#categories");
const allElements = ul.children.length;
console.log(`Number of categories: ${allElements}`);

const arrlist = [...ul.children];
arrlist.forEach( (li) => {
  const liChildren = [...li.children];
 liChildren.forEach((el) => {
          if (el.tagName === "H2") {
            console.log("Category: ", el.innerHTML);
          }
          if (el.tagName === "UL") {
            console.log("Elements: ", el.children.length);
          }
          console.log();
        });
}
);
