

let Laptop = {
    make: "Lenovo",
    model: "E5 31",
    year: "2022",
    describe: function() {
        console.log(`This laptop is ${this.make} it's model is ${this.model} , and year is ${this.year}.`)
    }
};
Laptop.describe()
