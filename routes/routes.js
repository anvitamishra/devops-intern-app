'use strict';

var HAProxy = require('haproxy');
var haproxy = new HAProxy('/optional/socket/path.sock', { /*options */ });

var appRouter = function(app) {
	app.get("/", function(req, res) {
		res.send("Hello World");
	});
	
}
	
module.exports = appRouter;
