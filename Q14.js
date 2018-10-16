/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

//Exercise 1
for(i=0; i<myObj.length; i++){
for(value in myObj[i]){
if(myObj[i].occupation=="Programmer"){
console.log(myObj[i].name);
}
}
}

//Exercise 2
console.log(myObj.sort(function(a, b){return a.age < b.age}));
/*
Exception: TypeError: key.get is not a function
@Scratchpad/3:32:12
*/


const arrayToObject = (array, keyField) =>
	array.reduce((obj, item) => {
		if(obj[item[keyField]] == undefined){
			obj[item[keyField]] = [];
			obj[item[keyField]].push(item);
		}
		else
		  obj[item[keyField]].push(item);
		return obj;
	},{});

const peopleObject = arrayToObject(myObj, "occupation");
console.log(peopleObject);

//using map to get all names
var names = [];
names = myObj.map(function(a){return a.name});
console.log(names);