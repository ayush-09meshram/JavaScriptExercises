/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var studData = {David: 80, Vinoth: 77, Divya: 88, Ishitha: 95, Thomas: 68};
var i=0

for(value in studData){
console.log(value);
var input = studData[value];
var inputArr = Array.of(input);
console.log(inputArr);
if(inputArr[i]<60) console.log(value + ": F");
else if(inputArr[i]<70) {console.log(value + ": D");}
else if(inputArr[i]<80) {console.log(value + ": C");}
else if(inputArr[i]<90) {console.log(value + ": B");}
else if(inputArr[i]<100) {console.log(value + ": A");}
console.log(i);
}
