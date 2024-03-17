"use strict";
// Excercise 34:"Pizzas"
const favoritePizzas = ['Pepperoni', 'Fagitta', 'BBQ Chicken'];
// Print the names of each pizza
console.log('Pizza Names:');
for (const pizza of favoritePizzas) {
    console.log(pizza);
}
// Print sentences using the names of the pizzas
console.log('\n my favorite pizza are:');
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
// Additional sentence expressing love for pizza
console.log('\nI really love pizza!');
