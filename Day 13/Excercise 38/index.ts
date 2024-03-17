// Excercise 38: "Cities" 

function describe_city(city: string, country: string = 'Default Country'): void {
    console.log(`${city} is in ${country}.`);
}

// Calling function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('Istambul'); // Uses the default country
describe_city('New York', 'USA');
