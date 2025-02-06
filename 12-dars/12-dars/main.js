//  8-VARIAN

//===================================================================================================

// 1-savol

// console.log(5 == "5");   // true  (faqat qiymatni tekshiradi, avtomatik type coercion)
// console.log(5 === "5");  // false (qiymat va tur ham bir xil bo‘lishi kerak)
// console.log(5 != "5");   // false  (qiymatlar bir xil bo‘lgani uchun)
// console.log(5 !== "5");  // true  (turlari har xil bo‘lgani uchun)
// console.log(10 > 5);   // true
// console.log(3 < 7);    // true
// console.log(8 > 12);   // false
// console.log(5 >= 5);   // true (chunki 5 teng 5 ga)
// console.log(4 <= 6);   // true (4 kichik 6 dan)
// console.log(9 <= 8);   // false

//===================================================================================================

// 2-savol

//  Dot Notation (.)

// let user = { name: "Aslanbek", age: 25 };
// console.log(user.name);  // "Aslanbek"
// console.log(user.age);   // 25

// // Bracket Notation ([])

// console.log(user["name"]);  // "Aslanbek"

// let key = "age";
// console.log(user[key]);  // 25

// let person = { "full name": "John Doe" };
// console.log(person["full name"]);  // "John Doe"

// // Object.keys(), Object.values(), Object.entries()

// let car = { brand: "BMW", model: "X5", year: 2022 };

// console.log(Object.keys(car));   // ["brand", "model", "year"]
// console.log(Object.values(car)); // ["BMW", "X5", 2022]
// console.log(Object.entries(car)); // [["brand", "BMW"], ["model", "X5"], ["year", 2022]]

//====================================================================================================

// 3-savol

// == va === birbiridan farqlari.

// let a = Number(12);
// let b = String("12");
// if (a === b) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// ikktalik tenglik bu malumotni tekshiradi yani malumot qanday tipda bo'lishidan qatiy nazar teng bo'lsa true qaytadi.

// uchtalik tenglik bu malumotni Data tiplari bilan tekshiradi yani malumot teng bo'lsa lekin Data tiplari birxil bo'lmasa false  qaytadi.

//====================================================================================================

// 4-savol

// let str = "123";
// let num = Number(str);  // 123
// let bool = Boolean(""); // false
// console.log(num, typeof num);  // 123 'number'
// console.log(bool, typeof bool); // false 'boolean'

// Type Conversion (Qo'lda o'zgartirish) yani malumotlarning bir turdan ikkinchi turga alishtirishiga aytiladi yani bir turdan ikkinchi turga o'tishiga

//====================================================================================================

// 5-savol

// let num = prompt("Ixtiyoriy son kiriting...");

// if (Math.abs(num).toString().length === 1) {
//     console.log("Bir xonali son");
//     if (num >= 1) {
//         console.log("Musbat");
//     } else {
//         console.log("Manfiy");
//     }

//     if (num % 2 === 0) {
//         console.log("Juft son");
//     } else {
//         console.log("Toq son");
//     }
// }

// if (Math.abs(num).toString().length === 2) {
//     console.log("Ikki xonali son");
//     if (num >= 1) {
//         console.log("Musbat");
//     } else {
//         console.log("Manfiy");
//     }

//     if (num % 2 === 0) {
//         console.log("Juft son");
//     } else {
//         console.log("Toq son");
//     }
// }

// if (Math.abs(num).toString().length === 3) {
//     console.log("Uch xonali son");
//     if (num >= 1) {
//         console.log("Musbat");
//     } else {
//         console.log("Manfiy");
//     }

//     if (num % 2 === 0) {
//         console.log("Juft son");
//     } else {
//         console.log("Toq son");
//     }
// }

//====================================================================================================

// 6-savol

// let arr = ['12','34','75','93'];
// let arr1 = ['23','56','12','64'];

// console.log(arr.filter(item => arr1.includes(item)));

//====================================================================================================

// 7-savol

