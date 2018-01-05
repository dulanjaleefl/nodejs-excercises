//function 01
var counter = function(array) {
return 'there are ' + array.length + ' elements in this array'
};

//function 02
var adder = function(a, b){
    //embeded within a template string
    return `the sum of the two numbers is ${a + b}` ;
}

//function 03
var pi = 3.14;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

/*
A L T E R N A T E 01

//function 01
module.exports.counter = function(array) {
return 'there are ' + array.length + ' elements in this array'
};

//function 02
module.exports.adder = function(a, b){
    //embeded within a template string
    return `the sum of the two numbers is ${a + b}` ;
}

//function 03
module.exports.pi = 3.14;

*/

/*
A L T E R N A T E 02

//function 01
var counter = function(array) {
return 'there are ' + array.length + ' elements in this array'
};

//function 02
var adder = function(a, b){
    //embeded within a template string
    return `the sum of the two numbers is ${a + b}` ;
}

//function 03
var pi = 3.14;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}

*/

