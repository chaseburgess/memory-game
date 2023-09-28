// *----- constants -----*/
const CARDS = [
{img: 'img_path', value: 'Yoda', matched : false},
{img: 'img_path', value: 'Yoda', matched : false},
{img: 'img_path', value: 'Luke', matched : false},
{img: 'img_path', value: 'Luke', matched : false},
{img: 'img_path', value: 'Darth', matched : false},
{img: 'img_path', value: 'Darth', matched : false},
]
// {img: 'img_path', value: 'Obi-Wan', matched : false},
// {img: 'img_path', value: 'Obi-Wan', matched : false},
// {img: 'img_path', value: 'Palpatine', matched : false},
// {img: 'img_path', value: 'Palpatine', matched : false},
// {img: 'img_path', value: 'R2D2', matched : false},
// {img: 'img_path', value: 'R2D2', matched : false},

// const CARDS = ['a', 'a'];
const WINNING_SCORE = CARDS.length / 2;
const INITAL_SCORE = 0;
// const MATCH_DISPLAY = img: '';
/*----- state variables -----*/
// this is an array that holds the values of the clicked cards
let cardsMatched;
let score;

	/*----- cached elements  -----*/
// const scoreDisplayEl = document.querySelector();
const startButtonEl = document.getElementById('start-button');
// grab the score display element by id and save it to a variable named scoreDisplayEl
const gameBoardEl = document.getElementById('game-board');
const scoreDisplayEl = document.getElementById('score-display');
const messageEl = document.getElementById('message');

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
        console.log(card);
        let cardEl = document.createElement('div');
        cardEl.innerText = card.value;
        cardEl.classList.add('card-element')
        cardEl.addEventListener('click', handleCardClick);
        gameBoardEl.append(cardEl);
    })
    // create card
    // apend cardEl to game board
};

// function handleCardClick() {
// //change background color style of the clicked element (in dom element in js)
// console.log(this);
//     cardsMatched.push(this.innerText); 
//     if (cardsMatched.length === 2) {
//       if (cardsMatched[0] === cardsMatched[1]) {
//         score++;
//       }
//     //   else statment needed here if they dont match remove background styling
//       render();
//         cardsMatched = [];
//     }
// }

function handleCardClick() {
  // Change the background color style of the clicked element
  this.style.backgroundColor = 'greenyellow';

  // Add the inner text of the clicked card to the 'cardsMatched' array
  cardsMatched.push(this.innerText); 

  if (cardsMatched.length === 2) {
    if (cardsMatched[0] === cardsMatched[1]) {
      score++;
    } else {
      // Cards do not match, remove background styling
      setTimeout(() => {
        this.style.backgroundColor = 'red'; // Reset to default background color
        // You can add additional logic here if needed
      }, 1000); // Change the timeout value as needed

      // You may want to do something else when cards don't match
    }
    
    // Call the 'render()' function to update the game display
    render();
    cardsMatched = [];
    checkWin();
  }
}


function render() {
    scoreDisplayEl.innerText = `Score: ${score}`;
};

//function that checks for wins
//if user has won, else lost
function checkWin() {
    if(score === WINNING_SCORE) {
        messageEl.innerText = "Congrats! You won!";
    }
}

//repay button? 