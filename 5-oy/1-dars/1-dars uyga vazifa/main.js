
import { fnPlus, fnMinus, fnLike, fnRest } from "./function.js";
import { left, center, right, right1, like, like1, like__cards, like__text, container, rest, select, body, img} from "./variables.js";


document.addEventListener("DOMContentLoaded", () => {
    right.addEventListener("click", function() {
        fnPlus(center);
    })
    
    left.addEventListener("click", function() {
        fnMinus(center);
    })
    
    rest.addEventListener("click", function() {
        fnRest(center);
    })
    
    like__cards.addEventListener("click", () => {
        fnLike(img);
    })


    select.addEventListener("change", () => {
        const value = select.value;
        body.style.backgroundColor = value;
    
        let textColor = "black";
        let borderColor = "black";
        let specialColor = "red";
    
        if (value === "darkmagenta" || value === "black") {
            textColor = "#fff";
            borderColor = "#fff";
            specialColor = value === "black" ? "#fff" : "yellow";
        } else if (value === "red") {
            textColor = "yellow";
            borderColor = "yellow";
            specialColor = "black";
        }
    
        left.style.color = textColor;
        right1.style.color = textColor;
        center.style.color = textColor;
        left.style.borderColor = borderColor;
        right.style.borderColor = borderColor;
        rest.style.borderColor = specialColor;
        rest.style.color = specialColor;
        select.style.borderColor = specialColor;
        select.style.color = specialColor;
        
        like.style.color = specialColor;
        like1.style.color = specialColor;
        like__cards.style.borderColor = specialColor;
        like__text.style.color = specialColor;
    
        if (value === "red") {
            container.style.borderColor = "black";
        }
    });
})