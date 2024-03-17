// Excercise 13:Your Own Array:
/// Define an array of favorite modes of transportation
var favoriteTransortation = [];
// with push we can  add one or more elements to the end of an Array.
favoriteTransortation.push(["Honda", "Motorcycle"]);
favoriteTransortation.push(["Audi", "Car"]);
favoriteTransortation.push(["Suzuki", "Scooter"]);
//using for each loop to print a series in a statement 
favoriteTransortation.forEach(function (_a) {
    var transport = _a[0], brand = _a[1];
    console.log("I would like to own a ".concat(transport, " ").concat(brand));
});
