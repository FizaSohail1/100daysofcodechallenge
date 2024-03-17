"use strict";
// Excercise 32: "Checking Usernames:" 
// step 1: creating Arrays
const current_users = ["ali", "Usman", "Saira", "Samreen", "Muzammil", "Ahmed"];
const new_users = ["Muhammad", "Taha", "Saira", "Malaika", "Ali"];
//  function
for (const new_user of new_users) {
    // Check case-insensitive uniqueness
    const isUsernameTaken = current_users.some((existing_user) => existing_user.toLowerCase() === new_user.toLowerCase());
    // Print messages based on the result
    if (isUsernameTaken) {
        console.log(`The username '${new_user}' is not available. Please choose a different one.`);
    }
    else {
        console.log(`The username '${new_user}' is available.`);
    }
}
