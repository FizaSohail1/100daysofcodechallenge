// Class type Annotiations
var Product = /** @class */ (function () {
    function Product(name, id, price) {
        this.name = name;
        this.id = id;
        this.price = price;
    }
    Product.prototype.getproductInfo = function () {
        return "Name: ".concat(this.name, ", ID: ").concat(this.id, ", Price: ").concat(this.price);
    };
    return Product;
}());
var product1 = new Product("T-Shirt", 123, 500);
console.log(product1.getproductInfo());
