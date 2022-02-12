const http = require('http');
const fs = require('fs');
const url = require('url');

const data = fs.readFileSync('templates/index.html', 'utf-8');
const style = fs.readFileSync('templates/styles.css', 'utf-8');

const server = http.createServer((request, response) => {
	const query = url.parse(request.url, true).query.data;
	if (query) {
		console.log(query);
	}
	response.end(data.replace('{{style}}', style));
});

server.listen('8000', '127.0.0.1');
