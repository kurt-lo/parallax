//___CAROUSEL____
const carouselBtn = document.querySelector('.carousel-btn');

const imageSets = [
    ["./assets/1.jpg", "./assets/2.jpg", "./assets/3.jpg"],
    ["./assets/4.jpg", "./assets/5.jpg", "./assets/6.jpg"],
    ["./assets/7.jpg", "./assets/8.jpg", "./assets/9.jpg"]
];

let currentState = 0;

function changeImages() {
    const currentImages = imageSets[currentState];

    gsap.to(".caro-img-2", { opacity: 0, transform: "translateY(250px)", duration: 0.5 });
    gsap.to(".caro-img-1", { opacity: 0, transform: "translateY(250px)", duration: 0.5 });
    gsap.to(".caro-img-3", { opacity: 0, transform: "translateY(250px)", duration: 0.5, onComplete: () => {

        document.querySelector('.caro-img-1').src = currentImages[0];
        document.querySelector('.caro-img-2').src = currentImages[1];
        document.querySelector('.caro-img-3').src = currentImages[2];

        gsap.to(".caro-img-1", { opacity: 1, transform: "translateY(0)", duration: 1 });
        gsap.to(".caro-img-2", { opacity: 1, transform: "translateY(0)", duration: 1 });
        gsap.to(".caro-img-3", { opacity: 1, transform: "translateY(0)", duration: 1 });
    }});
}

carouselBtn.addEventListener('click', function() {
    currentState = (currentState + 1) % imageSets.length;
    
    changeImages();
});

changeImages();

//____MENU___
const menuBtn = document.getElementById('menu');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});