// Class Access modifieres

class myFamilyPublic{
   public name:string
    constructor(name:string){
        this.name = name
    }   
}
const instancePublic = new myFamilyPublic("John");
console.log(instancePublic.name); 

class MyClassPrivate {
    private secret: string;

    constructor(secret: string) {
        this.secret = secret;
    }

    revealSecret() {
        console.log(this.secret); 
    }
}

const instancePrivate = new MyClassPrivate("My secret");
instancePrivate.revealSecret(); 

class Parent {
    protected familyName: string;

    constructor(name: string) {
        this.familyName = name;
    }
}

class Child extends Parent {
    FamilyInfo() {
        console.log(`Our family name is ${this.familyName}`);
    }
}
const parentEx = new Parent("Smith");
const childEx = new Child("Johnson");

childEx.FamilyInfo(); 