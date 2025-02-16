let darkMode = false; 
let themeImage = document.getElementById("themeImage");
let toggleBtn = document.getElementById("toggleBtn");
let body = document.body;
let icon = document.getElementById("icon");

let mediaQuery = window.matchMedia("(max-width: 520px)");

function updateImage() {
  if (mediaQuery.matches) {
    themeImage.src = darkMode ? "./img/LogoWeb.png" : "./img/LogoWeb.png";
  } else {
    themeImage.src = darkMode ? "./img/NajotTalimLogo.png" : "./img/najotLogo.png";
  }
}

function updateResponsiveStyles() {
  if (window.innerWidth < 520) {
    themeImage.style.width = "180px";
  } else {
    themeImage.style.width = "200px";
  }
}


toggleBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  body.classList.toggle("dark-mode");
  icon.innerHTML = darkMode ? "🌙" : "☀️"; 
  updateImage(); 
});

window.addEventListener("resize", updateResponsiveStyles);
mediaQuery.addEventListener("change", updateImage);

updateResponsiveStyles();
updateImage();

let bars = document.getElementById("bars");
let ext = document.getElementById("ext");
let menyu = document.querySelector(".menyu");

bars.addEventListener("click", () => {
  menyu.classList.toggle("active");
})

ext.addEventListener("click", () => {
  menyu.classList.toggle("active");
})