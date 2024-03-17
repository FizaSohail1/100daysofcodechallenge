// Excercise 45:"Cars" 

// store information about a car in an object
function create_car(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string; model: string; [key: string]: any } {
    const car: { manufacturer: string; model: string; [key: string]: any } = {
        manufacturer,
        model,
    };

    // Add optional features to the car object
    for (const option of options) {
        for (const key in option) {
            if (option.hasOwnProperty(key)) {
                car[key] = option[key];
            }
        }
    }

    return car;
}

// Call the function with required information and additional name-value pairs
const carInfo = create_car('Toyota', 'Aqua', {color: 'Blue', year: 2022});

// Print the object to verify the information
console.log(carInfo);
