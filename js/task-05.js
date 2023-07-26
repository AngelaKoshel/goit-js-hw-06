const inputElement = document.querySelector("#name-input");
const spanElement = document.querySelector("#name-output");
const defaultName = spanElement.textContent;

inputElement.addEventListener("input", (event) => {
    if (inputElement.value.trim() === "" ) {
        spanElement.textContent = defaultName;
    } else {
        spanElement.textContent = event.currentTarget.value.trim();
    }
} );
