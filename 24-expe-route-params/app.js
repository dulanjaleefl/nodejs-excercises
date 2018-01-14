var express = require('express');

var app = express();

//making a static request
app.get('/', function(req, res){
	res.send('this is  home page');
});

// making a static request
app.get('/contact', function(req, res){
	res.send('this is contact page');
});

//making a dynamic request accessing the parameter using params
app.get('/profile/:id', function(req, res){
	res.send('You requested to see the id of' + req.params.id);
});

//app.listen(3001);