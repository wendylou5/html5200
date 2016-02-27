b();
console.log(a);


var a = "A variable";

function b(){
	console.log("called function B!");
}

if (a === undefined){
	console.log('a Var is undefined');
}else{
	console.log('a is defined');
}

function myFunctionC(){
	var innerA;
	var innerB;
	var innerC;
	
	
	function innerFunctionC(){
		var innerInnerA = "this.length";
		var innerInnerB;
		var innerInnerC;
		
		console.log(this);
		innerFunctionC();
	}
}

myFunctionC();

