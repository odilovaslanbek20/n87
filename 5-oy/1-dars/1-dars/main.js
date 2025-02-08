import {fn, fn1, fn2} from "./funtion.js";
import {str, num} from "./variables.js";
import {Person} from "./constructor.js";

fn(10, 5);
fn1(10, 5);
fn2(10, 5);

console.log(str);
console.log(num);

let Person1 = new Person('Aslanbek', 'Odilov', 16, 'Toshkent');
console.log(Person1);


let next = document.getElementById("next");
let prev = document.getElementById("prev");
let img = document.querySelectorAll(".slider img");

let i = 0;
next.onclick = function () {
    img[i].style.display = 'none';
    i++;
    if (img.length <= i) {
        i = 0;
    }
    img[i].style.display = 'block';
}

prev.onclick = function () {
    img[i].style.display = 'none';
    i--;
    if (i <= 0) {
        i = img.length -1;
    }
    img[i].style.display = 'block';
}

setInterval(() => {
    img[i].style.display = 'none';
    i--;
    if (i <= 0) {
        i = img.length -1;
    }
    img[i].style.display = 'block';
}, 2000);