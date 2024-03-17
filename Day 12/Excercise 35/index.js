// Excercise 35: "Animals"
var animals = ['Dog', 'Cat', 'Goat'];
// Print the names of each animal
console.log('Animal Names:');
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Print statements about each animal
console.log('\Statements about each animal:');
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
// Print a sentence about the common characteristic
console.log('\nAny of these animals would make a great pet!');
