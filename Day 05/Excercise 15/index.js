"use strict";
// Excercise 15: Changing Guest List 
let guestlist = [
    "Sohail Abbas",
    "Yasmeen",
    "Ali Raza",
    "Khadija"
];
// Step 1: print the name of the guest who can't make it.
let guestwhocantmakeit = "Khadija";
console.log(`${guestwhocantmakeit}, can't make it to dinner`);
// step 2: replacing the name of the guest who can't make it with the person you are inviting.
let newguest = "Hussain";
let indexOfguestwhocantmakeit = guestlist.indexOf(guestwhocantmakeit);
if (indexOfguestwhocantmakeit !== -1) {
    guestlist[indexOfguestwhocantmakeit] = newguest;
}
// step 3:  Print a second set of invitation messages
console.log("Second set of invitation messages");
guestlist.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to dinner today.`);
});
