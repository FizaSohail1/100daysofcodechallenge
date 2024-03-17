// Excercise 19: Dinner guests

// from excercise:14
class DinnerInvitation {
    private guests: string[];
    constructor() {
        this.guests = [];}
    inviteGuest(guest: string) {
        this.guests.push(guest);}
    sendInvitations() {
        this.guests.forEach((guest) => {
            console.log(`Dear ${guest},\nYou are invited to dinner. We would be honored to have you join us!`);
       });}
    printNumberOfGuests() {
        console.log(`Number of people invited to dinner: ${this.guests.length}`);
    }
}
// Creating an instance of DinnerInvitation
const dinnerParty = new DinnerInvitation();
// Adding guests to the invitation list
dinnerParty.inviteGuest("Sohail Abbas");
dinnerParty.inviteGuest("Yasmeen");
dinnerParty.inviteGuest("Ali Raza");
dinnerParty.inviteGuest("Khadija");

// Sending out invitations
dinnerParty.sendInvitations();

// Printing the number of people invited to dinner
dinnerParty.printNumberOfGuests();

