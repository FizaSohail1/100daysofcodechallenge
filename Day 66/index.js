//UNION TYPES *
var myVar;
myVar = "Hello";
console.log(myVar);
myVar = 42;
console.log(myVar);
//LITERAL TYPES 
var direction;
function setColor(color) {
    //...
}
//NULLABLE TYPES 
var username = "Ahmed";
var ageEx = null;
function greetUser(username) {
    if (username === null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log("Hello, ".concat(username, "!"));
    }
}
greetUser("Ahmed");
greetUser(null);
var myName = "Ali";
var myValue = 5;
var alice = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
var bob = {
    name: "Bob",
    age: 25,
};
console.log(alice);
console.log(bob);
var person = {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    phone: "123-456-7890",
};
