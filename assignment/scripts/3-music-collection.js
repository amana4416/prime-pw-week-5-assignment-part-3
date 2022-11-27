console.log('***** Music Collection *****')
// Create a variable `collection` that starts as an empty array.
let collection = [];
console.log('This is my record collection:', collection);

// Add a function named `addToCollection
function addToCollection(title, artist, yearPublished) {
    let album = { 
        albumTitle: title,
        albumArtist: artist,
        albumYear: yearPublished,
    }

    collection.push(album);
    return album;
}

// Test
console.log('Add Midnights by Taylor Swift to the collection:', addToCollection('Midnights', 'Taylor Swift', 2022) );
console.log('Add The Lead by FLO to the collection', addToCollection('The Lead', 'FLO', 2022));
console.log('Add Fine Line by Harry Styles to the collection:', addToCollection('Fine Line', 'Harry Styles', 2019));
console.log('Add Gemini Rights by Steve Lacey to the collection:', addToCollection('Gemini Rights', 'Steve Lacey', 2022));
console.log('Add Riot! by Paramore to the collection:', addToCollection('Riot!', 'Paramore', 2007));
console.log('Add Take Care by Drake to the collection:', addToCollection('Take Care', 'Drake', 2011));

console.log('This is my record collection:', collection);

// Add a function named `showCollection
