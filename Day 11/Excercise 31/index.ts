//Excercise 31: No user 

// non empty array case
let userNames: string[] = ['admin','Fiza','Ali','Yasmeen','Sohail','Khadija','Sana']
//functional case
function greetUser(usernames: string[]):void {
if(usernames.length === 0) 
{
    console.log("We need to find some users!");
    return;
}
for ( const username  in usernames) {
    if(userNames[username].toLowerCase() === 'admin') {
    console.log("Hello admin would you like to see a status report?")
}  
else {
    console.log(`Hello ${userNames[username]}, thankyou for logging in again.`)
}

}
} 
console.log("For non empty username:\n");
greetUser(userNames);
// to make an array empty we just assign an empty array to userNames
userNames = [];

console.log("\nFor empty usernames:");
greetUser(userNames);






