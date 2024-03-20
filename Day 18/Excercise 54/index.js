// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
// A way to make a flexible list
function DynamicKey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
var mydynemickey = DynamicKey("name", "fiza");
console.log(mydynemickey);
