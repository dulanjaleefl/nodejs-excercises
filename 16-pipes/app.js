var http = require('http');
var fs = require('fs');

//----- location to read data from-----
//var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

//------ location to write data to-----
//var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt', 'utf8');

//----- pipng from read stream to write stram----
//myReadStream.pipe(myWriteStream);

//-----we are going to send back the contents of the readme.txt file to res---

var handleRequest = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
  //res.end('Hey ninjas');
  //-----pipng the response to myReadStream
  myReadStream.pipe(res);
}

var server = http.createServer(handleRequest);
//server.listen(3001, '127.0.0.1');
