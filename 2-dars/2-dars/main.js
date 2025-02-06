// let b = prompt("Imtihonda to'plagan balingizni kiriting...");

// if (b > 96 && b <= 100) {
//     alert("Siz vunderkind etib tayinlandingiz...")
// } else if(b > 85 && b <= 95){
//     alert("Sizning darajangiz alo etib tayinlandingiz...")
// }else if (b > 70 && b <= 84) {
//     alert("Sizning darajangiz yaxshi etib tayinlandingiz...")
// }else if (b > 60 && b <= 69) {
//     alert("Sizning darajangiz qoniqarli etib tayinlandingiz...")
// }else if(b > 100){
//     alert("Siz 100 balik sistemadan yuqori son kiritingiz...")
// }else if(b < 59){
//     alert("Sizning balingiz 60 dan kichik...")
// }

// let list = document.querySelector(".list")
let uzum = document.querySelector(".uzum")
let a = prompt("Yoshingizni kiriting...");

if (a >= 18) {
    let c = prompt("Loginingizni kiriting...");
if (c === "parol") {
    let s = prompt("Parolingizni kiriting...");
    if (s === "12345") {
        uzum.classList.toggle("active")
    } else {
        alert("Sizning parolingiz xato iltimos teshirib qaytadan urinib ko'ring...")
    }
} else {
    alert("Sizning loginingiz xato iltimos teshirib qaytadan urinib ko'ring...")
}
}else{
    alert("Siz hali yoshsiz...")
}

let soat = document.querySelector(".soat");
let minut = document.querySelector(".minut");
let second = document.querySelector(".secund");

setInterval(() => {
  let date = new Date();
  let soat1 = date.getHours().toString().padStart(2, "0");
  let minut1 = date.getMinutes().toString().padStart(2, "0");
  let second1 = date.getSeconds().toString().padStart(2, "0");

  soat.textContent = soat1;
  minut.textContent = minut1;
  second.textContent = second1;
}, 1000);
