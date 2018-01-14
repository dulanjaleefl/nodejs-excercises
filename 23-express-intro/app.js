// require module
var express = require('express');

//setup app
var app = express();

//---responding to a get request
app.get('/', function(req, res){
	res.send('this is the home page');
});

//setting up another route
app.get('/contact', function(req, res){
	res.send('this is the contact page');
});

//---listening to ports
//app.listen(3001);