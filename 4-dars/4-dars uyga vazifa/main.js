let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let text = document.getElementById("text");
let operator = document.getElementById("operator");

btn.onclick = funck;

btn1.addEventListener("click", () => {
  text.textContent = 0;
  operator.value = "";
  son.value = "";
  son1.value = "";
});

function funck() {
  let operator = document.getElementById("operator");
  let son = document.getElementById("son");
  let son1 = document.getElementById("son1");


  switch (operator.value) {
    case "+":
      text.innerHTML = +son.value + +son1.value;
      break;

    case "-":
      text.innerHTML = +son.value - +son1.value;
      break;

    case "*":
      text.innerHTML = son.value * son1.value;
      break;

    case "**":
      text.innerHTML = son.value ** son1.value;
      break;

    case "/":
      if (operator.value === "0") {
        text.innerHTML = "0 ga bo'lish mumkin emas!";
      } else {
          text.innerHTML = son.value / son1.value;
    }
      break;

    case "%":
      let a = son.value % +son1.value;
      if (a === 0) {
        text.innerHTML = "Qoldiq 0 ga teng";
      } else {
        text.innerHTML = +son.value % +son1.value;
      }
      break;

    default:
      text.innerHTML = "Operator noto'g'ri kiritilgan!";
      break;
  }
}


