'use strict';

var HAProxy = require('haproxy');
var haproxy = new HAProxy('/optional/socket/path.sock', { /*options */ });

var appRouter = function(app) {
	app.get("/", function(req, res) {
		res.send("Hello World");
	});
	
	// app.get("/account", function(req, res) {
	// 	var accountMock = {
	// 		"username": "amishra",
	// 		"password": "1234",
	// 		"instagram": "@anvitamishra"
	// 	}
	// 	if(!req.query.username) {
	// 		return res.send({"status": "error", "message": "missing"});
	// 	} else if (req.query.username != accountMock.username) {
	// 		return res.send({"status": "error", "message": "wrong username"});
	// 	} else {
	// 		return res.send(accountMock);
	// 	}
	// });
	
	// app.post("/account", function(req, res) {
	// 	if(!req.body.username || !req.body.password || !req.body.instagram) {
	// 		return res.send({"status": "error", "message": "missing a parameter"});
	// 	} else {
	// 		return res.send(req.body);
	// 	}
	// });
}
	
module.exports = appRouter;
