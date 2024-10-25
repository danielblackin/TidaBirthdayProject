document.addEventListener("DOMContentLoaded", () => {
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

    // Function to generate a random reason
    window.generateReason = function() {
        const randomIndex = Math.floor(Math.random() * reasons.length);
        document.getElementById("reason").innerText = reasons[randomIndex];
    };

    // Floating hearts effect
    createHearts(20);
});

function openLightbox(image) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = image.src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Function to create floating hearts
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
