"use strict";

/*
========================================
Exercise 009 - Business Tycoon
========================================

Story
-----
You have started a small manufacturing business.

Your goal is to make as much profit as possible
within 5 business days.

Every day:

• Raw material prices change.
• Vendors offer different selling prices.
• You decide how many products to manufacture.

Can you make a profit?

========================================
Starting Resources
========================================

Cash: ₹10,000

Business Days: 5

========================================
Daily Flow
========================================

Every business day:

1. Raw material price is generated randomly.

Example:

Raw Material Price:
₹120 per unit

2. Vendor buying price is generated randomly.

Example:

Vendor Buying Price:
₹180 per product

3. Ask the player:

How many products do you want to manufacture?

4. Manufacturing Rules

One product requires:

1 Raw Material

Manufacturing Cost:
₹30 per product

5. Calculate

Material Cost

Manufacturing Cost

Total Cost

Revenue

Profit / Loss

6. Update available cash.

========================================
Price Range
========================================

Raw Material Price

₹80 - ₹150

Vendor Buying Price

₹120 - ₹220

========================================
Rules
========================================

• The player cannot manufacture products
  if there isn't enough cash.

• Cash should be updated after every day.

• If cash becomes 0,
  the business closes immediately.

• After Day 5,
  display the final report.

========================================
Final Report
========================================

Business Summary

Total Revenue

Total Expenses

Net Profit

Final Cash

Business Result

Profitable

OR

Loss

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
 * Generate today's raw material price.
 *
 * Goal
 * ----
 * Return a random price
 * between ₹80 and ₹150.
 */
function generateMaterialPrice() {
  // TODO
}

/**
 * Generate today's vendor buying price.
 *
 * Goal
 * ----
 * Return a random price
 * between ₹120 and ₹220.
 */
function generateVendorPrice() {
  // TODO
}

/**
 * Calculate manufacturing cost.
 *
 * Goal
 * ----
 * Manufacturing cost is:
 *
 * quantity × ₹30
 *
 * Return the total manufacturing cost.
 */
function calculateManufacturingCost(quantity) {
  // TODO
}

/**
 * Calculate total material cost.
 *
 * Goal
 * ----
 * Material Cost =
 *
 * quantity × material price
 */
function calculateMaterialCost(quantity, materialPrice) {
  // TODO
}

/**
 * Calculate today's revenue.
 *
 * Goal
 * ----
 * Revenue =
 *
 * quantity × vendor price
 */
function calculateRevenue(quantity, vendorPrice) {
  // TODO
}

/**
 * Calculate today's profit.
 *
 * Goal
 * ----
 * Profit =
 *
 * Revenue
 * -
 * Material Cost
 * -
 * Manufacturing Cost
 */
function calculateProfit(revenue, materialCost, manufacturingCost) {
  // TODO
}

/**
 * Display today's business report.
 *
 * Print:
 *
 * Revenue
 * Expenses
 * Profit
 * Remaining Cash
 */
function printDailyReport(revenue, expenses, profit, cash) {
  // TODO
}

/**
 * Display the final business summary.
 *
 * Print:
 *
 * Final Cash
 *
 * Total Revenue
 *
 * Total Expenses
 *
 * Net Profit
 *
 * Business Result
 */
function printBusinessSummary(
  finalCash,
  totalRevenue,
  totalExpenses,
  netProfit,
) {
  // TODO
}

/**
 * Main Business Controller
 *
 * Tasks
 * -----
 *
 * Create:
 *
 * cash = 10000
 *
 * currentDay = 1
 *
 * totalRevenue = 0
 *
 * totalExpenses = 0
 *
 * Repeat for 5 business days.
 *
 * Every day:
 *
 * Generate today's prices.
 *
 * Ask how many products
 * should be manufactured.
 *
 * Calculate:
 *
 * Material Cost
 *
 * Manufacturing Cost
 *
 * Revenue
 *
 * Profit
 *
 * Update cash.
 *
 * Print the daily report.
 *
 * After Day 5,
 * print the final summary.
 */
function main() {
  // TODO
}

main();
