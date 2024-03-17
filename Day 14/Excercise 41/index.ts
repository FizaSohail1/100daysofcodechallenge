// Excercise 41 "Magicians:"" 
// Function to show magicians
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

//  Creating an Array of magician names
const magicianNames: string[] = ['Jack', 'lisa', 'Kamran', 'charlee'];

//  print magician names
show_magicians(magicianNames);
