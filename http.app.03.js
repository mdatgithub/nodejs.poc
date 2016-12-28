var http = require('http');
var url  = require('url');

function getTime()
{
	var d = new Date();
	return d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
}


http.createServer(function(request,response){

	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write("<div> Page '" + url.parse(request.url).pathname + "' is requested.</div>")
	console.log("Page '" + url.parse(request.url).pathname + "' is requested.")
	response.end();

}).listen(8080);

console.log('Server is created in port 8080');