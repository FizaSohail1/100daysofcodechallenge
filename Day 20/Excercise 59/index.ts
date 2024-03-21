// Add a special number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

function  add (numToAdd:number):(number) => number {
    return (number :number):number => {
        return number + numToAdd;
    };
};
let addtwo = add(5)
console.log(addtwo(2))
