// Excercise 14:Guest list
// Making guest list
var guestlist = [
    "Sohail Abbas",
    "Yasmeen",
    "Ali Raza",
    "Khadija"
];
//Using for each loop to print the message of invitation
guestlist.forEach(function (guestlist) {
    console.log("Dear ".concat(guestlist, " ,I would like to invite you to dinner today. "));
});
