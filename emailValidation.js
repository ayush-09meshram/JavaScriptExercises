/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var lowerCase = /[a-z]/;
var upperCase = /[A-Z]/;
var digits = /^(?:[+\d].*\d|\d)$/;
var characters = /!@#\$%\^\&*\)\(+=._-]{6,}$/g;
function validEmail(str){
if(lowerCase.test(str)){
console.log("Valid email address");
}                     
else{
console.log("Not valid");
}
}
validEmail('me-info12@Example.com');

/*
Exception: SyntaxError: expected expression, got ';'
@Scratchpad/5:12
*/
/*
Exception: SyntaxError: expected expression, got ';'
@Scratchpad/5:12
*/
/*
Exception: SyntaxError: illegal character
@Scratchpad/5:12
*/