// Carousel Scrolling
let currentPosition = 0;
const carouselImages = document.getElementById("carousel-images");

function scrollCarousel(direction) {
    const imageWidth = 160; // Image width + margin
    currentPosition += direction * imageWidth;
    if (currentPosition < 0) currentPosition = 0;
    if (currentPosition > carouselImages.scrollWidth - carouselImages.clientWidth) {
        currentPosition = carouselImages.scrollWidth - carouselImages.clientWidth;
    }
    carouselImages.scrollTo({
        left: currentPosition,
        behavior: "smooth"
    });
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
