// TYPE ANNOTATIONS WITH FUNCTION 

// Function to calculate the area of a rectangle
function calculateRectangleArea(lengthRectAngle: number, widthOfRectAngle: number): number {
  return lengthRectAngle * widthOfRectAngle;
}

// Calling the function with valid arguments
const lengthRectAngle = 5;
const widthOfRectAngle = 3;
const area = calculateRectangleArea(lengthRectAngle, widthOfRectAngle);
console.log(`The area of the rectangle is: ${area}`);

// OPTIONAL AND DEFAULT PARAMETER 

// Optional Parameters:
function greetOptional(name: string, age?: number) {
 if (age !== undefined) {
   console.log(`Hello, ${name}! You are ${age} years old.`);
 } else {
   console.log(`Hello, ${name}!`);
 }
}

greetOptional("Ali"); 
greetOptional("Ahmed", 30); 

// Default Parameters:
function greetDefault(name: string, age: number = 25) {
 console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetDefault("Ali"); 
greetDefault("Ahmed", 30); 

