function b(){
	console.log(myVar);//uses the outer environment link to look for a
	//same variable named myVar in the level "above"
}

function a(){
	var myVar = 2;
	b();
}

var myVar = 1;
a(); 

//*************** EVENT STACK **********

//longrunning funtion 
function waitThreeSeconds(){
	var ms = 3000 + new Date().getTime();
	while(new Date() < ms){}
	console.log('finished function');
}

function clickHandler(){
	console.log("clisk event");
}

//listen for the click event
document.addEventListener('click', clickHandler);

//waitThreeSeconds();
//console.log('finished execution');

//*************** Operators **********
//var a = 3 + 4;
//cosole.log(a);

//console.log(1 < 2 < 3);//true
//console.log(3 < 2 < 1);
var a;


if (a){
	console.log("got stuff here");
}

function greeting(name){
	//since Logical OR || is a function and has a high precedence, It is run first, RETURNS the value that is SET and then the equals runs, which simple sets the evaluated result of the OR
	name = name || '<default name here>';
	console.log("hello " + name);
	
}
greeting("Jason");
greeting(0);







