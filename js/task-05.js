const inputElement = document.querySelector("#name-input");
const spanElement = document.querySelector("name-output");
inputElement.addEventListener("input", newName);

function newName() {
    if (inputElement.value) {
        spanElement.textContent = inputElement.value;
    } else {
        spanElement.textContent = "Anonymous";
    }
}