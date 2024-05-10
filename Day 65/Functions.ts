// FUNCTION REST PARAMETER 

// Function with a rest parameter and type annotations
function addAll(...nums: number[]): number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
      result += nums[i];
    }
    return result;
}
 
// Calling the function with various numeric arguments
console.log(addAll(10, 20, 30, 100, 10.5, +true)); 

// ARROW FUNCTION 
 
const addWithArrow = (num1: number, num2: number): number => num1 + num2;
console.log(addWithArrow(10, 20)); 

// ANONYMOUS FUNCTION 

const add = function (num1: number, num2: number): number {
 return num1 + num2;
};
console.log(add(10, 20)); 
