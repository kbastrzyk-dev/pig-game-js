# Pig Game

A modern, interactive dice game for two players built with Vanilla JavaScript. This project features a sleek "Glassmorphism" design and real-time DOM manipulation.

## Live Demo
Play the game here: **https://kbastrzyk-dev.github.io/pig-game-js/**

## Game Rules
* **Roll the Dice:** Each turn, a player rolls a die as many times as they wish. 
* **The "1" Rule:** If a player rolls a 1, they lose all points accumulated in that turn, and the turn passes to the next player.
* **Hold Score:** A player can choose to 'Hold', which adds their current turn score to their total score.
* **Winning:** The first player to reach **100 points** wins the game.

## Features
* **Random Dice Generation:** Uses `Math.random` to simulate realistic dice rolls from 1 to 6.
* **State Management:** Tracks active players, scores, and game status internally.
* **Responsive Design:** Smooth transitions (`0.75s`) when switching between active players
* **Game Reset:** A "New Game" button to reset all scores and starting conditions instantly.

## Project Structure
* `index.html` – Game structure.
* `style.css` – Glassmorphism styling and layout.
* `script.js` – Game logic and event listeners.
* `dice-*.png` – Dice face assets (1-6).
* `pig-game-flowchart.jpg` – Logic flow diagram.
