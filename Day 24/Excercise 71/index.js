"use strict";
// Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
let book = 'english';
book = 'maths'; // the value of the variable book has been changed here
console.log(book);
const name = "Alice";
try {
    name = "Bob"; // This line will cause an error
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
