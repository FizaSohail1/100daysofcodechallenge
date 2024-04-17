"use strict";
//  Take a JSON string and parse it into a JavaScript object.
let jsonString = '{"name":"Alice","age":30,"city":"Wonderland"}';
let person = JSON.parse(jsonString);
console.log(person);
