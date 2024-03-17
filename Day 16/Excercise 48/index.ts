// combining array with seprate operators

//Defining two arrays of priceset1 and priceset2
let priceSet1 = [3400,1200,1500];
let priceSet2 = [1400,1600,1300];
 // combining araay
 let combinePrices = [...priceSet1 , ...priceSet2].sort((a,b) => a -b);
 console.log(combinePrices)