// Create a function inside an object that returns the object's own name property using the this keyword.

let info = {
    name: 'Fatima',
    age : '16',
    getName:function(){
    return this.name
    }
}
console.log(info.getName())