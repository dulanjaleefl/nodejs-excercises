var http = require('http');
var fs = require('fs');

var handleRequests = function(req, res) {
    res.writeHead(200, {'Content-type' : 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);
}

var server = http.createServer(handleRequests);
//server.listen(3001, '127.0.0.1');