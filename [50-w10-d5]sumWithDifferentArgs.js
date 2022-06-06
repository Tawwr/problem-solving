//Write a sum method which will work properly when invoked using either
//syntax below?
//sum(2,3) // return  5
//sum(2)(3) // return 5

//Solution:

//#1
function sum(x) {
	if (arguments.length == 2) {
		return arguments[0] + arguments[1];
	} else {
		return function (y) {
			return x + y;
		};
	}
}

//#2
function sum(x, y) {
	if (y !== undefined) {
		return x + y;
	} else {
		return function (y) {
			return x + y;
		};
	}
}
