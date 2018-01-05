//normal function statements
function sayHi(){
	console.log('Hi');
}
sayHi();

//function expression
var sayBye = function() {
	console.log('Bye');
}

sayBye();

//passing a function as an argument
function callFunction(fun) {
	fun();
}

callFunction(sayHi);