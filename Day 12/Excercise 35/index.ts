// Excercise 35: "Animals"
 
const animals: string[] = ['Dog', 'Cat', 'Goat'];
// Print the names of each animal
console.log('Animal Names:');
for (const animal of animals) {
    console.log(animal);
}
// Print statements about each animal
console.log('\Statements about each animal:');
for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
// Print a sentence about the common characteristic
console.log('\nAny of these animals would make a great pet!');


