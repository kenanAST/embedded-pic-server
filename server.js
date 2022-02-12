const http = require('http');
const fs = require('fs');
const url = require('url');

const template = fs.readFileSync('templates/index.html', 'utf-8');
const style = fs.readFileSync('templates/styles.css', 'utf-8');
const data = fs.readFileSync('data.json', 'utf-8');
const dataObj = JSON.parse(data);
let output = template.replace('{{style}}', style);
output = template.replace('{{data}}', dataObj.name);

const server = http.createServer((request, response) => {
	const query = url.parse(request.url, true).query.data;
	if (query) {
		// output = output.replace('{{data}}', query);
		dataObj.name = query;
		fs.writeFileSync('data.json', JSON.stringify(dataObj));
		output = template.replace('{{data}}', dataObj.name);
		response.end(output);
	} else {
		response.end(output);
	}
});

server.listen('8000', '127.0.0.1');