// let obj = {
//     name: 'Aslanbek',
//     age: 16,
// }

// let obj1 = {
//     name: 'Aftandil',
//     age: 5,
// }

// console.log(Object.assign({}, obj, {obj1}));

//====================================================================================================

// 8-savol

// let arr = [12,1,3,77,8];
// console.log(arr.reduce((a, b) => a + b, 0));

//====================================================================================================

// **************************************************************************************************
// **************************************************************************************************

// 10-variant

// **************************************************************************************************
// 1-savol

// Function Declaration (Funksiya e’lon qilish)

// function greet(name) {
//     return `Salom, ${name}!`;
//   }

//   console.log(greet("Aslanbek")); // "Salom, Aslanbek!"

//   ✅ Funksiya kodda istalgan joyda ishlatilishi mumkin.
//   ✅ Hoisting (yuqoriga ko‘tarish) ishlaydi.

// **************************************************************************************************

// Function Expression (Funksiya ifodasi)

// const greet = function(name) {
//     return `Salom, ${name}!`;
//   };

//   console.log(greet("Aslanbek")); // "Salom, Aslanbek!"

//   ✅ Anonim funksiya bo‘lishi mumkin.
// ❌ Hoisting ishlamaydi – funksiyani e’lon qilishdan oldin chaqirish xatolik beradi.

// **************************************************************************************************

// Arrow Function (Yoyli funksiya)

// const greet = (name) => `Salom, ${name}!`;

// console.log(greet("Zara")); // "Salom, Zara!"

// ✅ Qisqa sintaksis (agar faqat bitta return bo‘lsa, {} va return yozish shart emas).
// ✅ this konteksini saqlaydi (callback funksiyalar uchun foydali).

// **************************************************************************************************

// Immediately Invoked Function Expression (IIFE)

// (function() {
//     console.log("Bu funksiya darhol ishga tushdi!");
//   })();
// "Bu funksiya darhol ishga tushdi!"

//   ✅ Kod bloklarini ajratish uchun ishlatiladi (global o‘zgaruvchilarni ifodalashdan qochish).
//   ✅ Bir martalik ishlovchi funksiyalar uchun qulay.

// **************************************************************************************************

// Callback Function (Funksiya ichida boshqa funksiya)

// function processData(data, callback) {
//     console.log("Ma'lumot: " + data);
//     callback();
//   }

//   processData("JavaScript", function() {
//     console.log("Ma'lumot muvaffaqiyatli qayta ishlandi.");
//   });

// ✅ Asinxron operatsiyalar (setTimeout, fetch) uchun ishlatiladi.
//  ✅ Funksiyalarni moslashuvchan qilishga yordam beradi.

// **************************************************************************************************

// Recursive Function (Rekursiv funksiya)

// function factorial(n) {
//     if (n === 1) return 1;
//     return n * factorial(n - 1);
//   }

//   console.log(factorial(5)); // 120

// ✅ Masalalarni  kichik qismlarga bo‘lib yechish uchun yaxshi.
// ❌ Noto‘g‘ri ishlatilsa, stack overflow xatosi bo‘lishi mumkin.

// **************************************************************************************************

// Higher-Order Function (Yuqori darajali funksiya)

// function operate(x, y, operation) {
//     return operation(x, y);
//   }

//   const sum = (a, b) => a + b;
//   console.log(operate(5, 3, sum)); // 8

// ✅ Funksiyalarni qaytarishi yoki qabul qilishi mumkin.
// ✅ Functional Programming (FP) da keng qo‘llaniladi.

// **************************************************************************************************

// Generator Function (Ma’lumot oqimlarini yaratish)

// function* count() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }

//   const counter = count();
//   console.log(counter.next().value); // 1
//   console.log(counter.next().value); // 2
//   console.log(counter.next().value); // 3

// ✅ Bosqichma-bosqich ma’lumot yaratadi.
// ✅ Infinite loop (cheksiz aylanishlar) oldini oladi.

//==================================================================================================

