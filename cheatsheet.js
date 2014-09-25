//Variables are stored data

var numberOne = 1;
var numberTwo = 2;



var string = "Hello World, this is a string of text."

//Alerts bring up a dialog box

alert("Check it Out!")
//I forgot to mention this is an inline comment. Not read by the console. Strictly for developers.

//This is a console.log which logs a response in the console.
console.log ("I'm only in the console.")
console.log(numberOne+numberTwo)

//This is how a string is framed, within single or double quotes.
"Hello World."

//This is a number. They need no quotes.
525949

//This is an array. An array is a set or group of objects.
var chips = ["Blue", "Tortilla", "Corn","Pork Rinds", "Cheese Doodles"];

//Test your code as you go along by checking in the console and debug as necessary.You can check to see if values are the same in different ways.
console.log(1=1);
console.log(1=="1");
console.log(1==="1");

//Logic is used within booleans. Applied using the order of if, else if, else.
if(2<5){
	alert("True.");
}
else{
	console.log("You will not see this because 5 is not less than 2.");
}

var numero= 0.5;

if(numero>1){
	alert("False. But you won't see this.");
}
else if(numero>0){
	console.log("This value is greater than zero.")
}
else{
	alert("You won't see this either.")
}

//Functions are stored actions that can be reused as necessary.
function noArgument(){
	console.log("There is no argument.");
}

noArgument();



function addTwo(some_number){
	return some_number + 2;
}

alert(addTwo(4));



function argumentNames(enteredNames){
	return alert(enteredNames);
}

argumentNames("Retep");





