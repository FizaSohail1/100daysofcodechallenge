//  Generate a random integer between 1 and 10.

function generateRandomNumber(): number{
    return Math.floor(Math.random() * 10) + 1;
}
console.log(generateRandomNumber())