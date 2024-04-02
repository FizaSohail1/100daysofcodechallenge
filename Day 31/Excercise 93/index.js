"use strict";
// Find the index of "Banana" in an array of fruits and replace it with "Mango".
let fruits = ["Apple", "Banana", "Orange"];
// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits) {
    let index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
replaceBananaWithMango(fruits);
console.log(fruits);
