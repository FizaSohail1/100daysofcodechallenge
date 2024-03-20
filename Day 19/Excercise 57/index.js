// Find the Average Grade: Given a list of grades, calculate the average grade.
// Explain & TIP: We can sum up all the grades and divide by the number of grades to find the average, giving us an idea of how well someone did overall.
var grades = [67, 87, 94, 99, 87];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade);
