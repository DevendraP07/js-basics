"use strict";

/*
========================================
Exercise 004 - Space Mission Control
========================================

Story
-----
Congratulations Commander!

You have been selected to pilot the first mission to Mars.

Your spaceship starts with:

- Fuel: 100%
- Hull Integrity: 100%
- Mission Progress: 0%

Your goal is to successfully reach Mars by completing
100% mission progress.

----------------------------------------
Mission Menu
----------------------------------------

1. Travel
2. Repair Ship
3. Refuel
4. Check Status
5. Abort Mission

----------------------------------------
Rules
----------------------------------------

Travel
-------
• Consumes 20% fuel.
• Reduces hull integrity by 10%.
• Increases mission progress by 25%.

Repair Ship
-----------
• Restores 20% hull integrity.
• Hull integrity cannot exceed 100%.

Refuel
------
• Restores 30% fuel.
• Fuel cannot exceed 100%.

Mission Failure
---------------
The mission immediately fails if:
• Fuel reaches 0%
OR
• Hull Integrity reaches 0%

Mission Success
---------------
The mission succeeds when:
• Mission Progress reaches 100%

----------------------------------------
Example
----------------------------------------

====== Mission Control ======

Fuel     : 80%
Hull     : 90%
Progress : 25%

Choose an option:
1

Travelling...

Mission Progress +25%

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
 * Travel to the next destination.
 *
 * Goal
 * ----
 * Update:
 * - Fuel
 * - Hull Integrity
 * - Mission Progress
 *
 * Travel should only happen if
 * there is enough fuel and the ship
 * is still operational.
 */
function travel(fuel, hullIntegrity, missionProgress) {
  // TODO
}

/**
 * Repair the spaceship.
 *
 * Goal
 * ----
 * Restore 20% hull integrity.
 *
 * Hull integrity must never
 * exceed 100%.
 */
function repairShip(hullIntegrity) {
  // TODO

  return hullIntegrity;
}

/**
 * Refuel the spaceship.
 *
 * Goal
 * ----
 * Increase fuel by 30%.
 *
 * Fuel must never exceed 100%.
 */
function refuel(fuel) {
  // TODO

  return fuel;
}

/**
 * Display the current mission status.
 *
 * Goal
 * ----
 * Print:
 *
 * Fuel
 * Hull Integrity
 * Mission Progress
 */
function printStatus(fuel, hullIntegrity, missionProgress) {
  // TODO
}

/**
 * Determine whether the mission
 * has ended.
 *
 * Return:
 * true  -> Mission continues
 * false -> Mission finished
 *
 * The mission finishes when:
 * - Fuel becomes 0
 * - Hull becomes 0
 * - Progress reaches 100
 */
function missionRunning(fuel, hullIntegrity, missionProgress) {
  // TODO

  return true;
}

/**
 * Display the final mission result.
 *
 * Goal
 * ----
 * If Progress >= 100
 *      Mission Successful
 *
 * Else
 *      Mission Failed
 */
function announceMissionResult(missionProgress) {
  // TODO
}

/**
 * Main Mission Controller
 *
 * Tasks
 * -----
 *
 * 1. Create:
 *      fuel = 100
 *      hullIntegrity = 100
 *      missionProgress = 0
 *
 * 2. Repeatedly display the menu.
 *
 * 3. Read the user's choice.
 *
 * 4. Use a switch statement to
 *    perform the selected action.
 *
 * 5. Continue until:
 *      - Mission succeeds
 *      - Mission fails
 *      - User aborts
 *
 * 6. Display the final result.
 */
function main() {
  // TODO
}

main();
