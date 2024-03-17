// Excercise 16:More Guests
//Starting with program 15
let guestlist = [
    "Sohail Abbas",
    "Yasmeen",
    "Ali Raza",
    "Khadija"
];
// Step 1: print the name of the guest who can't make it.
let guestwhocantmakeit = "Khadija";
console.log("".concat(guestwhocantmakeit, ", can't make it to dinner"));
// step 2: replacing the name of the guest who can't make it with the person you are inviting.
let newguest = "Hussain";
let indexOfguestwhocantmakeit = guestlist.indexOf(guestwhocantmakeit);
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
for(let guest of guestlist)
{
console.log(`Hey! ${guest} I have found a bigger dinner tabel.`)}

// Step 2: Adding a new guest to the begining of the Array
let newguestatbegining: string = "Taniya Saleem"
 // the unshift methode is used to dds the specified elements to the beginning of an array and returns the new length of the array.
 guestlist.unshift(newguestatbegining);

 // Step 3: Add one new guest to the middle of the array
 let newguestinmiddel: string = "Hadi"
 let middelindex: number = Math.floor(guestlist.length/2);
 guestlist.splice(middelindex,0,newguestinmiddel);
 console.log(guestlist);
 
 // Step 4: Use append() to add one new guest to the end of the list
 let newguestatend: string = "Kamran Ali"
 guestlist.push(newguestatend);
 console.log(guestlist);

 // step 5: Print a new set of invitation messages.

 console.log("\n");
 console.log("New list of invitation messages:");
 for(let guest of guestlist)
{
console.log(`Dear ${guest} You are invited to Dinner.`)}
