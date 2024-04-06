//  Compare two strings to check if they are identical, ignoring case sensitivity.
function checkStringIdentical(str1, str2) {
    return str1.toLowerCase() === str2.toUpperCase();
}
console.log(checkStringIdentical('HELLO', 'hello'));
