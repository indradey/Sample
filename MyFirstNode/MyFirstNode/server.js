'use strict';
var http = require('http');
var port = process.env.PORT || 1338;

var fs = require("fs");
var data = fs.readFileSync('Note.txt'); 

var events = require("events");
var eventemitter = new events.EventEmitter();

var eventHandler = function () {
    eventemitter.emit('This is from first place');
};

eventemitter.on("eventName", eventHandler);
eventemitter.emit('This is from the event');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.write(data.toString());
    res.end('Hello World\n');
}).listen(port);

