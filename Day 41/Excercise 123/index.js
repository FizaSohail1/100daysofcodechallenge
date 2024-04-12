// Create a loop that iterates through a string and stops when it finds the first vowel.
// This function iterates through a string and logs each character until it finds a vowel
function logUntilVowel(str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("First vowel found: ".concat(char));
            break; // Stops the loop at the first vowel found
        }
        console.log(char);
    }
}
logUntilVowel("dyzuzy");
