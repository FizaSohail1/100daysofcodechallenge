// Excercise 30: "Hello Admin"

const userNames: string[] = ['Admin','Fiza','Ali','Yasmeen','Sohail','Khadija','Sana']
// we use greetuser method to display welcoming message 
function greetuser(): void{
for ( const i  in userNames) {
    if(userNames[i].toLowerCase() === 'admin') {
    console.log("Hello admin would you like to see a status report?")
}  
else {
    console.log(`Hello ${userNames[i]}, thankyou for logging in again.`)
}

}
}
greetuser()




