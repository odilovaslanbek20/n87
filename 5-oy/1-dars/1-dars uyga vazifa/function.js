export function fnPlus(center) {
    center.innerHTML++;
}


export function fnMinus(center) {
  let value = parseInt(center.innerHTML, 10);
  if (value > 0) { 
    center.innerHTML = value - 1; 
  }
}


export function fnRest(center) {
  center.innerHTML = 0;
};

export function fnLike(img) {
  if (!img.classList.contains("active")) {
    img.classList.add("active");
    setTimeout(() => {
      img.classList.remove("active");
    }, 3000);
  } else {
    img.classList.remove("active");
  }
};


