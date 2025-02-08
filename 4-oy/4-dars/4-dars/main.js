// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// let count = 0;

// for (let i = 1; i <= 10; i++) {
//    count += i
// }
// console.log(count);

// let a = prompt("Son kiriting")
// let count = 0;

// for (let i = 1; i <= a; i++) {
//    count += i
// }
// console.log(count);

// let count = 0;
// let i = 1;

// while (i <= 10) {
//     count += i;
//     i++;
// }
// console.log(count);

// let d = prompt("Son kiriting")
// let count = 0;
// let i = 1;

// while (i <= d) {
//     count += i;
//     i++;
// }
// console.log(count);

// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// let a = +prompt("Hafta kunini kiriting");

// switch (a) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;
//   default:
//     console.log("Xato");
// }

// let count;

// let a = prompt("Operatorni kiriting...");
// let b = +prompt("A qiymatga son kiriting...");
// let c = +prompt("B qiymatga son  kiriting...");

// switch (a) {
//   case "+":
//     count = b + c;
//     console.log(`${b} + ${c} = ${count}`);
//     break;
//   case "-":
//     count = b - c;
//     console.log(`${b} + ${c} = ${count}`);
//     break;
//   case "/":
//     count = b / c;
//     console.log(`${b} + ${c} = ${count}`);
//     break;
//   case "*":
//     count = b * c;
//     console.log(`${b} + ${c} = ${count}`);
//     break;
//   case "**":
//     count = b ** c;
//     console.log(`${b} + ${c} = ${count}`);
//     break;
//   case "%":
//     count = b % c;
//     console.log(`${b} + ${c} = ${count}`);
//     break;
//   case ">":
//     if (b > c) {
//       console.log(`${b} > ${c}`);
//     } else {
//       console.log(`${b} < ${c}`);
//     }
//     break;
//   case "<":
//     if (b < c) {
//       console.log(`${b} > ${c}`);
//     } else {
//       console.log(`${b} < ${c}`);
//     }
//     break;
//   case "=":
//     if(b == c){
//         console.log(`${b} = ${c} = Teng...`);
//     }else{
//         console.log(`${b} va ${c} Sonlar o'zaro teng emas...`);
//     }
//     break;
//   default:
//     break;
// }

// let son = document.querySelector(".son");
// let operator = document.querySelector(".operator");
// let son1 = document.querySelector(".son1");
// let btn = document.querySelector(".btn");
// let text = document.querySelector(".text");

// btn.addEventListener("click", () => {
//        let a = `${+son.value}  ${operator}  ${+son1}`
//        text.innerHTML = a
// })

