import { Server } from "http";


var http = require('http');

var hostname = '127.0.0.1';
var data = "{'hello': 'ne'}"
var port = 3000;
var server:Server = http.createServer(function(req,res){
    res.statusCode = 200;
    res.setHeader('Content-type', 'Application/JSON');
    res.end(data)
    
});


server.listen(port,hostname, function(){
    console.log("server runniing at http://"+hostname+":" + port )
})