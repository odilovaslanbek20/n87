let i = 0; 

export function fnNext(img) {
    img[i].style.display = 'none';
    i++; 
    if (i >= img.length) {
        i = 0;
    }
    img[i].style.display = 'block'; 
    
}

export function fnPrev(img) {
    img[i].style.display = 'none'; 
    i--; 
    if (i < 0) { 
        i = img.length - 1;
    }
    img[i].style.display = 'block'; 
    
}

export function fnSet(img1) {
    setInterval(() => {
        img1[i].style.display = 'none';
        i++; 
        if (i >= img1.length) {
            i = 0;
        }
        img1[i].style.display = 'block'; 
    }, 3000);
}