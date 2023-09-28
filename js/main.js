const CARDS = [
    { img: 'img_path', value: 'Yoda', matched: false },
    { img: 'img_path', value: 'Yoda', matched: false },
    { img: 'img_path', value: 'Luke', matched: false },
    { img: 'img_path', value: 'Luke', matched: false },
    { img: 'img_path', value: 'Darth', matched: false },
    { img: 'img_path', value: 'Darth', matched: false },
];

const WINNING_SCORE = CARDS.length / 2;
const INITIAL_SCORE = 0;

let cardsMatched;
let score;

const startButtonEl = document.getElementById('start-button');
const gameBoardEl = document.getElementById('game-board');
const scoreDisplayEl = document.getElementById('score-display');
const messageEl = document.getElementById('message');

startButtonEl.addEventListener('click', init);

function init() {
    score = INITIAL_SCORE;
    cardsMatched = [];
    startButtonEl.disabled = true;
    render();
    renderCards();
    renderButtons();
}

function renderCards() {
    CARDS.forEach(card => {
        console.log(card);
        let cardEl = document.createElement('div');
        cardEl.innerText = card.value;
        cardEl.classList.add('card-element');
        cardEl.addEventListener('click', handleCardClick);
        gameBoardEl.append(cardEl);
    });
}

function handleCardClick() {
    this.style.backgroundColor = 'greenyellow';
    cardsMatched.push(this.innerText);
    if (cardsMatched.length === 2) {
        if (cardsMatched[0] === cardsMatched[1]) {
            score++;
        } else {
            setTimeout(() => {
                this.style.backgroundColor = 'red';
            }, 1000);
        }
        render();
        cardsMatched = [];
        checkWin();
    }
}

function render() {
    scoreDisplayEl.innerText = `Score: ${score}`;
}

function checkWin() {
    if (score === WINNING_SCORE) {
        messageEl.innerText = 'Congrats! You won!';
    } else {
        // Handle other conditions or messages if needed
    }
}