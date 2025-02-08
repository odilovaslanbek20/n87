// class Person {
//     constructor (name, surName, age) {
//         this.name = name;
//         this.surName = surName;
//         this.age = age;
//         this.date = new Date().getFullYear();
//     }

//     getFullDate () {
//         console.log(`${this.name}, ${this.surName}, ${this.age}, ${this.date}`);
//     }
// }

// let person1 = new Person("Aslanbek", "Odilov", 16, );
// person1.getFullDate()

// let text1 = document.getElementById("text");
// let text2 = document.getElementById("text1");
// let btn = document.getElementById("btn");
// let out = document.getElementById("output");

// btn.onclick = function () {
//     myFunck(text1.value, text2.value);
//     text1.value = "";
//     text2.value = "";
// }

// function myFunck(a, b) {
//     return out.innerHTML = a + b.repeat(2) + a;
// }

// let text1 = document.getElementById("text");
// let text2 = document.getElementById("text1");
// let btn = document.getElementById("btn");
// let out = document.getElementById("output");

// btn.onclick = function () {
//     myFunck(text1.value, text2.value);
//     text1.value = "";
//     text2.value = "";
// }

// function myFunck(a, b) {
//     return out.innerHTML = '<h1>' + a + ' ' + b + '</h1>';
// }

// let text1 = document.getElementById("text");
// let text2 = document.getElementById("text1");
// let btn = document.getElementById("btn");
// let out = document.getElementById("output");

// btn.onclick = function () {
//     myFunck(text1.value, text2.value);
//     text1.value = "";
//     text2.value = "";
// }

// function myFunck(a, b) {
//     return out.innerHTML = a.slice(0, 2) + b + a.slice(2, 4);
// }

// let text1 = document.getElementById("text");
// let btn = document.getElementById("btn");
// let out = document.getElementById("output");

// btn.onclick = function () {
//     myFunck(text1.value);
//     text1.value = "";
// }

// function myFunck(a) {
//     return out.innerHTML = a.slice(-2).repeat(2);;
// }


// function salom(text) {
//     return text;
// }

// function myFuncl(name, collback) {
//     console.log(name + ' ' + collback);
// }

// myFuncl('Aslanbek', salom('Salom!'));
// myFuncl(salom('Salom!'), 'Aslanbek');


// Higher-Order Function: funksiya yaratib qaytaradi
// function greetMaker(greeting) {
    // return function(name) {
    //   console.log(`${greeting}, ${name}!`);
    // };
//   }
  
  // greetMaker funksiyasidan yangi funksiya yaratamiz
//   const sayHello = greetMaker("Salom");
//   const sayHi = greetMaker("Hi");
  
  // Endi yangi funksiyalarni chaqiramiz
//   sayHello("Aslanbek"); // Salom, Aslanbek!
//   sayHi("Ali");         // Hi, Ali!
  
// function taxCalculator(taxRate) {
//     return function(income) {
//       return income * taxRate;
//     };
//   }
  
  // Turli soliq stavkalari uchun funksiyalar yaratamiz
//   const vatCalculator = taxCalculator(0.15); // 15% QQS
//   const incomeTaxCalculator = taxCalculator(0.25); // 25% daromad solig‘i
  
//   console.log(vatCalculator(1000));         // 150 (QQS)
//   console.log(incomeTaxCalculator(2000));   // 500 (daromad solig‘i)
  

// Collback-function deb boshqa bir functionga argument sifatida beriladigan functionlarga aytiladi.
// Higher-Order Function (HOF) — bu boshqa funksiyani argument sifatida qabul qiluvchi yoki natija sifatida qaytaruvchi funksiya hisoblanadi.

// Higher-Order Function funksiyani argument sifatida olishi yoki funksiya qaytarishi mumkin.
// Funksiya qaytaruvchi HOF odatda dinamik ravishda yangi funksiyalar yaratishda ishlatiladi (masalan, ko‘paytiruvchilar, soliq hisoblagichlar).

// let num = 12.234543;
// console.log(num.toFixed(2));


// Bu metod sonni belgilangan kasr o‘rinlariga (decimal places) qadar qisqartiradi.
// (2) — bu kasr nuqtadan keyin nechta raqam ko‘rsatishni bildiradi.
// Natija har doim string sifatida qaytariladi.


// console.log(Number.isInteger(num));
// console.log(Number.isNaN(num)); 

// isInteger() — qiymat butun son yoki yo‘qligini tekshiradi.
// isNaN() — faqat raqam emas bo‘lgan qiymatlarni aniqlaydi.


// let num = 123.149;

// 4 ta umumiy raqam bilan formatlash
// console.log(num.toPrecision(4));  // "123.5"

// 2 ta umumiy raqam bilan formatlash
// console.log(num.toPrecision(2));  // "1.2e+2" (eksponent shaklda)

// 6 ta umumiy raqam bilan formatlash
// console.log(num.toPrecision(6));  // "123.456"


// console.log(isNaN("Hello"));  // true
// console.log(isNaN(123));      // false

// console.log(isFinite(100));   // true
// console.log(isFinite(Infinity)); // false


// let num = new Number(100);
// console.log(num.valueOf());  // 10

//=================================================================================

// Boolean qiymatlar

// console.log(Boolean(1));       // true
// console.log(Boolean(0));       // false
// console.log(Boolean("Hello")); // true
// console.log(Boolean(""));      // false


// let flag = true;
// console.log(flag.toString());  // "true"


// let boolObj = new Boolean(false);
// console.log(boolObj.valueOf()); // false


// console.log(Boolean(0));     // false
// console.log(Boolean(100));   // true


// console.log(!!123);        // true
// console.log(!!"Hello");    // true
// console.log(!!0);          // false
// console.log(!!null);       // false


// function checkValue(value) {
//   if (Boolean(value)) {
//       console.log(`${value} — truthy qiymat.`);
//   } else {
//       console.log(`${value} — falsy qiymat.`);
//   }
// }

// checkValue(0);       // 0 — falsy qiymat.
// checkValue("text");  // text — truthy qiymat.
// checkValue(null);    // null — falsy qiymat.



// let myArray = [1, 2, 3];
// let iterator = myArray[Symbol.iterator]();

// console.log(iterator.next().value); // 1
// console.log(iterator.next().value); // 2
// console.log(iterator.next().value); // 3


// console.log(Math.round(3.4));


// let a = 4.455;
// let b = Math.trunc(a);
// console.log(b);


// class Car {
//   constructor(name, model, year, color, region) {
//     this.name = name,
//     this.madel = model,
//     this.name = year,
//     this.name = color,
//     this.name = region,
//   }
// }


// function factorial(n) {
//   if (n === 1) {       // Asosiy (base) holat
//       return 1;
//   }
//   return n * factorial(n - 1);  // O‘zini o‘zi chaqirish (rekursiya)
// }

// console.log(factorial(5)); // 120
