//  Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function totalAverage() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (one, two) { return one + two; }, 0);
    return total / scores.length;
}
console.log(totalAverage(34, 35, 66));
