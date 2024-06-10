// generics

// A generic function that returns the input value as is
function returnType<T>(value:T):T{
    return value
}
  
  // Usage of the generic function with different types
  const numValue: number = returnType<number>(100);
  const strValue: string = returnType<string>("Hello");
  const boolValue: boolean = returnType<boolean>(true);
  const arrValue: number[] = returnType<number[]>([1, 2, 3, 4]);
  
  console.log(`Number Value: ${numValue}`);
  console.log(`String Value: ${strValue}`);
  console.log(`Boolean Value: ${boolValue}`);
  console.log(`Array Value: ${arrValue}`);

  // Multipel types
    // Generic Function `multipleTypes`
function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
        return `First Value: ${valueOne} \n Second Value :${valueTwo}`;
 }
      
console.log(multipleTypes<string, number>("Ali", 5));
console.log(multipleTypes<string, boolean>("Ahmed", true));

// generics classes
class User<T = string>{
 constructor(public value:T){}
 show(message: T): void {
    console.log(`${message}, ${this.value}`);
  }
}
let userOne = new User<string>("Muhammad");
console.log(userOne.value);
userOne.show("Hello"); 

let userTwo = new User<number | string>(100);
console.log(userTwo.value); 
userTwo.show("Message"); 

// generics interface
interface Students {
    name:string,
    age:number,
    rollNo:number
}
interface Course {
    name:string,
    price:number,
   duration:string,
}
class Collection<T> {
    public data: T[] = [];   
    details(data: T): void {
      this.data.push(data);
    }
  }
  let student = new Collection<Students>();
  student.details({name:'Fiza', age:17,rollNo:123 });
  console.log(student);
  let enroll = new Collection<Course>();
  enroll.details({ name:'Web-development',price:2500,duration:'1 month' });
  console.log(enroll);