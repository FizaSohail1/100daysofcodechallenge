var Laptop = {
    make: "Lenovo",
    model: "E5 31",
    year: "2022",
    describe: function () {
        console.log("This laptop is ".concat(this.make, " it's model is ").concat(this.model, " , and year is ").concat(this.year, "."));
    }
};
Laptop.describe();
