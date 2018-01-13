var http = require('http');
var fs = require('fs');
 
var handleRequests = function(req, res){
	res.writeHead(200, {'Content-Type': 'application/json'});
	var myObj = {
	name : 'Riz',
	job : 'nomad',
	age : 28
	};
	res.end(JSON.stringify(myObj));
};

var server = http.createServer(handleRequests);
//server.listen(3001, '127.0.0.1');
