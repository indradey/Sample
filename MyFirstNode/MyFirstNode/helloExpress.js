var express = require('express');
var server = express();

server.set('views',__dirname);
server.get('/', function (req,res) {
    //res.write();
    //res.end('Hello Express !!');
    //res.sendFile('C:\Users\Indranil\documents\visual studio 2017\Projects\MyFirstNode\MyFirstNode\Index.html');
    res.sendFile('index.html', { root: __dirname });
});

server.get('/Render', function (req, resp) {
    //Rendering a page
    resp.render('dynamic.ejs');
});


server.get('/Json', function (req, resp) {
    //Passing a json object
    resp.setHeader('Content-Type', 'application/json');
    resp.send(JSON.stringify({ "Name": "Indranil", "rollnumber": "115032" }));
});

server.listen(8090);