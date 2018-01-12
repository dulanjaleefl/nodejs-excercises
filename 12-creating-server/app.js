var http = require('http');

var server = http.createServer(function(req, res){
    console.log('the server request is at :' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey World');
});

//server.listen(3001, '127.0.0.1');
console.log('yo dawgs , yall are listening on port 3001');