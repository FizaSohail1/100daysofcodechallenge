// Excercise 13:Your Own Array:

/// Define an array of favorite modes of transportation

let favoriteTransortation: Array<[transport: string, brand: string]>=[];

// with push we can  add one or more elements to the end of an Array.
favoriteTransortation.push(["Honda","Motorcycle"]); 
favoriteTransortation.push(["Audi","Car"]);
favoriteTransortation.push(["Suzuki","Scooter"]);

//using for each loop to print a series in a statement 
favoriteTransortation.forEach(([transport, brand])=>
{
console.log(`I would like to own a ${transport} ${brand}`)
}
)

