/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


var library = [
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
function librarySort(lib){
var i=0;
for(title in library){
var key = library.map(a => a.title);
var libMap = new Map();
libMap.set(key[i],i);
i = i+1;
}

key.sort();
console.log(key);
test = libMap.get(key[0]);
console.log("test****", test);

for(value in key){
modIndex = libMap.get(key[value]);
library[value] = library[modIndex];
}
console.log(library);
return library;
}
alert(librarySort(library));

