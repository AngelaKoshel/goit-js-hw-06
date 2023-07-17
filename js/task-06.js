const inputElem = document.querySelector("#validation-input");

inputElem.addEventListener("blue", validText);
const validLength = Number(inputElem.dataset.length);
console.log(validLength);

function validText() {
    if (inputElem.value.length === validLength) {
        inputElem.classList.add("valid");
        inputElem.classList.remove("invalid");
    } else {
        inputElem.classList.remove("valid");
        inputElem.classList.add("invalid");
    }
}