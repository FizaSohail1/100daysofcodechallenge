//Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

// defining a function that accepts multiple hoobies as argument
function myhobbies (...hobbies : string[]){
 // using loop for each hobby
 hobbies.forEach(hobbie => {
    // priniting message for each hobby
    console.log(`My favourite hobbies are ${hobbie}`)
 })};
 // Calling the function
myhobbies('Coding','Reading','Playing')