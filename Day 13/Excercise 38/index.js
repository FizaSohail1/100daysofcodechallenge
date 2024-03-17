// Excercise 38: "Cities" 
function describe_city(city, country) {
    if (country === void 0) { country = 'Default Country'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('Istambul'); // Uses the default country
describe_city('New York', 'USA');
