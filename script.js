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
    "You are sooooo sweet 😍",
    "You are always there for me 🤗",
    "You always make me smile and laugh :)",
    "You make me into a better person everyday I always want to better myself for you",
    "You're so selfless you always want to help your friends",
    "I think you are so cute (just a bonus)",
    "I have so much fun hanging out with you",
    "You always come take care of me when im sick 🤢"
];

function generateReason() {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    document.getElementById("reason").innerText = reasons[randomIndex];
}
