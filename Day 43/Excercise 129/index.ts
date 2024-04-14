// Explain how this behaves differently in arrow functions compared to traditional functions.

// Demonstrating 'this' in traditional vs. arrow functions
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
      console.log("Traditional function:", this.value); 
    },
    arrowFunction: () => {
      console.log("Arrow function:", this.value); 
    },
  };
  traditionalVsArrow.traditionalFunction();
  traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
  
  