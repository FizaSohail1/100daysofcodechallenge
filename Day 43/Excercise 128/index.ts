// Create an arrow function that takes multiple parameters and returns the product of all parameters.

const multiplyParameters = (...numbers: number[]) =>
    numbers.reduce((total, number) => total * number, 1);
  
  console.log(multiplyParameters(2, 3, 4)); 
  