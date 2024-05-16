//Interface
interface person{
  name:string;
  age:number;
}
const info:person = {
    name:"Ali",
    age:17,
}

// Interface methodes and parameter
interface person2{
    name:string;
    age:number;
    greet(message:string) : void
}

const info2:person2 = {
    name:"Sarah",
    age:34,
    greet(message: string) {
        console.log(`Miss ${this.name} says: ${message}`)
    },
}
info2.greet("Have you completed your work?")

// REOPEN THE INTERFACE AND USE CASES

interface webpage{
    readonly theme:boolean;
    fontSize:string
}
interface webpage{
    sidebar:boolean;
}
const setting:webpage ={
    theme:true,
    fontSize:"Arial",
    sidebar: false,
};

// Interface vs. Type Aliases

// Interface decleartion syntex
interface PersonExInterface {
  name: string;
  age: number;
}

// type alias 
type PersonExType = {
  name: string;
  age: number;
};
interface AnimalExInterface {
  type: string;
}

interface Dog extends AnimalExInterface {
  bark(): void;
}

class Labrador implements Dog {
  type: string = "dog";
  bark() {
    console.log("Woof!");
  }
}

//Extending and Implementing:
interface Animal {
  type: string;
}

interface Dog extends Animal {
  bark(): void;
}

class Labrador1 implements Dog {
  type: "dog";
  bark() {
    console.log("Woof!");
  }
}

//Type Alias: Cannot be extended or implemented directly. However, you can achieve similar results using intersection types.
type AnimalExType = {
  type: string;
};

type Monkey = AnimalExType & {
  bark(): void;
};

const labrador: Monkey = {
  type: "monkey",
  bark() {
    console.log("Woof!");
  },
};