// Excercise 45:"Cars" 
// store information about a car in an object
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add optional features to the car object
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var key in option) {
            if (option.hasOwnProperty(key)) {
                car[key] = option[key];
            }
        }
    }
    return car;
}
// Call the function with required information and additional name-value pairs
var carInfo = create_car('Toyota', 'Aqua', { color: 'Blue', year: 2022 });
// Print the object to verify the information
console.log(carInfo);
