//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var car = {
    name: "Honda",
    price: "25000",
    description: "They have Excellent performance"
};
// Defining an Array of objects
var cars = [];
// pushing multiple objects
cars.push(car);
cars.push({
    name: "Toyota",
    price: "35000",
    description: "It is one of the best known car company in the world"
});
var car3 = {
    name: "Suzuki",
    price: "15000",
    description: "Suzuki belongs to Japan"
};
cars.push(car3);
console.log(cars);
