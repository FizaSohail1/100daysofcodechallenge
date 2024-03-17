// Excercise 39:"Cty Names:" 

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with three different city-country pairs and print the results
const result1 = city_country('Lahore', 'Pakistan');
const result2 = city_country('Tokyo', 'Japan');
const result3 = city_country('New york', 'USA');

console.log(result1);
console.log(result2);
console.log(result3);
