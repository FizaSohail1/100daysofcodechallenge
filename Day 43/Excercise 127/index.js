// Convert a traditional function expression to an arrow function.
var traditionalFunction = function (num1, num2) {
    return num1 + num2;
};
// Converted to arrow function
var arrowFunction = function (a, b) { return a + b; };
console.log(traditionalFunction(5, 3));
console.log(arrowFunction(7, 3));
