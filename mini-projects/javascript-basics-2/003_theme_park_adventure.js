"use strict";

/*
========================================
Exercise 003 - Theme Park Adventure
========================================

Story
-----
Welcome to Adventure Land!

You have just arrived at the biggest theme park in the city.

You start with:
- $100 Budget
- 100 Energy
- 0 Rides Completed

Your goal is to enjoy as many rides as possible before
you run out of money, run out of energy, or decide to leave.

----------------------------------------
Ride Prices
----------------------------------------

Roller Coaster
Cost: $30
Energy: -25

Ferris Wheel
Cost: $15
Energy: -10

Haunted House
Cost: $20
Energy: -15

----------------------------------------
Menu
----------------------------------------

1. Roller Coaster
2. Ferris Wheel
3. Haunted House
4. Eat Food
5. View Status
6. Leave Park

----------------------------------------
Rules
----------------------------------------

• Every ride costs money.
• Every ride consumes energy.
• Eating food costs $10 and restores 20 energy.
• Energy cannot exceed 100.
• A ride cannot be taken if:
    - You don't have enough money.
    - You don't have enough energy.
• The game ends when:
    - The player chooses Leave Park.
    - Money becomes 0.
    - Energy becomes 0.

----------------------------------------
Example
----------------------------------------

====== Adventure Land ======

Money : $70
Energy: 75
Rides : 1

Choose an option:
2

You enjoyed the Ferris Wheel!

Remaining Money : $55
Remaining Energy: 65

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
 * Ride the Roller Coaster.
 *
 * Goal
 * ----
 * Deduct:
 * - $30
 * - 25 Energy
 *
 * Increase completed rides by one.
 *
 * If the player cannot afford the ride
 * or doesn't have enough energy,
 * display an appropriate message.
 */
function rideRollerCoaster(money, energy, ridesCompleted) {
  // TODO
}

/**
 * Ride the Ferris Wheel.
 *
 * Goal
 * ----
 * Deduct:
 * - $15
 * - 10 Energy
 *
 * Increase completed rides.
 */
function rideFerrisWheel(money, energy, ridesCompleted) {
  // TODO
}

/**
 * Ride the Haunted House.
 *
 * Goal
 * ----
 * Deduct:
 * - $20
 * - 15 Energy
 *
 * Increase completed rides.
 */
function rideHauntedHouse(money, energy, ridesCompleted) {
  // TODO
}

/**
 * Eat food.
 *
 * Goal
 * ----
 * Deduct $10.
 *
 * Restore 20 Energy.
 *
 * Energy should never exceed 100.
 */
function eatFood(money, energy) {
  // TODO
}

/**
 * Print the current player status.
 *
 * Display:
 *
 * Money
 * Energy
 * Completed Rides
 */
function printStatus(money, energy, ridesCompleted) {
  // TODO
}

/**
 * Check whether the game should continue.
 *
 * Return true if:
 * - Money > 0
 * - Energy > 0
 *
 * Otherwise return false.
 */
function canContinue(money, energy) {
  // TODO

  return true;
}

/**
 * Main Game Controller
 *
 * Tasks
 * -----
 *
 * 1. Create:
 *      money = 100
 *      energy = 100
 *      ridesCompleted = 0
 *
 * 2. Display the menu repeatedly.
 *
 * 3. Read the player's choice.
 *
 * 4. Use a switch statement to
 *    perform the selected action.
 *
 * 5. Continue until:
 *      - Player leaves
 *      - Money becomes 0
 *      - Energy becomes 0
 *
 * 6. Print:
 *      Final Money
 *      Final Energy
 *      Total Rides Completed
 */
function main() {
  // TODO
}

main();
