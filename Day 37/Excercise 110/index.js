"use strict";
// Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function Grades(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(Grades(75));
console.log(Grades(55));
console.log(Grades(84));
console.log(Grades(98));
