// Convert a traditional function expression to an arrow function.

let traditionalFunction = function (num1:number, num2:number) {
    return num1 + num2;
  };
  // Converted to arrow function
  let arrowFunction = (a :number, b:number) => a + b;
  
  console.log(traditionalFunction(5, 3));
  
  console.log(arrowFunction(7, 3)); 