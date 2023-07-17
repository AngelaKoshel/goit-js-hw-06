const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
let value = document.querySelector("#value");
let counterValue = 0;
value.textContent = 0;

decrement.addEventListener("click", minusOne);
increment.addEventListener("click", plusOne);

function updateCounter() {
    value.textContent = counterValue;
}

function plusOne() {
    counterValue += 1;
    updateCounter();
}

function minusOne() {
    counterValue -= 1;
    updateCounter();
}