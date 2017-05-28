// using 'ES 2015' syntax
const http = require('http');  // http is a core module 'don;t need to npm install like 'express' 

const hostname = '127.0.0.1'; 
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-type','text.plain');
	res.end('Hello World');
});

server.listen(port , hostname ,() => {
	console.log('server started at port ' + port );
});