
// var cors = require('cors');     //   allow-cross-origin
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);


app.listen(3000);
console.log('Server Port : 3000 Started');

app.get('/',function(req,res){
    console.log('/no path');
    res.send("<H2> Hello World (no path) </H2>");
});

app.get('/home',function(req,res){
    console.log('/home Started');
    console.log('dir : '+__dirname);
    res.sendfile(__dirname + '/index.html');
  });

  app.get('/hello',function(req,res){
      console.log('Hello Started');
	  res.send("<H2> Hello World (no path) </H2>");
    });



app.post('/', function(req, res, next) {
  // Handle the post for this route
  });
