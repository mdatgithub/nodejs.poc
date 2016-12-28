var http = require('http');


function getTime()
{
	var d = new Date();
	return d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
}



http.createServer(function(request,response){

	//response.writeHead(200, {'Content-Type': 'text/html', 'Transfer-Encoding': 'chunked'});

	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write("<div>" + getTime() + ": Request is accepted. Begin processing ...</div>")
	setTimeout(function(){
		response.write("<div>" + getTime() + ": Processing completed.</div>")
		response.end();
	}, 10000);

}).listen(8080);

console.log('Server is created in port 8080');