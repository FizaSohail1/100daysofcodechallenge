// Write an if statement that logs "Good Morning" if the current time is before 12 PM.

// Checks the current hour and logs "Good Morning" if it's before 12 PM
const date = new Date();
const hours = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds()

if (hours < 24 && hours > 12) {
    console.log(`Time : ${hours} : ${min} : ${sec}`)
  console.log("Good Morning"); // It's morning if before 12 PM
}
else{
     console.log(`Time : ${hours} : ${min} : ${sec}`)
     console.log('Good night')
}
// This simple check helps us greet users appropriately based on the time of day.