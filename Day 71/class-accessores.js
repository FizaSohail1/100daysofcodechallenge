// CLASS ACCESSORS 
var ProductAccessors = /** @class */ (function () {
    function ProductAccessors(id, name) {
        this.id = id;
        this.name = name;
        this._price = 0;
    }
    Object.defineProperty(ProductAccessors.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (newPrice) {
            if (newPrice >= 0) {
                this._price = newPrice;
            }
            else {
                console.log("Price cannot be negative.");
            }
        },
        enumerable: false,
        configurable: true
    });
    ProductAccessors.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: $").concat(this._price);
    };
    return ProductAccessors;
}());
var productEx = new ProductAccessors(1, "Widget");
console.log(productEx.getProductInfo());
productEx.price = 20.0;
console.log(productEx.getProductInfo());
