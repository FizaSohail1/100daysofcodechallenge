// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array


let numbers:number[]=[1,22,3,4,5]
function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

console.log(calculateSum(numbers)); 