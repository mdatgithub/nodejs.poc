var http = require('http');
var url = require('url');
var querystring = require('querystring');

function getTime()
{
	var d = new Date();
	return d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
}


http.createServer(function(request,response){

	var pathname = url.parse(request.url).pathname;
	var params = querystring.parse(url.parse(request.url).query);

	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write("<div> Page '" + pathname + "' is requested.</div>");

	for (var propName in params) {
		response.write("<div>" + propName + " = " + params[propName] + "</div>");
	}

	response.end();
	console.log("Page '" + pathname + "' is requested.");

}).listen(8080);

console.log('Server is created in port 8080');