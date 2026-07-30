"use strict";

/*
Exercise 005 - Discount Checker

Topics Covered
--------------
- Comparison Operators
- Logical Operators
- if / else

Goal
----
Check whether a customer receives a discount.

Requirements
------------
1. Ask the purchase amount.
2. Convert it into a Number.
3. If the amount is greater than or equal to 1000
      Print "Discount Applied"
   Otherwise
      Print "No Discount"

Example
-------
Input:
1500

Output:
Discount Applied
*/

const amount = Number(prompt("Enter your purchase amount:")); // "2000" -> 2000

if (isNaN(amount)) {
  alert("Invalid amount");
} else {
  const discount = 0.1;

  const gst = 0.18;

  const hasDiscountApplied = amount >= 1000 ? true : false;

  const isTaxPayer = confirm("Are you a tax payer citizen?");

  const discountAmount = hasDiscountApplied ? amount * discount : 0;

  const totalAmount = amount - discountAmount;

  const taxAmount = isTaxPayer ? totalAmount * gst : 0;

  const netTotalAmount = isTaxPayer ? totalAmount + taxAmount : totalAmount;

  alert(`
    Your amount: ${amount}\n
    Your discount: ${discountAmount}\n 
    Your TotalAmount is = ${totalAmount}\n
    Tax = ${taxAmount}\n
    Your net total amount = ${netTotalAmount}\n
`);
}
