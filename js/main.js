/*----- constants -----*/
// const CARDS = [
// {img: 'img_path', value 'a' matched : flase}
// ]
const CARDS = ['a', 'a'];
const WINNING_SCORE = CARDS.length;
const INITAL_SCORE = 0;
// const CARD_BACK = 

	/*----- state variables -----*/
// this is an array that holds the values of the clicked cards
let cardsMatched;
let score;

	/*----- cached elements  -----*/
// const guessesEl = document.querySelector();
const startButtonEl = document.getElementById('start-button');
// grab the score display element by id and save it to a variable named scoreDisplayEl
const gameBoardEl = document.getElementById('game-board');

	/*----- event listeners -----*/
startButtonEl.addEventListener('click', init);

	/*----- functions -----*/
function init() {
    score = INITAL_SCORE;
    cardsMatched = [];
    startButtonEl.disabled = true;
    render();
    renderCards();
};

function renderCards() {
    CARDS.forEach(card => {
        let cardEl = document.createElement('div');
        cardEl.innerText = card;
        cardEl.classList.add('card-element')
        cardEl.addEventListener('click', handleCardClick);
        gameBoardEl.append(cardEl);
    })
    // create card
    // apend cardEl to game board
};

function handleCardClick() {
// when we click the card push it to the cardsMatched array
// if the length of the cardsMatched arrray is 2
    // check if the cards matched array at index 0 === cardsMatched array at index 1
        //increment score by 1 
// call render function             
}



function render() {
// set the innerText of the scoreDisplayEl to the score variable

};

// img;
// src;
// gameStatus;
// cardShuffle;
// buttons;



// matches;
// cardChoice;
// wrongChoice;
// correctChoice;