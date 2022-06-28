const lef = document.querySelector("#left");
const right = document.querySelector("#right");
const itemList = document.querySelector("#items");

const items = document.querySelectorAll(".item");









const minRight = 0;
const step = parseInt(getComputedStyle(document.querySelector(".item")).width);
const preShownItems = parseInt(getComputedStyle(document.querySelector("#slider")).width) / step;

const maxRight = (items.length - preShownItems) * step;
let currentRight = 0;

itemList.style.right = currentRight;

right.addEventListener("click", e => {
    e.preventDefault();
    if (currentRight < maxRight) {
        currentRight += step;
        itemList.style.right = `${currentRight}px`;
    }
});
left.addEventListener("click", e => {
    e.preventDefault();
    if (currentRight > minRight) {
        currentRight -= step;
        itemList.style.right = `${currentRight}px`;
    }
});