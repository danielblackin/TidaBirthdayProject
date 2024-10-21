// Game Setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 300;

let avatar = {
    x: 50,
    y: canvas.height - 30,
    width: 30,
    height: 30,
    dx: 0,
    dy: 0,
    gravity: 0.5,
    jumpPower: -10,
    isJumping: false
};

let obstacles = [
    { x: 150, y: canvas.height - 50, width: 60, height: 20 },
    { x: 300, y: canvas.height - 80, width: 80, height: 20 },
    { x: 500, y: canvas.height - 100, width: 50, height: 20 }
];

let messages = [
    "You're amazing!",
    "You're the best!",
    "Keep going, love!"
];

let currentMessage = 0;
let score = 0;

// Game Controls
document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") avatar.dx = 5;
    if (event.code === "ArrowLeft") avatar.dx = -5;
    if (event.code === "Space" && !avatar.isJumping) {
        avatar.dy = avatar.jumpPower;
        avatar.isJumping = true;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.code === "ArrowRight" || event.code === "ArrowLeft") avatar.dx = 0;
});

// Game Functions
function drawAvatar() {
    ctx.fillStyle = "#ff66a1";
    ctx.fillRect(avatar.x, avatar.y, avatar.width, avatar.height);
}

function drawObstacles() {
    ctx.fillStyle = "#333";
    obstacles.forEach(obstacle => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

function updateAvatar() {
    avatar.x += avatar.dx;
    avatar.y += avatar.dy;

    if (avatar.y + avatar.height < canvas.height) {
        avatar.dy += avatar.gravity;
    } else {
        avatar.dy = 0;
        avatar.isJumping = false;
        avatar.y = canvas.height - avatar.height;
    }

    if (avatar.x < 0) avatar.x = 0;
    if (avatar.x + avatar.width > canvas.width) avatar.x = canvas.width - avatar.width;
}

function checkCollision() {
    obstacles.forEach((obstacle, index) => {
        if (avatar.x + avatar.width > obstacle.x &&
            avatar.x < obstacle.x + obstacle.width &&
            avatar.y + avatar.height > obstacle.y &&
            avatar.y < obstacle.y + obstacle.height) {
            // Collision detected
            score++;
            showNextMessage();
            obstacles.splice(index, 1);
        }
    });
}

function showNextMessage() {
    const messageElement = document.getElementById("gameMessage");
    if (currentMessage < messages.length) {
        messageElement.textContent = messages[currentMessage];
        currentMessage++;
    } else {
        messageElement.textContent = "You're the best! Game complete!";
    }
}

// Game Loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawAvatar();
    drawObstacles();
    updateAvatar();
    checkCollision();

    requestAnimationFrame(gameLoop);
}

gameLoop();
