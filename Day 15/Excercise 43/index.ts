// Excercise 43:"Unchanged Magicians:" 

// Function to add "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

// to show magicians
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// magician names
const magicianNames: string[] = ['Jack', 'lisa', 'Kamran', 'charlee'];

// Call make_great with a copy of the original magician names
const greatMagicians = make_great([...magicianNames]);

// Call show_magicians to display the original array
console.log('Original Magician Names:');
show_magicians(magicianNames);

// Call show_magicians to display the modified array with "the Great" added
console.log('\nMagician Names with "the Great" Added:');
show_magicians(greatMagicians);
