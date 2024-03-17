// Excercise 40:"Album" 
//  Using Function to create a music album object
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    // Add tracks to the album object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three dictionaries representing different albums
var album1 = make_album('Artist1', 'Album One');
var album2 = make_album('Artist2', 'Album Two', 18);
var album3 = make_album('Artist3', 'Album Three', 4);
// Print each return value
console.log(album1);
console.log(album2);
console.log(album3);
