"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personname = "Sohail Abbas";
// step 1 show in lowercase:
let lowercasename = personname.toLowerCase();
console.log(lowercasename);
// step 2 show name in uppercase:
let uppercasename = personname.toUpperCase();
console.log(uppercasename);
// step 3 show name in titlecase:
let words = personname.split(" ");
let titlecasename = "";
for (let i = 0; i < words.length; i++) {
    titlecasename += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecasename);
