// Class type Annotiations

class Product{
    name:string;
    id:number;
    price:number
   
    constructor(name:string,id:number,price:number){
        this.name = name
        this.id = id
        this.price = price
    }
    getproductInfo():string{
    return `Name: ${this.name}, ID: ${this.id}, Price: ${this.price}`
    }
}
const product1:Product = new Product("T-Shirt",123,500)
console.log(product1.getproductInfo());
