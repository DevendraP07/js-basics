"use strict";

/*
========================================
Exercise 011 - Auction Bidding System
========================================

Story
-----
Welcome to Instello Auction House!

A rare antique item is up for auction.

Three bidders are competing to buy it.

The highest valid bid wins the auction.

========================================
Auction Details
========================================

Starting Price

₹1,000

Players

• Bidder 1
• Bidder 2
• Bidder 3

========================================
Rules
========================================

Each bidder gets ONE chance.

Every new bid must be:

• Greater than the current highest bid.

Otherwise the bid is rejected.

Example

Starting Price

₹1000

Bidder 1

₹1200 ✅

Highest Bid

₹1200

Bidder 2

₹1100 ❌

Rejected

Highest Bid

₹1200

Bidder 3

₹1800 ✅

Highest Bid

₹1800

Winner

Bidder 3

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
 * Ask a bidder to place a bid.
 *
 * Goal
 * ----
 * Ask the bidder for a bid amount.
 *
 * Convert the entered value
 * into a Number.
 *
 * Return the entered bid.
 */
function placeBid(bidderName) {
  // TODO
}

/**
 * Validate the bid.
 *
 * Goal
 * ----
 * A bid is valid only if
 * it is greater than the
 * current highest bid.
 *
 * Return:
 *
 * true
 * false
 */
function isValidBid(currentHighestBid, newBid) {
  // TODO

  return false;
}

/**
 * Update the highest bid.
 *
 * Goal
 * ----
 * Return the new highest bid.
 */
function updateHighestBid(newBid) {
  // TODO
}

/**
 * Display the current auction status.
 *
 * Print:
 *
 * Current Highest Bid
 *
 * Current Leader
 */
function printAuctionStatus(highestBid, highestBidder) {
  // TODO
}

/**
 * Display the auction winner.
 *
 * Print:
 *
 * Winner
 *
 * Winning Bid
 */
function announceWinner(highestBid, highestBidder) {
  // TODO
}

/**
 * Main Auction Controller
 *
 * Tasks
 * -----
 *
 * Create:
 *
 * startingPrice = 1000
 *
 * highestBid = startingPrice
 *
 * highestBidder = "None"
 *
 * Ask bids from:
 *
 * Bidder 1
 *
 * Bidder 2
 *
 * Bidder 3
 *
 * For every bid:
 *
 * Validate the bid.
 *
 * If valid:
 *
 * Update:
 *
 * highest bid
 *
 * highest bidder
 *
 * Print auction status.
 *
 * After all bidders,
 * announce the winner.
 */
function main() {
  // TODO
}

main();
