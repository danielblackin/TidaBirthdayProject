const reasons = [
    "You make me smile every day.",
    "Your kindness inspires me.",
    "I love how you always listen to me.",
    "Every moment with you is a treasure.",
    "Your laugh is my favorite sound.",
    "You always make everything better.",
    "I love the way your eyes light up when you smile."
];

function generateReason() {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    document.getElementById("reason").innerText = reasons[randomIndex];
}

// Countdown Timer
const birthday = new Date('October 22, 2024').getTime();
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerText = `Time until your birthday: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        countdownElement.innerText = "Happy Birthday! 🎂";
    }
}

setInterval(updateCountdown, 1000);