// 2-savol
// JavaScript-da obyekt metodlari – bu obyekt ichidagi funksiyalardir. Ular obyektning xatti-harakatlarini belgilaydi va unga turli operatsiyalar bajarishga imkon beradi.

// const person = {
//   name: "Aslanbek",
//   age: 25,
//   greet: function () {
//     console.log(`Salam, mening ismim ${this.name}`);
//   },
// };

// person.greet(); // Salam, mening ismim Aslanbek

// **************************************************************************************************

//   1️⃣ Object.keys(obj)
// Obyektning barcha kalitlarini (keys) massiv shaklida qaytaradi.

// const user = { name: "Ali", age: 30, country: "Uzbekistan" };
// console.log(Object.keys(user));

// ["name", "age", "country"]

// **************************************************************************************************

// 2️⃣ Object.values(obj)
// Obyektning barcha qiymatlarini (values) massiv sifatida qaytaradi.

// console.log(Object.values(user));

// ["Ali", 30, "Uzbekistan"]

// **************************************************************************************************

// 3️⃣ Object.entries(obj)
// Har bir kalit-qiymat juftligini massiv ichida massiv ko‘rinishida qaytaradi.

// console.log(Object.entries(user));

/*
[
  ["name", "Ali"],
  ["age", 30],
  ["country", "Uzbekistan"]
]
*/

// **************************************************************************************************

// 4️⃣ Object.assign(target, ...sources)
// Berilgan obyektlarni bitta obyektga birlashtiradi.const obj1 = { a: 1, b: 2 };

// const obj2 = { c: 3, d: 4 };
// const merged = Object.assign({}, obj1, obj2);
// console.log(merged);

// { a: 1, b: 2, c: 3, d: 4 }

// **************************************************************************************************

// 5️⃣ Object.freeze(obj)
// Obyektni o‘zgarmas qiladi, unga yangi xususiyat qo‘shib bo‘lmaydi yoki mavjudlarini o‘zgartirib bo‘lmaydi.

// const car = { model: "Tesla", year: 2024 };
// Object.freeze(car);
// car.year = 2025; // O'zgarmaydi
// console.log(car.year);

// 2024

// **************************************************************************************************

// 6️⃣ Object.seal(obj)
// Obyektga yangi xususiyat qo‘shib bo‘lmaydi, lekin mavjudlarini o‘zgartirish mumkin.

// const user2 = { name: "Eldar", age: 22 };
// Object.seal(user2);
// user2.age = 23; // O'zgaradi
// user2.country = "Uzbekistan"; // Qo'shilmadi
// console.log(user2);

// { name: "Eldar", age: 23 }

//==================================================================================================

// 3-savol

// Data Types
// JavaScriptda Data typeslar ikki turga bo'linadi primitiv va non primitiv data typeslarga
// JavaScriptda primitiv turdagi data typeslar o'zida faqat bir turdagi malumotni saqlaydi,
// JavaScriptda non primitiv turdagi data typeslar esa o'zida ko'p turdagi malumotni saqlaydi,

// JavaScriptda primitiv data types;

// let num = 42; // Number
// let bigNum = 9007199254740991n; // BigInt
// let text = "Hello, JavaScript!"; // String
// let isTrue = true; // Boolean
// let notDefined; // Undefined
// let empty = null; // Null
// let uniqueKey = Symbol("key"); // Symbol

// console.log(typeof num); // "number"
// console.log(typeof bigNum); // "bigint"
// console.log(typeof text); // "string"
// console.log(typeof isTrue); // "boolean"
// console.log(typeof notDefined); // "undefined"
// console.log(typeof empty); // "object" (JS-da bu xato, null aslida primitive)
// console.log(typeof uniqueKey); // "symbol"

// JavaScriptda non primitiv data types;

// Object
// let person = {
//     name: "Aslanbek",
//     age: 25
//   };

//   // Array
//   let numbers = [1, 2, 3, 4, 5];

//   // Function
//   function greet() {
//     return "Salom, dunyo!";
//   }

