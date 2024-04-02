"use strict";
//  Write a function that uses the .filter() method to return an array of numbers greater than 10.
let numbers = [10, 20, 30, 4, 5];
function numbersGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10);
}
console.log(numbersGreaterThanTen(numbers));
