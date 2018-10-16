/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var exampleString = 'webmaster';
var arr = exampleString.split("");
arr.sort();
var str = arr.toString(); 
var outputString = str.replace(/\,/g,"");
console.log(outputString);

/*
Exception: TypeError: arr.replace is not a function
@Scratchpad/9:13:11
*/