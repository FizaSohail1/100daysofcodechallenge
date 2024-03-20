// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

// A way to make a flexible list
function DynamicKey(key: string, value: string) {
    let dynamicObject = {} 
    dynamicObject=[key]= value
    return dynamicObject
}

// Using the flexible list setup for a user's preference
let mydynemickey = DynamicKey("name", "fiza");
console.log(mydynemickey);