//   console.log(typeof person); // "object"
//   console.log(typeof numbers); // "object"
//   console.log(typeof greet); // "function" (aslida object turi)

//==================================================================================================

// 4-savol

// Scope – bu o‘zgaruvchilar, funksiyalar va bloklarning qayerda ishlashi va ularga qaysi joylardan murojaat qilish mumkinligini belgilovchi tushuncha.

// JavaScript-da scope o‘zgaruvchilarning ko‘rinish doirasini aniqlaydi.
// JS Scopes uch turga bo'linadi < Global Scopes >, < Funtion Scopes >, < Block Scopes > ;

// let va const bular block scope var esa funtion scopega bo'ysunadi yani var block scope ichida ishlatilsa hoisting bo'ladi let va const esa blockdan tashqariga chiqa olmaydi var faqat funtion ichida ishlatilsa scopdan tashqariga chiqa olmaydi

// var let va const bular global scope ichida yaratilsa funtion scopening ham block scopning ham ichiga kira oladi

// **************************************************************************************************

// Global Scope (Global ko‘rinish doirasi)

// let globalVar = "Men global o‘zgaruvchiman!";

// function showGlobal() {
//   console.log(globalVar); // Global o‘zgaruvchiga istalgan joydan murojaat qilish mumkin
// }

// showGlobal(); // "Men global o‘zgaruvchiman!"
// console.log(globalVar); // "Men global o‘zgaruvchiman!"

// ✅ Global scope-dagi o‘zgaruvchilar butun kod bo‘ylab ishlaydi.

// **************************************************************************************************
// Function Scope (Funksiya ko‘rinish doirasi)

// function myFunction() {
//     let functionVar = "Men faqat funksiya ichida ishlayman";
//     console.log(functionVar); 
//   }

//   myFunction();
//   console.log(functionVar); // Xatolik! functionVar global emas

// ⛔ Xatolik: ReferenceError: functionVar is not defined
// ✅ Funksiya scope ichidagi o‘zgaruvchilar tashqaridan ko‘rinmaydi!
// **************************************************************************************************
// Block Scope (Blok ko‘rinish doirasi)

// if (true) {
//     let blockVar = "Men faqat shu blok ichida ishlayman!";
//     console.log(blockVar);
//   }

//   console.log(blockVar); // Xatolik! blockVar blok ichida qoladi

// ⛔ Xatolik: ReferenceError: blockVar is not defined
// ✅ var esa block scopega ega emas, faqat function scopega ega:

//==================================================================================================

// 5-savol

// function sumOfMultiplesOfThree(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       if (i % 3 === 0) {
//         sum += i;
//       }
//     }
//     return sum;
//   }

//   let userInput = parseInt(prompt("Istalgan sonni kiriting: "));
//   console.log(`3 ga bo‘linadigan sonlar yig‘indisi: ${sumOfMultiplesOfThree(userInput)}`);

//==================================================================================================
// 6-savol

function fn(arr) {
    if (arr.length < 2) return arr; 
    
    let last = arr[arr.length - 1]; 
    arr[arr.length - 1] = last + 1;  
    arr[arr.length - 2] = last + 1;  
    
    return arr;
  }
  
  let arr = [10, 20, 30, 40];
  console.log(fn(arr));
  
//==================================================================================================

// 7-savol

// let obj = {
//     name: "Aslanbek",
//     surName: "Odilov",
//     age: 16,
// }

// let obj1 = {
//     name1: "Aftandil",
//     surName1: "Odilov",
//     age1: 5,
// }

// let object = Object.assign({}, obj, obj1)

// console.log(object);
// console.log(Object.values(object));

//==================================================================================================

// 8-savol

// function fn(arr) {
//     if (arr.length < 2) return arr;

//     let first = arr[0];
//     let last = arr[arr.length - 1];
    
//     arr[0] = last;
//     arr[arr.length - 1] = first;
    
//     return arr;
//   }
  
//   let arr = [10, 20, 30, 40];
//   console.log(fn(arr)); 
  