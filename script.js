let slideIndex = 0;

function moveSlide(direction) {
    const carousel = document.getElementById('carousel');
    const slides = carousel.getElementsByTagName('img');
    const totalSlides = slides.length;

    slideIndex = (slideIndex + direction + totalSlides) % totalSlides;

    const offset = -slideIndex * carousel.parentElement.clientWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

// Floating Hearts Effect
function createHearts(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 3 + 5}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        document.querySelector(".bg_heart").appendChild(heart);
    }
}
createHearts(20);

// Reasons array for "Why I Love You" button
const reasons = [
    "You make me smile every day.",
    "You always support me.",
    "Your laugh is contagious.",
    "You inspire me to be a better person.",
    "Your kindness shines in everything you do.",
    "You have the best sense of humor.",
    "You make life more beautiful.",
    "You’re my favorite adventure."
];

function generateReason() {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    document.getElementById("reason").innerText = reasons[randomIndex];
}
