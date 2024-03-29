// Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
function convertCase(str) {
    var upperstr = str.toUpperCase();
    var lowerstr = str.toLowerCase();
    console.log('UpperCase', upperstr, 'LowerCase', lowerstr);
}
convertCase("Hello World");
