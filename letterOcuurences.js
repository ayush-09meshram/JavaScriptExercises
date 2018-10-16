/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var string = 'gmail.com';
var letter = 'm';

function letterOccurances(str,alpha){
var regex = /[alpha]/g;
var count = str.match(regex).length;
return count;
}

console.log(letterOccurances(string,letter));

/*
Exception: TypeError: str.match(...) is null
letterOccurances@Scratchpad/10:14:13
@Scratchpad/10:18:13
*/
/*
Exception: TypeError: str.match(...) is null
letterOccurances@Scratchpad/11:14:13
@Scratchpad/11:18:13
*/