"use strict";
function make_album(artist, albumTitle, tracks) {
    let album = {
        artistName: artist,
        albumName: albumTitle,
        trackNumber: tracks,
    };
    return album;
}
let album1 = make_album("tylor Swift", "folklore", 6);
let album2 = make_album("beyoce", "lemonade", 1);
let album3 = make_album("the beatels", "abbedy", 2);
console.log(album1);
console.log(album2);
console.log(album3);
