// generics
// A generic function that returns the input value as is
function returnType(value) {
    return value;
}
// Usage of the generic function with different types
var numValue = returnType(100);
var strValue = returnType("Hello");
var boolValue = returnType(true);
var arrValue = returnType([1, 2, 3, 4]);
console.log("Number Value: ".concat(numValue));
console.log("String Value: ".concat(strValue));
console.log("Boolean Value: ".concat(boolValue));
console.log("Array Value: ".concat(arrValue));
// Multipel types
// Generic Function `multipleTypes`
function multipleTypes(valueOne, valueTwo) {
    return "First Value: ".concat(valueOne, " \n Second Value :").concat(valueTwo);
}
console.log(multipleTypes("Ali", 5));
console.log(multipleTypes("Ahmed", true));
// generics classes
var User = /** @class */ (function () {
    function User(value) {
        this.value = value;
    }
    User.prototype.show = function (message) {
        console.log("".concat(message, ", ").concat(this.value));
    };
    return User;
}());
var userOne = new User("Muhammad");
console.log(userOne.value);
userOne.show("Hello");
var userTwo = new User(100);
console.log(userTwo.value);
userTwo.show("Message");
var Collection = /** @class */ (function () {
    function Collection() {
        this.data = [];
    }
    Collection.prototype.details = function (data) {
        this.data.push(data);
    };
    return Collection;
}());
var student = new Collection();
student.details({ name: 'Fiza', age: 17, rollNo: 123 });
console.log(student);
var enroll = new Collection();
enroll.details({ name: 'Web-development', price: 2500, duration: '1 month' });
console.log(enroll);
