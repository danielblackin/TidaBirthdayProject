// Array to store image URLs for easy navigation
const imageUrls = [
    "https://raw.githubusercontent.com/danielblackin/TidaBirthdayProject/main/image1.jpg",
    "https://raw.githubusercontent.com/danielblackin/TidaBirthdayProject/main/image2.jpg",
    "https://raw.githubusercontent.com/danielblackin/TidaBirthdayProject/main/image3.jpg",
    "https://raw.githubusercontent.com/danielblackin/TidaBirthdayProject/main/image4.jpg",
    "https://raw.githubusercontent.com/danielblackin/TidaBirthdayProject/main/image5.jpg",
    "https://raw.githubusercontent.com/danielblackin/TidaBirthdayProject/main/image6.jpg",
    "https://raw.githubusercontent.com/danielblackin/TidaBirthdayProject/main/image7.jpg",
    "https://raw.githubusercontent.com/danielblackin/TidaBirthdayProject/main/image8.jpg",
    "https://raw.githubusercontent.com/danielblackin/TidaBirthdayProject/main/image9.jpg",
    "https://raw.githubusercontent.com/danielblackin/TidaBirthdayProject/main/image10.jpg",
    "https://raw.githubusercontent.com/danielblackin/TidaBirthdayProject/main/image11.jpg",
    "https://raw.githubusercontent.com/danielblackin/TidaBirthdayProject/main/image12.jpg",
    "https://raw.githubusercontent.com/danielblackin/TidaBirthdayProject/main/image13.jpg",
    "https://raw.githubusercontent.com/danielblackin/TidaBirthdayProject/main/image14.jpg"
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = imageUrls[currentIndex];
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    document.getElementById("lightbox-img").src = imageUrls[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    document.getElementById("lightbox-img").src = imageUrls[currentIndex];
}

// Floating hearts effect
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
