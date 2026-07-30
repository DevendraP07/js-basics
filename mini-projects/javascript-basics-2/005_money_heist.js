"use strict";

/*
========================================
Exercise 005 - Money Heist
========================================

Story
-----
You are a master thief attempting to rob the most secure
bank in the city.

You begin with:

- Health: 100
- Money Stolen: $0
- Lockpicks: 3

Your goal is to steal at least $1000 and escape safely.

----------------------------------------
Menu
----------------------------------------

1. Crack Vault
2. Search Office
3. Rest
4. View Status
5. Escape

----------------------------------------
Rules
----------------------------------------

Crack Vault
-----------
• Requires 1 Lockpick.
• Randomly steal:
    - $100
    - $200
    - $500
• If no lockpicks remain,
  the vault cannot be opened.

Search Office
-------------
Randomly:
• Find 1 Lockpick
OR
• Lose 20 Health after getting caught.

Rest
----
Restore 15 Health.

Health must never exceed 100.

Escape
------
Leave the bank immediately.

----------------------------------------
Mission Success
----------------------------------------

You succeed if:
• You escape with at least $1000.

Mission Failure
---------------

You fail if:
• Health reaches 0.
• You escape with less than $1000.

========================================
Requirements
========================================

Complete every function below.

Do NOT change:
- Function names
- Function parameters

Only write code where TODO comments exist.
*/

/**
 * Crack the vault.
 *
 * Goal
 * ----
 * Consume one lockpick.
 *
 * Randomly award:
 * - $100
 * - $200
 * - $500
 *
 * If there are no lockpicks,
 * display an appropriate message.
 */
function crackVault(lockpicks, moneyStolen) {
  // TODO
}

/**
 * Search the manager's office.
 *
 * Goal
 * ----
 * Randomly:
 *
 * - Find one lockpick
 * OR
 * - Lose 20 health
 */
function searchOffice(lockpicks, health) {
  // TODO
}

/**
 * Rest.
 *
 * Goal
 * ----
 * Restore 15 Health.
 *
 * Health cannot exceed 100.
 */
function rest(health) {
  // TODO

  return health;
}

/**
 * Print the player's status.
 *
 * Display:
 *
 * Health
 * Money Stolen
 * Lockpicks
 */
function printStatus(health, moneyStolen, lockpicks) {
  // TODO
}

/**
 * Check whether the game
 * should continue.
 *
 * Return:
 * true
 * false
 *
 * The game ends when:
 *
 * - Health reaches 0
 * - Player chooses Escape
 */
function canContinue(health) {
  // TODO

  return true;
}

/**
 * Display the final result.
 *
 * If money stolen >= $1000
 *
 * Print:
 * SUCCESS!
 *
 * Otherwise
 *
 * Print:
 * FAILED!
 */
function announceResult(moneyStolen) {
  // TODO
}

/**
 * Main Game Controller
 *
 * Tasks
 * -----
 *
 * 1.
 * Create:
 *
 * health = 100
 * moneyStolen = 0
 * lockpicks = 3
 *
 * 2.
 * Display the menu repeatedly.
 *
 * 3.
 * Read the player's choice.
 *
 * 4.
 * Use switch to execute
 * the selected action.
 *
 * 5.
 * Continue until:
 * - Health reaches 0
 * - Player escapes
 *
 * 6.
 * Display the final result.
 */
function main() {
  // TODO
}

main();
