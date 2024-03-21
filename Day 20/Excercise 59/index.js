// Add a special number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function add(numToAdd) {
    return function (number) {
        return number + numToAdd;
    };
}
;
var addtwo = add(5);
console.log(addtwo(2));
