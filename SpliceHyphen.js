/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var number = prompt("Please enter a number");
var Arr = Array.of(number);
var num = parseInt(Arr);
var numArr = (""+num).split("");
console.log(numArr);
Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};
for(i=0; i<numArr.length; i++ ){
for(j=1;j<numArr.length; j++){
if(i!=numArr.length-1 && numArr[i]%2==0 && numArr[j]%2==0){
numArr.insert(i,'-');
}
}
}
var modArr = numArr.toString();
alert(modArr);


