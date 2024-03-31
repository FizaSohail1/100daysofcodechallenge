// Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

function convertingstring(str:string):number{
    return parseFloat(str)
}
console.log(convertingstring('123'))