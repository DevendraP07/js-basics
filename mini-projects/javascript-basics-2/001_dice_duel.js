"use strict";

/*
========================================
Exercise 001 - Dice Duel
========================================

Story
-----
Welcome to Dice Duel!

Two players battle by rolling a six-sided dice.
The player with the higher dice value wins the round.

The game consists of exactly THREE rounds.

Rules
-----
• Each round, both players roll one dice.
• Higher dice value wins the round.
• The winner receives 5 points.
• If both dice values are equal, the round is a draw.
• A draw gives no points to either player.
• After three rounds, the player with the highest score wins.

Example
-------

========== Round 1 ==========

Player 1 rolled: 6
Player 2 rolled: 2

Player 1 wins the round!

Current Score
-------------
Player 1 : 5
Player 2 : 0

...

========== Final Result ==========

Player 1 : 10
Player 2 : 5

🏆 Player 1 Wins!

Requirements
------------
Complete every function below.

Do NOT change:
- Function names
- Function parameters

You may create additional variables inside functions if needed.
Only write code where TODO comments exist.
*/

/**
 * Roll a six-sided dice.
 *
 * Goal
 * ----
 * Return a RANDOM integer between 1 and 6 (inclusive).
 *
 * Examples
 * --------
 * rollDice() -> 1
 * rollDice() -> 4
 * rollDice() -> 6
 *
 * Hint
 * ----
 * Use:
 * - Math.random()
 * - Math.floor()
 */
function rollDice() {
  // TODO

  return 1;
}

/**
 * Award points to the winner.
 *
 * Goal
 * ----
 * Increase the player's current points by 5.
 *
 * Parameters
 * ----------
 * playerPoints
 *      Current score of the player.
 *
 * Returns
 * -------
 * The updated score.
 *
 * Example
 * -------
 * updatePoints(10)
 *
 * Returns:
 * 15
 */
function updatePoints(playerPoints) {
  // TODO

  return 0;
}

/**
 * Move the game to the next round.
 *
 * Goal
 * ----
 * Increase the current round by one.
 *
 * The game starts at Round 1
 * and finishes after Round 3.
 *
 * Example
 * -------
 * goToNextRound(1)
 *
 * Returns:
 * 2
 */
function goToNextRound(currentRound) {
  // TODO

  return 1;
}

/**
 * Decide who won the current round.
 *
 * Goal
 * ----
 * Compare both dice values.
 *
 * If Player 1 rolled a higher value,
 * return 1.
 *
 * If Player 2 rolled a higher value,
 * return 2.
 *
 * If both rolled the same value,
 * return 0.
 *
 * Parameters
 * ----------
 * playerOneDice
 * playerTwoDice
 */
function getRoundWinner(playerOneDice, playerTwoDice) {
  // TODO

  return 0;
}

/**
 * Display the current score.
 *
 * Goal
 * ----
 * Print the score in the format:
 *
 * Current Score
 * -------------
 * Player 1 : X
 * Player 2 : Y
 *
 * Parameters
 * ----------
 * playerOnePoints
 * playerTwoPoints
 */
function printScore(playerOnePoints, playerTwoPoints) {
  // TODO
}

/**
 * Display the final winner.
 *
 * Goal
 * ----
 * Compare both player's points.
 *
 * If Player 1 has more points,
 * print:
 *
 * 🏆 Player 1 Wins!
 *
 * If Player 2 has more points,
 * print:
 *
 * 🏆 Player 2 Wins!
 *
 * If both players have equal points,
 * print:
 *
 * 🤝 It's a Draw!
 */
function announceWinner(playerOnePoints, playerTwoPoints) {
  // TODO
}

/**
 * Game Controller
 *
 * Goal
 * ----
 * This function controls the entire game.
 *
 * Tasks
 * -----
 * 1. Create variables:
 *      - currentRound
 *      - playerOnePoints
 *      - playerTwoPoints
 *
 * 2. Repeat until all three rounds are completed.
 *
 * 3. Every round:
 *      - Roll dice for both players.
 *      - Print both dice values.
 *      - Determine the round winner.
 *      - Update the winner's score.
 *      - Print the updated score.
 *      - Move to the next round.
 *
 * 4. After all rounds,
 *    announce the final winner.
 */
function main() {
  // TODO
}

main();
