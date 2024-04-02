"use strict";
//  Write a function to remove the last element from an array and return the removed element.
let sports = ['Cricket', 'Football', 'Badminton', 'Hockey'];
function removeLastElement(array) {
    return array.pop();
}
console.log(removeLastElement(sports));
console.log(sports);
