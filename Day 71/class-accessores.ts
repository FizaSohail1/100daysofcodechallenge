// CLASS ACCESSORS 

class ProductAccessors {
    private _price: number;
  
    constructor(private id: number, private name: string) {
      this._price = 0; 
    }
  
    get price(): number {
      return this._price;
    }
    set price(newPrice: number) {
      if (newPrice >= 0) {
        this._price = newPrice;
      } else {
        console.log("Price cannot be negative.");
      }
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
    }
  }
  const productEx = new ProductAccessors(1, "Widget"); 
  console.log(productEx.getProductInfo()); 
  productEx.price = 20.0;
  
  console.log(productEx.getProductInfo()); 
