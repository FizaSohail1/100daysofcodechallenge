// Class Access modifieres
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myFamilyPublic = /** @class */ (function () {
    function myFamilyPublic(name) {
        this.name = name;
    }
    return myFamilyPublic;
}());
var instancePublic = new myFamilyPublic("John");
console.log(instancePublic.name);
var MyClassPrivate = /** @class */ (function () {
    function MyClassPrivate(secret) {
        this.secret = secret;
    }
    MyClassPrivate.prototype.revealSecret = function () {
        console.log(this.secret);
    };
    return MyClassPrivate;
}());
var instancePrivate = new MyClassPrivate("My secret");
instancePrivate.revealSecret();
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.familyName = name;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.FamilyInfo = function () {
        console.log("Our family name is ".concat(this.familyName));
    };
    return Child;
}(Parent));
var parentEx = new Parent("Smith");
var childEx = new Child("Johnson");
childEx.FamilyInfo();
