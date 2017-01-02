//Demo of 'server close' event handler
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var duration = 10000;

function getTimeStr()
{
	var d = new Date();
	return d.toTimeString();
}


var server = http.createServer();

server.on('request', function(request,response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write("<div>Server is running...</div>");
	response.end();
});

server.on('close', function() {
	console.log('Server stopped after ' + duration.toString() + " ms at " + getTimeStr());
});


server.listen(8080);
console.log("Server is created in port 8080 at " + getTimeStr());

setTimeout(function(){
	server.close();
}, duration);
