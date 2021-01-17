/*
	Express.js Static pages example
	Shows how to serve static pages along with dynamic routes
	in Express.js 4.0

	created 10 Feb 2015
	modified 4 Feb 2018
	by Tom Igoe
*/
var express = require('express');			// include express.js
var server = express();								// a local instance of it

// serve static pages from public/ directory:
app.use('/',express.static('public'));

// this runs after the server successfully starts:
function serverStart() {
  var port = this.address().port;
  console.log('Server listening on port '+ port);
}

// this is the callback function for when the client
// requests the date (a dynamic route):
function serveDate(request, response) {
	console.log('got a GET request');
	// send the response:
  var now = new Date();
	response.send("Date: " + now + "\n");
	response.end();
}

function serveHello(request, response) {
	console.log('got a GET request');
	// send the response, with request parameters:
	response.send("Hello, " + request.params.name + " at " + request.ip);
	response.end();
}

// start the server:
server.listen(process.env.PORT || 8080, serverStart);
// start the listeners for GET requests:
server.get('/date', serveDate);				  // GET handler for /date
server.get('/name/:name', serveHello);	// GET handler for /name
