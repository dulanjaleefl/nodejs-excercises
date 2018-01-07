var fs = require('fs');

//reading the file
var readme = fs.readFileSync('readme.txt', 'utf8');
//console.log(readme);

//writing the file
fs.writeFileSync('writeme.txt', readme);

/*

//async version of reading the file
fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFile('new.txt', 'data');
    );
});

*/