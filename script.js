// Function to create a heart element with random properties
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.width = `${Math.random() * 40 + 20}px`;
    heart.style.height = heart.style.width;
    heart.style.animationDuration = `${Math.random() * 5 + 3}s`;
    document.querySelector('.bg_heart').appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

// Create hearts continuously
setInterval(createHeart, 500);

// Slideshow Functionality
let slideIndex = 0;
const slides = document.getElementsByClassName("slides");

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Initialize the first slide
showSlide(slideIndex);

// Reasons to love function
const reasons = [
    "You make me smile every day.",
    "You always support me.",
    "Your laugh is contagious.",
    "You inspire me to be a better person.",
    "Your kindness shines in everything you do."
];

function generateReason() {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    document.getElementById("reason").innerText = reasons[randomIndex];
}
