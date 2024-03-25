"use strict";
// creating a function that divides two numbers and finds the quotient and remainder
function divideAndRemainder(num1, num2) {
    // Calculates the quotient and remainder
    let quotient = Math.floor(num1 / num2);
    let remainder = num1 % num2;
    return { quotient, remainder };
}
console.log(divideAndRemainder(10, 3));
