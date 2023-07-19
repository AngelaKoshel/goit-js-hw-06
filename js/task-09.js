function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const spanElement = document.querySelector(".color");
const buttonElement = document.querySelector(".change-color");

buttonElement.addEventListener("click", changeColor);

function changeColor() {
  let currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  spanElement.textContent = currentColor;
}