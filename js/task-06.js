const inputElem = document.getElementById("validation-input");
const requiredLength = Number(inputElem.getAttribute("data-length"));
inputElem.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  inputElem.classList.remove("valid", "invalid");
  if (requiredLength === event.currentTarget.value.trim().length) {
    inputElem.classList.add("valid");
  } else {
    inputElem.classList.add("invalid");
  }
}