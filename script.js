'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); // Works only for ID
const current0El = document.getElementById('current--0'); // for 1st player
const current1El = document.getElementById('current--1'); // for 2nd player
const diceEl = document.querySelector('.dice');
//Buttons Elements
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// define outside the function
let scores, activePlayer, playing, currentScore;

// \/ Init conditions \/
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
// execute this code for the start of the game
init();

const switchPlayer = function () {
  // there is no parameter in () bcs there is no changes just using the same twice (or even more if u want to)
  document.getElementById(`current--${activePlayer}`).textContent = 0; // current score 0 b4 switching the player
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // if activePlayer = 0, set 1, else set 0
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate random dice roll
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    // console.log(diceRoll); // it Works
    // Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;
    // Check for rolled 1: If true, switch players
    if (diceRoll !== 1) {
      // add dice to the current score
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active player
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Check if players score is >= 100 if yes finish the game
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// Resetting game
btnNew.addEventListener('click', init);
