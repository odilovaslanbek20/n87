import { fnNext, fnPrev, fnSet } from "./function.js";

let next = document.getElementById("next");
let prev = document.getElementById("prev");
let img = document.querySelectorAll(".slider img");
let img1 = document.querySelectorAll(".slider1 img");


next.addEventListener("click", () => {
    fnNext(img)
})

prev.addEventListener("click", () => {
    fnPrev(img)
})

fnSet(img1)
