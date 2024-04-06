"use strict";
// Generate a date object representing your next birthday and log it to the console.
// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const nextBirthday = getNextBirthday(3, 26); // Example: June 26
console.log("Next birthday on:", nextBirthday.toLocaleDateString());