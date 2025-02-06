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
