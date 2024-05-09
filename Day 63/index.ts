// Type Annotations

let myNumber:number = 15;
let myString:string = "Fiza";

console.log("My Number is: ",myNumber)
console.log("My String is: ",myString)

// Another way to write this code is as follows:
let myNumberExTwo: number;
let myStringExTwo: string;

myNumberExTwo = 42;
myStringExTwo = "Hello, TypeScript";

console.log("My Number Is:", myNumberExTwo);
console.log("My String Is:", myStringExTwo);

// DYNAMIC TYPE DETERMINATION

let greetings = "Hello"
console.log(greetings)

// Any Type

let myVariable: any = 42;
myVariable = "Hello, TypeScript";
console.log(myVariable)