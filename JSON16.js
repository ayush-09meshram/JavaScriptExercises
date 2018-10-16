/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var obj = {
"One":"1",
"Two":"2",
"Three":"3",
"Four":"4"
}

var keys = Object.keys(obj);
var arr = [];
for(value in keys){
arr.push(obj[keys[value]]);
console.log(arr);
}
console.log(arr);
/*
Exception: ReferenceError: jsonStr is not defined
@Scratchpad/5:16:5
*/
/*
Exception: SyntaxError: JSON.parse: unexpected character at line 1 column 2 of the JSON data
@Scratchpad/5:16:13
*/
/*
Exception: SyntaxError: '' string literal contains an unescaped line break
@Scratchpad/5:10
*/
/*
Exception: TypeError: obj.keys is undefined
@Scratchpad/5:19:1
*/
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/5:19
*/