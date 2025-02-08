try {
    let left = document.querySelector(".cards__left");
let center = document.querySelector(".cards__center");
let right = document.querySelector(".cards__right");
let right1 = document.querySelector(".cards__right i");
let rest = document.querySelector(".bg__cards");
let select = document.getElementById("select");
let like = document.querySelector(".like1");
let like1 = document.querySelector(".like2");
let like__cards = document.querySelector(".like__cards");
let like__text = document.querySelector(".like__text");
let container = document.querySelector(".container");
let img = document.querySelector(".img");
let body = document.querySelector("body");
let count = 0;

right.onclick = function () {
  count++;
  center.innerHTML = count;
};

left.onclick = function () {
  count--;
  if (count < 0) {
    count = 0;
  }
  center.innerHTML = count;
};

rest.onclick = function () {
  count = 0;
  center.innerHTML = count;
};

like__cards.onclick = function () {
    if (!img.classList.contains("active")) {
        img.classList.add("active");
        setTimeout(() => {
            img.classList.remove("active");
        }, 3000);
    } else {
        img.classList.remove("active");
    }
};

select.addEventListener("change", () => {
  switch (select.value) {
    case "darkmagenta":
      body.style.backgroundColor = "darkmagenta";
      if (select.value === "darkmagenta") {
        left.style.color = "#fff";
        right1.style.color = "#fff";
        center.style.color = "#fff";
        left.style.borderColor = "#fff";
        right.style.borderColor = "#fff";
        rest.style.borderColor = "yellow";
        rest.style.color = "#fff";
        select.style.borderColor = "yellow";
        select.style.color = "#fff";
      }
      break;
    case "black":
      body.style.backgroundColor = "black";
      if (select.value === "black") {
        left.style.color = "#fff";
        right1.style.color = "#fff";
        center.style.color = "#fff";
        left.style.borderColor = "#fff";
        right.style.borderColor = "#fff";
        rest.style.borderColor = "#fff";
        rest.style.color = "#fff";
        select.style.borderColor = "#fff";
        select.style.color = "#fff";
        like.style.color = "#fff";
        like1.style.color = "#fff";
      }
      break;
    case "antiquewhite":
      body.style.backgroundColor = "antiquewhite";
      if (select.value === "antiquewhite") {
        left.style.color = "black";
        right1.style.color = "black";
        center.style.color = "black";
        left.style.borderColor = "black";
        right.style.borderColor = "black";
        rest.style.borderColor = "black";
        rest.style.color = "black";
        select.style.borderColor = "black";
        select.style.color = "black";
        like.style.color = "red";
        like1.style.color = "red";
        like__cards.style.borderColor = "red";
        like__text.style.color = "red";
      }
      break;
    case "aqua":
      body.style.backgroundColor = "aqua";
      if (select.value === "aqua") {
        left.style.color = "black";
        right1.style.color = "black";
        center.style.color = "black";
        left.style.borderColor = "black";
        right.style.borderColor = "black";
        rest.style.borderColor = "black";
        rest.style.color = "black";
        select.style.borderColor = "black";
        select.style.color = "black";
        like.style.color = "red";
        like1.style.color = "red";
        like__cards.style.borderColor = "red";
        like__text.style.color = "red";
      }
      break;
    case "red":
      body.style.backgroundColor = "red";
      if (select.value === "red") {
        left.style.color = "yellow";
        right1.style.color = "yellow";
        center.style.color = "black";
        left.style.borderColor = "yellow";
        right.style.borderColor = "yellow";
        rest.style.borderColor = "black";
        rest.style.color = "black";
        select.style.borderColor = "black";
        select.style.color = "black";
        like.style.color = "black";
        like1.style.color = "black";
        like__cards.style.borderColor = "black";
        like__text.style.color = "black";
        container.style.borderColor = "black";
      }
      break;
    default:
      body.style.backgroundColor = "darkmagenta";
      break;
  }
});
} catch (error) {
    alert("Error messeng", error)
}