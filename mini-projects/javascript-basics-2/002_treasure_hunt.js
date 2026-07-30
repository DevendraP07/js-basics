"use strict";

/*
========================================
Exercise 002 - Treasure Hunt
========================================

Story
-----
A legendary treasure is hidden somewhere on a mysterious island.

You begin your adventure with:
- 100 Health
- 0 Gold
- 3 Maps

Your goal is to collect as much gold as possible before
you decide to leave the island or run out of health.

Rules
-----
• The game continues until the player chooses Exit or Health reaches 0.
• Every action has consequences.
• Digging may reward gold or reduce health.
• Exploring may discover treasure or nothing.
• Resting restores health.
• Maps are limited. Once all maps are used, you cannot explore anymore.

Menu
----

====== Treasure Hunt ======

1. Explore Area
2. Dig for Treasure
3. Rest
4. View Status
5. Exit

Example
-------

====== Treasure Hunt ======

Health : 90
Gold   : 35
Maps   : 2

Choose an option:
1

You discovered a treasure chest!

+20 Gold

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
 * Explore a new area.
 *
 * Goal
 * ----
 * Exploring consumes ONE map.
 *
 * If the player has no maps left,
 * display an appropriate message.
 *
 * Otherwise,
 * randomly decide whether the player:
 * - Finds treasure
 * - Finds nothing
 *
 * Return the updated number of maps.
 */
function exploreArea(mapsRemaining) {
  // TODO

  return mapsRemaining;
}

/**
 * Dig for treasure.
 *
 * Goal
 * ----
 * Randomly determine what happens.
 *
 * Possible outcomes:
 * - Gain 20 gold
 * - Gain 50 gold
 * - Lose 15 health
 *
 * Return both updated values.
 *
 * Hint:
 * You may return an object later in the course,
 * but for now you may choose another simple approach.
 */
function digForTreasure(gold, health) {
  // TODO

  return {
    gold,
    health,
  };
}

/**
 * Rest and recover.
 *
 * Goal
 * ----
 * Restore 20 health.
 *
 * Health should never exceed 100.
 *
 * Return the updated health.
 */
function rest(health) {
  // TODO

  return health;
}

/**
 * Print the player's current status.
 *
 * Goal
 * ----
 * Display:
 *
 * Health
 * Gold
 * Remaining Maps
 */
function printStatus(health, gold, mapsRemaining) {
  // TODO
}

/**
 * Determine whether the game should continue.
 *
 * Goal
 * ----
 * If the player's health reaches 0,
 * the adventure ends.
 *
 * Return:
 * true  -> Continue playing
 * false -> End the game
 */
function canContinue(health) {
  // TODO

  return true;
}

/**
 * Main Game Loop
 *
 * Goal
 * ----
 * Control the entire game.
 *
 * Tasks
 * -----
 * 1. Initialize:
 *    - Health = 100
 *    - Gold = 0
 *    - Maps = 3
 *
 * 2. Repeatedly display the menu.
 *
 * 3. Read the user's choice.
 *
 * 4. Use a switch statement to perform
 *    the selected action.
 *
 * 5. Continue until:
 *    - Health becomes 0
 *    - User chooses Exit
 *
 * 6. Print the final amount of gold collected.
 */
function main() {
  // TODO
}

main();
