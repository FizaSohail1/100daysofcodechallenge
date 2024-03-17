// Excercise 16:More Guests
//Starting with program 15
var guestlist = [
    "Sohail Abbas",
    "Yasmeen",
    "Ali Raza",
    "Khadija"
];
// Step 1: print the name of the guest who can't make it.
var guestwhocantmakeit = "Khadija";
console.log("".concat(guestwhocantmakeit, ", can't make it to dinner"));
// step 2: replacing the name of the guest who can't make it with the person you are inviting.
var newguest = "Hussain";
var indexOfguestwhocantmakeit = guestlist.indexOf(guestwhocantmakeit);
if (indexOfguestwhocantmakeit !== -1) {
    guestlist[indexOfguestwhocantmakeit] = newguest;
}
// step 3:  Print a second set of invitation messages
console.log("Second set of invitation messages");
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner today."));
});
// Starting program 16
//Step 1: Infoeming peaople that I have find a bigger dinner tabel.
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("Hey! ".concat(guest, " I have found a bigger dinner tabel."));
}
// Step 2: Adding a new guest to the begining of the Array
var newguestatbegining = "Taniya Saleem";
// the unshift methode is used to dds the specified elements to the beginning of an array and returns the new length of the array.
guestlist.unshift(newguestatbegining);
// Step 3: Add one new guest to the middle of the array
var newguestinmiddel = "Hadi";
var middelindex = Math.floor(guestlist.length / 2);
guestlist.splice(middelindex, 0, newguestinmiddel);
console.log(guestlist);
// Step 4: Use append() to add one new guest to the end of the list
var newguestatend = "Kamran Ali";
guestlist.push(newguestatend);
console.log(guestlist);
// step 5: Print a new set of invitation messages.
console.log("\n");
console.log("New list of invitation messages:");
for (var _a = 0, guestlist_2 = guestlist; _a < guestlist_2.length; _a++) {
    var guest = guestlist_2[_a];
    console.log("Dear ".concat(guest, " You are invited to Dinner."));
}
