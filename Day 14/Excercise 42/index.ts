// Excercise 42:"Great Magicians:" 

// Function to add "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

//  calling Function to show magicians
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Array of magician names
const magicianNames: string[] = ['Jack', 'lisa', 'kamran', 'charlee'];

// Call make_great to modify the magician names
const greatMagicians = make_great(magicianNames);

// Call show_magicians to see the modified list
show_magicians(greatMagicians);
