/* E V E N T S - MODULE */
var events = require('events');

//in jquery we use,
//element.on('click', function(){})

//creating a custom event in node
//creating a custom event-emitter called myEmitter
var myEmitter = new events.EventEmitter();

//assigning functionality to myEmitter event
myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});

//Emitting myEmitter event
myEmitter.emit('someEvent', 'the event was emitted');

/* U T I L - MODULE */
var util = require('util');

// creating a new object constructor
var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(mssg){
    console.log(person.name + ' said '+ mssg);
    });
});

james.emit('speak', 'hey dudes');
