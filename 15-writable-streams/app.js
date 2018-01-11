var http = require('http');
var fs = require('fs');

//location to read data from
var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
// location to write data to
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt', 'utf8');

myReadStream.on('data', function(chunk){
    console.log('new chunk revealed');
    myWriteStream.write(chunk);
});