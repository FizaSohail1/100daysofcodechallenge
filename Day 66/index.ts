//UNION TYPES *

let myVar: string | number;
myVar = "Hello"; 
console.log(myVar)
myVar = 42;       
console.log(myVar)

//LITERAL TYPES 
let direction: "left" | "right" | "up" | "down";
function setColor(color: "red" | "green" | "blue") {
    //...
}

//NULLABLE TYPES 
let username: string | null = "Ahmed"; 
let ageEx: number | null = null; 

function greetUser(username: string | null) {
    if (username === null) {
        console.log("Hello, Guest!");
    } else {
        console.log(`Hello, ${username}!`);
    }
}

greetUser("Ahmed"); 
greetUser(null); 

//TYPE ALIAS 
type MyString = string;
let myName: MyString = "Ali";
type MyStringOrNumber = string | number;
let myValue: MyStringOrNumber = 5;

// another example
type Employee = {
 name: string;
 age: number;
 email?: string;
};

const alice: Employee = {
 name: "Alice",
 age: 30,
 email: "alice@example.com",
};

const bob: Employee = {
 name: "Bob",
 age: 25,
};

console.log(alice);
console.log(bob);


 //INTERSECTION TYPE 
type FirstType = {
    name: string;
    age: number;
  };
  
  type SecondType = {
    address: string;
    phone: string;
  };
  
  type CombinedType = FirstType & SecondType;
  
  const person: CombinedType = {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    phone: "123-456-7890",
  };