//Shrinking Guest List:

let guestlist: Array<string>=[
    "Taniya Saleem",
  "Sohail Abbas",
  "Hadi",
  "Yasmeen",
  "Ali Raza",
  "Hussain",
  "Kamran Ali"
];
// step 1:message about inviting only two people.
console.log("I can invite only two people for dinner.");
// step 2: Remove guests from your list one at a time until only two names remain
while(guestlist.length > 2){
// the pop methode will Remove the last element from an array and returns it.
    let removeguest= guestlist.pop();
    console.log(`Sorry ${removeguest}, I can’t invite you to dinner. `);
};
//step 3:message to each of the two people still on your list, letting them know they’re still invited.
for(let guest of guestlist)
console.log(`Hey ${guest}, You are still invited o the dinner `);
// Step 4:Remove the last two names from your list, so you have an empty list.
guestlist.pop();
guestlist.pop();
// print empty string
console.log("Guest list after dinner");
