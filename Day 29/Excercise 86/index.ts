//Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.

function ifThewordPresent(str:string):boolean{
    return str.includes('Javascript')
}
console.log(ifThewordPresent('Lets code with Javascript'))