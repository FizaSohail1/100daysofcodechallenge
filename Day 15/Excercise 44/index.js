"use strict";
// Excercise 44: "Sandwiches:" 
// Function to print a summary of the sandwich order
function order_sandwich(...items) {
    console.log('Sandwich Summary:');
    if (items.length === 0) {
        console.log('No items specified for the sandwich.');
    }
    else {
        console.log('Items:');
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log('\n');
}
// Call the function with different numbers of arguments
order_sandwich('Chicken', 'Cheese', 'Lettuce');
order_sandwich('Club', 'Swiss');
order_sandwich('Veggie');
