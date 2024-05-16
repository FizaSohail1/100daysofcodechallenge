var info = {
    name: "Ali",
    age: 17,
};
var info2 = {
    name: "Sarah",
    age: 34,
    greet: function (message) {
        console.log("Miss ".concat(this.name, " says: ").concat(message));
    },
};
info2.greet("Have you completed your work?");
var setting = {
    theme: true,
    fontSize: "Arial",
    sidebar: false,
};
var Labrador = /** @class */ (function () {
    function Labrador() {
        this.type = "dog";
    }
    Labrador.prototype.bark = function () {
        console.log("Woof!");
    };
    return Labrador;
}());
var Labrador1 = /** @class */ (function () {
    function Labrador1() {
    }
    Labrador1.prototype.bark = function () {
        console.log("Woof!");
    };
    return Labrador1;
}());
var labrador = {
    type: "monkey",
    bark: function () {
        console.log("Woof!");
    },
};
