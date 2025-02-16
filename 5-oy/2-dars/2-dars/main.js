// let son = +prompt("Ixtiyoriy son kiriting...");
// let son1 = +prompt("Ixtiyoriy son kiriting...");

// class Calc {
//   constructor(x, y) {
//     this.son = x;
//     this.son1 = y;
//   }
//   count() {
//     console.log(this.son + this.son1);
//   }
// }

// let fn = new Calc(son, son1);
// fn.count();

// function fn1(son, son1) {
//   console.log(son + son1);
// }

// fn1(son, son1);

// let sun = document.getElementById("sun");
// let body = document.querySelector("body");

// sun.onclick = function () {
//   body.classList.toggle("darkLight");
//   if (sun.textContent == "kun") {
//     sun.innerHTML = "tun";
//   }else{
//     sun.innerHTML = "kun";
//   }
// };

let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let body = document.querySelector("body");

sun.onclick = function () {
    body.classList.toggle("darkLight");
    moon.classList.toggle("hide");
    sun.classList.toggle("hide"); 
};

moon.onclick = function () {
    body.classList.toggle("darkLight");
    moon.classList.toggle("hide");
    sun.classList.toggle("hide"); 
};
