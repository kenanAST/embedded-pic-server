const http = require('http');
const networkInterface = require('os');

const server = http.createServer((request, response) => {
	console.log(request.socket.localAddress);
	response.end('Hello World');
});

server.listen('8000', '127.0.0.1');
