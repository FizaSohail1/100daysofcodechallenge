// Excercise 15: Changing Guest List 
let guestlist: Array<string>=[
    "Sohail Abbas",
    "Yasmeen",
    "Ali Raza",
    "Khadija"
];
// Step 1: print the name of the guest who can't make it.
let guestwhocantmakeit: string = "Khadija";
console.log(`${guestwhocantmakeit}, can't make it to dinner`);

// step 2: replacing the name of the guest who can't make it with the person you are inviting.
let newguest: string = "Hussain";
let indexOfguestwhocantmakeit: number = guestlist.indexOf(guestwhocantmakeit);

if(indexOfguestwhocantmakeit !== -1)
{
    guestlist[indexOfguestwhocantmakeit]=newguest
}
// step 3:  Print a second set of invitation messages

console.log("Second set of invitation messages");
guestlist.forEach((guest:string) => {
    console.log(`Dear ${guest}, you are invited to dinner today.`)
});