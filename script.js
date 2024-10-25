document.addEventListener("DOMContentLoaded", () => {
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

    showSlide(slideIndex);

    const reasons = [
        "You make me smile every day.",
        "You always support mes.",
        "Your laugh is contagious.",
        "You inspire me to be a better person.",
        "Your kindness shines in everything you do."
    ];

    window.generateReason = function() {
        const randomIndex = Math.floor(Math.random() * reasons.length);
        document.getElementById("reason").innerText = reasons[randomIndex];
    };

    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
});
