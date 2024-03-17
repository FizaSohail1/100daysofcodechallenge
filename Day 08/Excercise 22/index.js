// Excercise 22:Intentional Error..
// creating a function of Fruites:
// Define a Fruit interface
function createfruits(name, color, taste) {
    return {
        name: name,
        color: color,
        taste: taste
    };
}
// create an Array of vegetabels  
var fruits = [
    createfruits("Mango", "Yellow", "Sweet"),
    createfruits("Pomegrnate", "Red", "Sour"),
    createfruits("Orange", "Orange", "Citrusy"),
];
// access an invalid index
var invalidindex = 5; // there are only 3 elements in an array, so this will cause an array.
console.log("Fruites in index ".concat(invalidindex, ":"), fruits[invalidindex]);
// printing the fruits
fruits.forEach(function (fruit) {
    console.log("Name: ".concat(fruit.name, ", color: ").concat(fruit.color, ", taste: ").concat(fruit.taste));
});
