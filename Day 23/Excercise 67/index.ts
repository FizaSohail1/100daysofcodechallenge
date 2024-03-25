
// This function adds a number and a string that represents a number
function addNumberAndString(number1: number, number2: string): number {
    // Converts the string to a number 
    return number1 + Number(number2);
}
console.log(addNumberAndString(10, "5")); 