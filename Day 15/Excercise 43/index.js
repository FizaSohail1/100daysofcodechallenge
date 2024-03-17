// Excercise 43:"Unchanged Magicians:" 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to add "the Great" to each magician's name
function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
// to show magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// magician names
var magicianNames = ['Jack', 'lisa', 'Kamran', 'charlee'];
// Call make_great with a copy of the original magician names
var greatMagicians = make_great(__spreadArray([], magicianNames, true));
// Call show_magicians to display the original array
console.log('Original Magician Names:');
show_magicians(magicianNames);
// Call show_magicians to display the modified array with "the Great" added
console.log('\nMagician Names with "the Great" Added:');
show_magicians(greatMagicians);
