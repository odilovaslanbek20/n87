// let a = ["banan", "kivi", "nok"];
// let c = [56, 63, 12];
// a.splice(0, 0, "Olma")
// console.log(a);
// a.reverse()
// console.log(a.includes("kivi"));
// console.log(a);

// let s = c.sort((a, b) => a - b)
// console.log(s);
// let s = c.reduce((a, b) => a + b, 0)
// console.log(s);
// let s = c.filter((a) => a % 2 == 0)
// console.log(s);

//================================================================================================

/* STRING METODS 

//String metodlarini barchasi asil str ni o'zgartirmaydi  o'zgartiradigan qiymatlarini yangi str ga aylantib qaytaradi.

// let str = "Hello world!";

// let a = str.toUpperCase() 

//str[ichidagi barcha elementlarni katta harfga aylantiradi]  asosiy string o'zgartirmaydi va yangi string qaytaradi.
// let a = str.toLowerCase()

//str[ichidagi barcha elementlarni kichik harfga aylantiradi] asosiy string o'zgartirmaydi va yangi string qaytaradi.

// let a = str.trim()
// let b = str.trimStart() // str boshidan prob chopadi.
// let c = str.trimEnd() // str oxiridan prob chopadi.

//str[ ikkala tomonidagi barcha probellarni olib tashlaydi faqt ikkala tomonidan markazdan emas] asosiy string o'zgartirmaydi va yangi string qaytaradi.

// let a = str.replace('world!', 'Aslanbek!');

//str[Ichidan biror elementni alishtirish uchun ishlatiladi] asosiy string o'zgartirmaydi va yangi string qaytaradi.

// let a = str.split("");

//str[Stringni arrayga aylantiradi] asosiy string o'zgartirmaydi va yangi string qaytaradi.

// let a = str.includes("world");

//str[qavs ichida berilgan qiymatni string ichida bor yoki yo'qligini tekshiradi va Boolen() qiymat yani true false qaytaradi]

// let a = str.startsWith("H");

//str[string qavs ichidagi qiymatni bilan boshlanganligini tekshiradi va Boolen() qiymat yani true false qaytaradi]

// let a = str.endsWith("!");

//str[stringning oxiridan boshlab qavs ichidagi qiymatni bilan boshlanganligini tekshiradi va Boolen() qiymat yani true false qaytaradi]

// let a = str.indexOf("H");

//str[qavsh ichidagi qiymatning string ichida indexni qaytaradi] agar qavs ichidagi qiymat str da topaolmasa -1 qiymatini qaytaradi "-1 mavjud emas segan manoni anglatati";

// let a = str.concat("UZBEKISTAN");

//str[ikkta stringni bir-biriga qo'shadi] asosiy string o'zgartirmaydi va yangi string qaytaradi.

// let a = str.substring(2, 5);

//str[qavs ichidagi sharga asoslanib string elementlarini kesib oladi] asosiy string o'zgartirmaydi va yangi string qaytaradi.


// let a = str.charAt(0);

// str[qavs ichida index raqamga qarab str ichidagi elementni qaytaradi]

// console.log(str);
// console.log(a);
