"use strict";
// Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.addition = void 0;
// creating a function and exporting it to another javascript file
function addition(a, b) {
    return a + b;
}
exports.addition = addition;
