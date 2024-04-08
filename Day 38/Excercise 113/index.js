"use strict";
// Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
const countriesandcapital = new Map();
countriesandcapital.set("Pakistan", "Islamabad");
countriesandcapital.set("France", "Paris");
countriesandcapital.set("USA", "Washigton, D.C");
function logCapitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log(`The capital of Canada is ${countries.get("Canada")}`);
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
logCapitalOfCanada(countriesandcapital);
