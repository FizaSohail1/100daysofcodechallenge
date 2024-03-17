/* Excercise 24: More Conditional Tests */
//  Srep 1:Tests for equality and inequality with strings
var stringEqualityTest = "hello";
console.log("Is stringEqualityTest == hello, I predict it True");
console.log(stringEqualityTest == "hello"); // True
console.log("\n Is stringEqualityTest == World, I predict it False");
console.log(stringEqualityTest == "World"); // False
// Srep 2: Testing by using lower case function
var lowerCaseTest = "HELLO";
console.log("\n If lowerCaseTest == hello,I predict it true");
console.log(lowerCaseTest.toLowerCase() === "hello"); // true
console.log("\n If lowerCaseTest == Hello,I predict it False");
console.log(lowerCaseTest.toLowerCase() === "Hello"); // False
// Step3: Numerical tests
var numericalEqualityTest = 5;
console.log("\n If numericalEqualitytest ==5,I predict it true");
console.log(numericalEqualityTest == 5); // true
console.log("\n If numericalEqualitytest ==10,I predict it False");
console.log(numericalEqualityTest == 10); // False
var greaterThanTest = 10;
console.log("\n If greaterThanTest > 5,I predict it True");
console.log(greaterThanTest > 5); // True
var lessThanTest = 10;
console.log("\n If lessThanTest < 5,I predict it False");
console.log(lessThanTest < 5); // False
var greaterThanOrEqual = 15;
console.log("\n If greaterthanorequal >10=15,I predict it true");
console.log(greaterThanOrEqual >= 15); // True
console.log("\n If greaterthanorequal >5=10,I predict it false");
console.log(greaterThanOrEqual >= 10); // False
var lessThanOrEqualTest = 10;
console.log("\n If lessthanequal <5=3,I predict it False");
console.log(lessThanOrEqualTest <= 15); // False
console.log("\n If lessthanequal <15=10,I predict it True");
console.log(lessThanOrEqualTest <= 10); // True
//  step 4: Testing by using "and" and "or" operators
var andOperatorTest = "true";
console.log("If andoperetertest =true&&true, I predict it true");
console.log(andOperatorTest && true); //True
console.log("If andoperetertest &&false, I predict it False");
console.log(andOperatorTest && false); //False
var oroperetertest = "true";
console.log("If oroperetertest || true, I predict it False");
console.log(andOperatorTest || true); //false
console.log("If oroperetertest || false , I predict it true");
console.log(andOperatorTest || false); //true
// step 5:Test whether an item is in an array
var itemInArrayTest = [1, 2, 3, 4, 5];
console.log("If itemsInArrayTest includes(6), I predict it false");
console.log(itemInArrayTest.includes(6)); // false
console.log("If itemsInArrayTest includes(4), I predict it true");
console.log(itemInArrayTest.includes(4)); //true
// step 6:Test whether an item is not in an array
var itemNotInArrayTest = " ";
console.log("If itemsNotInArrayTest includes( ' '), I predict it True");
console.log(itemNotInArrayTest.includes(' ')); // True
