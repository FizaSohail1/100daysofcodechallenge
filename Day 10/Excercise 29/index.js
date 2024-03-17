/* Favorite Fruit: Make an Array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
// Step 1 making Array of three favorite fruits
var favoritefruits = ["pomegranate", 'Mango', "Watermelon"];
// Step 2: check for specific fruits using independent if ststements
if (favoritefruits.includes("pomegranate")) {
    console.log("I  really Like Pomegranates.");
}
if (favoritefruits.includes("apple")) {
    console.log("Apples are delicouse.");
}
if (favoritefruits.includes("Mango")) {
    console.log("I really Like Mango.");
}
if (favoritefruits.includes("Watermelon")) {
    console.log("I really Like Watermelon.");
}
if (favoritefruits.includes("Strawberry")) {
    console.log("I enjoy strawberry.");
}
