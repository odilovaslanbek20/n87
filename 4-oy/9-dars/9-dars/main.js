// function isEmpty(obj) {
//     if (Object.keys(obj).length !== 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// isEmpty({
//     names: "Aslanbek",
//     surName: "Odilov",
//     age: 16,
// });

// isEmpty({});

// function isCount(obj) {
//     let a = Object.values(obj)
//     let count = 0;
//     for (let i = 0; i < a.length; i++) {
//         count += a[i]
//     }
//     console.log(count + "$");
    
// }

// isCount({
//     aslan1: 100, 
//     aslan2: 170, 
//     aslan3: 270, 
// })

// function doubleNumbers(obj) {
//     let newObj = {};
//     for (let key in obj) {
//         if (typeof obj[key] === "number") {
//             newObj[key] = obj[key] * 2;
//         } else {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }

// const data = { a: 10, b: "hello", c: 5, d: true };
// console.log(doubleNumbers(data));
