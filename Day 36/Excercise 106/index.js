"use strict";
// This function checks if a year is a leap year
function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(leapYear(2020));
console.log(leapYear(1999));
