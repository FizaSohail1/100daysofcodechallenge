// Modify a method in an object to use the this keyword to access another property in the same object.
//Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data.
var numbers = {
    num1: 7,
    num2: 4,
    Total: function () {
        return this.num1 + this.num2;
    }
};
console.log(numbers.Total());
