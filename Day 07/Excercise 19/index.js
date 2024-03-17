// Excercise 19: Dinner guests
// from excercise:14
var DinnerInvitation = /** @class */ (function () {
    function DinnerInvitation() {
        this.guests = [];
    }
    DinnerInvitation.prototype.inviteGuest = function (guest) {
        this.guests.push(guest);
    };
    DinnerInvitation.prototype.sendInvitations = function () {
        this.guests.forEach(function (guest) {
            console.log("Dear ".concat(guest, ",\nYou are invited to dinner. We would be honored to have you join us!"));
        });
    };
    DinnerInvitation.prototype.printNumberOfGuests = function () {
        console.log("Number of people invited to dinner: ".concat(this.guests.length));
    };
    return DinnerInvitation;
}());
// Creating an instance of DinnerInvitation
var dinnerParty = new DinnerInvitation();
// Adding guests to the invitation list
dinnerParty.inviteGuest("Sohail Abbas");
dinnerParty.inviteGuest("Yasmeen");
dinnerParty.inviteGuest("Ali Raza");
dinnerParty.inviteGuest("Khadija");
// Sending out invitations
dinnerParty.sendInvitations();
// Printing the number of people invited to dinner
dinnerParty.printNumberOfGuests();
