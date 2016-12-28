var http = require('http');
var fs = require('fs');



http.createServer(function(request,response){

	response.writeHead(200, {'Content-Type': 'image/jpeg'});

	fs.readFile('image.jpg', (error,content) => {
		if(error)
			throw error;

		response.wtite(content);
		response.end();
	});

}).listen(8080);

console.log('Server is created in port 8080');