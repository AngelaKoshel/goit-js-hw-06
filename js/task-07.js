const inputElem = document.querySelector("#font-size-control");
const spanElem = document.querySelector("#text");
inputElem.addEventListener("input", changeFont);

function changeFont() {
    spanElem.style.fontSize = inputElem.value + "px";
};
changeFont();