var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	if(req.url === '/home' || req.url === '/'){
		res.writeHead(200, {'Content-Type' : 'text/html'});
		fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
	} else if(req.url === '/contact'){
		res.writeHead(200, {'Content-Type' : 'text/html'});
		fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
	} else if(req.url === '/api'){
		res.writeHead(200, {'Content-Type' : 'application/json'});
		var myObj = {
			name: 'Dinu',
			job: 'Nomad',
			age: '29'
		}
		res.end(JSON.stringify(myObj));
	}else{
		res.writeHead(404, {'Content-Type' : 'text/html'});
		fs.createReadStream(__dirname + '/error.html', 'utf8').pipe(res);
	}
});

server.listen(3001, '127.0.0.1');