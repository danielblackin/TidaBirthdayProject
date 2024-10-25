const cardsArray = [
    { name: '💖', id: 1 },
    { name: '🎂', id: 2 },
    { name: '🎁', id: 3 },
    { name: '🍓', id: 4 },
    { name: '💖', id: 1 },
    { name: '🎂', id: 2 },
    { name: '🎁', id: 3 },
    { name: '🍓', id: 4 },
];

let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;

const gameBoard = document.getElementById('game-board');

// Shuffle cards
function shuffle(array) {
    array.sort(() => 0.5 - Math.random());
}

// Create the game board
function createBoard() {
    shuffle(cardsArray);
    cardsArray.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = item.id;
        card.innerText = '?';
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}

// Flip card
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');
    this.innerText = cardsArray.find(card => card.id === parseInt(this.dataset.id)).name;

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

// Check if cards match
function checkForMatch() {
    let isMatch = firstCard.dataset.id === secondCard.dataset.id;

    isMatch ? disableCards() : unflipCards();
}

// Disable matched cards
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
    checkForWin();
}

// Unflip unmatched cards
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.innerText = '?';
        secondCard.innerText = '?';
        resetBoard();
    }, 1000);
}

// Reset board
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Check if all cards are matched
function checkForWin() {
    if (document.querySelectorAll('.flipped').length === cardsArray.length) {
        setTimeout(() => {
            window.location.href = "index.html"; // Redirect to main page
        }, 1000);
    }
}

// Initialize game
createBoard();