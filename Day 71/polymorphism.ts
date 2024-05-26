
abstract class AbstractEntity {
    private static nextId: number = 1;
    protected constructor(public id: number, protected name: string) {} 
    static generateNextId(): number {
      return AbstractEntity.nextId++;
    }
    abstract getEntityInfo(): string;
  }
  
  class Entity extends AbstractEntity {
    constructor(id: number, name: string) {
      super(id, name);
    }
    getEntityInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
  
  class AnotherEntity extends AbstractEntity {
    constructor(id: number, name: string) {
      super(id, name);
    }
    getEntityInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Additional Info: abc`;
    }
  }
  const entity1: AbstractEntity = new Entity(AbstractEntity.generateNextId(), "Widget");
  const entity2: AbstractEntity = new AnotherEntity(AbstractEntity.generateNextId(), "Gadget");
  
  
  console.log(entity1.getEntityInfo()); 
  console.log(entity2.getEntityInfo()); 