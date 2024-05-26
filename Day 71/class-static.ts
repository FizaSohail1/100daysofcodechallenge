//CLASS STATIC MEMBERS 
class ProductStaticMembers {
    private static nextId: number = 1;

    constructor(private id: number, private name: string) {}
    static generateNextId(): number {
      return ProductStaticMembers.nextId++;
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  } 
  const product1static = new ProductStaticMembers(
    ProductStaticMembers.generateNextId(),
    "Widget"
  );
  const product2static = new ProductStaticMembers(
    ProductStaticMembers.generateNextId(),
    "Gadget"
  );
  console.log(product1static.getProductInfo()); 
  console.log(product2static.getProductInfo()); 