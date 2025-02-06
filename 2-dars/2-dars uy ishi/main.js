// 1-masala

// let a = -9;
// let b = 9;
// let c = 5;

// if (a >= b && a >= c) {
//     console.log(a);
// }else if (b >= a && b >=c) {
//     console.log(b);
// } else {
//     console.log(c);
// }

// let i = -9;
// let v = 9;
// let s = 5;

// console.log(Math.max(i, v, s));

// =======================================================

// 2-masala

// let i = 100;
// let v = 59;
// let s = 51;

// if (i <= v || i <= s) {
//     console.log(i);
// } else if(v <= i && v <= s){
//     console.log(v);
// }else{
//     console.log(s);
// }

// let i = -9;
// let v = 9;
// let s = 5;

// console.log(Math.min(i, v, s));

// =======================================================

// 3-masala

// let a = 11;
// let b = 19;

// if(a > b){
//     console.log(a);
// }else if (a === b) {
//     console.log(0);
// }else{
//     console.log(b);
// }

// let a = 11;
// let b = 19;

// let qiymat = (a !== b) ? Math.max(a, b) : 0;

// let qiymat2 = Math.max(a, b) === Math.min(a, b) ? 0 : Math.max(a, b)

// console.log(qiymat);
// console.log(qiymat2);

// =======================================================

// 4-masala

// let x = -1;
// let y = 10;

// if (x > 0 && y > 0) {
//     console.log("I-chorak");
// }else if (x < 0 && y > 0) {
//     console.log("II-chorak");
// } else if(x < 0 && y < 0){
//     console.log("III-chorak");
// }else if (x > 0 && y < 0) {
//     console.log("IV-chorak");
// }

// =======================================================

// 8-masala

// let i = 4;
// let v = 3;
// let s = 5;

// if (i + v > s && i + s > v && v + s > i) {
//     console.log("Yes"); 
// } else {
//     console.log("No");
// }

// =======================================================

// 9-masala

// let temp = prompt("Hozirgi temperaturani kiriting...");
// if (temp <= 0) {
//     console.log("Freezing");
// } else if(temp >= 1 && temp <= 10){
//     console.log("Very Cold’");
// }else if (temp >= 11 && temp <= 20) {
//     console.log("Cold");
// }else if (temp >= 21 && temp <= 30) {
//     console.log("Normal");
// }else if (temp >= 31 && temp <= 40) {
//     console.log("Hot");
// }else{
//     console.log("Very Hot");
// }



// =======================================================

// 10-masala

// let a = prompt("Musbat yoki manfiy son kiriting...");

// if (a < 0) {
//     if (a % 2 === 0) {
//         console.log("Manfiy juft son...");
//     } else {
//         console.log("Manfiy toq son...");
//     }
// }else if (a > 0) {
//     if (a % 2 === 0) {
//         console.log("Musbat juft son...");
//     } else {
//         console.log("Musbat toq son...");
//     }
// }else if (a === "-0") {
//     console.log("Manfiy juft son...");
// }else if (a === "0") {
//     console.log("0");
// }

// =======================================================

// 11-masala

// let a = prompt("Ikki yoki uch xonali son kiriting son kiriting...");
// let count = 0;
// for (let i = 0; i < a.length; i++) {
//   count++;
// }

// if (count === 2) {
//   let d =
//     a % 2 === 0
//       ? console.log("Ikki xonali juft son...")
//       : console.log("Ikki xonali toq son...");
// } else {
//     a % 2 === 0
//     ? console.log("Uch xonali juft son...")
//     : console.log("Uch xonali toq son...");
// }

// =======================================================

// 12-masala

// let n = parseInt(prompt("1 dan 4 gacha bo'lgan son kiriting..."));

// if (n >= 1 && n <= 4) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i ** 2; 
//     }
//     console.log(sum);
// } else {
//     console.log("Siz 1 dan kichik yoki 4 dan katta son kiritdingiz...");
// }


// =======================================================

// 13-masala

// let daftar = 20;
// let input = confirm("Siz tanafusdamisiz...");

// if (input === true) {
//     let pro = prompt("O'zingizda bor sumani kiriting...");

//     if (pro >= daftar) {
//         alert("Tabriklayman siz daftarli bo'ldingiz...")
//     } else {
//         alert("Kechirasiz sizning sumangiz daftarga yetarli emas...")
//     }
// } else {
//     alert("Siz tanafusda emasiz iltimos tanafus vaqtida keling...")
// }

// =======================================================

// 14-masala

// let n = prompt("Ikki xonali son kiriting...");

// let n1 = parseInt(n / 10);
// let n2 = parseFloat(n % 10);
// let n3 = n2 * 10 + n1;
// if (n3 <= n) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// =======================================================

// 15-masala

// let s = prompt("Ixtiyoriy son kiriting...")
// let count = 0;
 
// for (let i = 0; i < s.length; i++) {
//     count++  
// }

// console.log("Siz kiritgan son " + count + " xonali");

// let d = s.toString()
// console.log( d.length);



// =======================================================

// 16-masala

// let a = 29;
// let b = 588;
// let c = 8485;

// let d = Math.floor(a / 10);
// let d1 = a % 10;
// console.log(eval(d + d1));

// let d2 = Math.floor(b / 100);
// let d22 = Math.floor(b / 10) % 10;
// let d3 = b % 10;
// console.log(eval(d2 + d22 + d3));

// let d4 = Math.floor(c / 1000);
// let d5 = Math.floor(c / 100) % 10;
// let d6 = Math.floor(c / 10) % 10;
// let d7 = Math.floor(c % 10);
// console.log( eval(d4 + d5 + d6 + d7));

// =======================================================

// 17-masala

// let r = 49;
// let r1 = Math.floor(r / 10);
// let r2 = r % 10;
// if (r1 % 2 === 0 && r2 % 2 === 0) {
//     console.log(r1);  
// } else {
//     console.log(r2);  
// }

// =======================================================

// 18-masala

// let a = 10;
// let b = 25;
// let c = 7;

// if (a >= b && a >= c) {
//     console.log("kkkk");
// }else if (b >= a || b >= c) {
//     console.log("hhhhh");  
// }else{
//     console.log("lllll");
    
// }

// console.log(Math.max(a, b, c));

// =======================================================

// 19-masala

// let f = 12345;

// let l1 = Math.floor(f / 10000);
// let l2 = Math.floor(f / 1000) % 10;
// let l3 = Math.floor(f / 100) % 10;
// let l4 = Math.floor(f / 10) % 10;
// let l5 = Math.floor(f % 10);

// console.log(Math.max(l1, l2, l3, l4, l5));

// =======================================================

// 20-masala

// let f = 12354;

// let l1 = Math.floor(f / 10000);
// let l2 = Math.floor(f / 1000) % 10;
// let l3 = Math.floor(f / 100) % 10;
// let l4 = Math.floor(f / 10) % 10;
// let l5 = Math.floor(f % 10);
// let ff = [l1, l2, l3, l4, l5]
// let math = Math.max(...ff)
// let math2 = ff.indexOf(math);

// console.log("Max " +  math);
// console.log("index " +  math2);

// let max = -1; 
// let maxIndex = -1; 
// let currentIndex = 0;

// while (f > 0) {
//     let digit = f % 10;
//     if (digit > max) {
//         max = digit; 
//         maxIndex = currentIndex;
//     }
//     f = Math.floor(f / 10);
//     currentIndex++;
// }

// console.log("Max digit:", max); 
// console.log("Index (o'ngdan chapga):", maxIndex);
