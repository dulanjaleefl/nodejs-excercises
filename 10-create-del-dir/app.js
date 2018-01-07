var fs = require('fs');


/* DELETING A FILE------

fs.unlink('readme.txt');
-----------------------*/

/* CREATING A DIRECTORY----

fs.mkdirSyn('stuff');
fs.mkdir('stuff', function(){});
------------------------*/

/* REMOVING A DIRECTORY----

fs.rmdirSyn('stuff');
fs.rmdir('stuff', function(){});
------------------------*/

/* delete file inside stuff dir,and then removing stuff dir*/
fs.unlink('./stuff/readme.txt', function(){
    fs.rmdir('stuff', function(){
        console.log('the stuff directory removed');
    });
});

