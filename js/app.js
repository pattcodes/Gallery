const thumbnails = document.querySelectorAll(".thumbnail");
const popup = document.querySelector(".popup__container");
const popupClose = document.querySelector(".btn__close");
const popupImg = document.querySelector(".img__popup");
const arrowLeft = document.querySelector(".prev__img");
const arrowRight = document.querySelector(".next__img");
const btnDownload = document.querySelector(".btn__download");

let currentImg;

const nextImg = () => {
    if(currentImg === thumbnails.length - 1) {
        currentImg = -1;
    }
    currentImg++;
    popupImg.src = thumbnails[currentImg].src;
    btnDownload.href = thumbnails[currentImg].src;

}

const prevImg = () => {
    if(currentImg === 0) {
        currentImg = thumbnails.length -1;
    } else {
        currentImg--;
    }
    popupImg.src = thumbnails[currentImg].src;
    btnDownload.href = thumbnails[currentImg].src;

}


const popupCloseInterior = () => {
    popup.classList.add("fadeOut");
    setTimeout(() => {
        popup.classList.add("hidden");
        popup.classList.remove("fadeOut");
    }, 310) // 300 ms === 0.3s
}

thumbnails.forEach((thumbnails, index) => {
    thumbnails.addEventListener('click', (e) => {
        popup.classList.remove("hidden");
        popupImg.src = e.target.src;
        btnDownload.href = e.target.src;
        currentImg = index;
     })
});

popupClose.addEventListener('click', () => {
    popupCloseInterior();
})

arrowRight.addEventListener('click', () => {
    nextImg();
})

arrowLeft.addEventListener('click', () => {
    prevImg();
})

document.addEventListener('keydown', (e) => {
    if(e.code === "ArrowRight" || e.keycode === 39) {
        nextImg();
    } 
    if(e.code === "ArrowLeft" || e.keycode === 37) {
        prevImg();
    } 
    if(e.code === "Escape" || e.keycode === 27) {
        popupCloseInterior();
    }
    if(e.code === "Space" || e.keycode === 32) {
        popupCloseInterior();
    }
})

document.addEventListener('click', (e) => {
    if(e.target === popup) {
        popupCloseInterior();
    }
})


