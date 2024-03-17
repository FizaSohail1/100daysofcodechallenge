// Excercise 42:"Great Magicians:" 
// Function to add "the Great" to each magician's name
function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
//  calling Function to show magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Array of magician names
var magicianNames = ['Jack', 'lisa', 'kamran', 'charlee'];
// Call make_great to modify the magician names
var greatMagicians = make_great(magicianNames);
// Call show_magicians to see the modified list
show_magicians(greatMagicians);
