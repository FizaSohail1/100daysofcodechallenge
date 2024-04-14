// Explain how the this keyword changes its value when used inside a nested function within a method.

// Demonstrates 'this' behavior change in a nested function
let myObject = {
    property: "Value",
    outerMethod: function () {
      console.log(this.property); // Works as expected, logs "Value"
      const innerMethod = () => {
        console.log(this.property); 
      };
      innerMethod();
    },
  };
  
  myObject.outerMethod();