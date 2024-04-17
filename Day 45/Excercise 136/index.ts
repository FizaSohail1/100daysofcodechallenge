// Explain how you can format a JSON string with proper indentation for readability.

const person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
  };
  
  // Converts the object into a JSON string with indentation
  const jsonString = JSON.stringify(person, null, 2); 
  
  console.log(jsonString);
  