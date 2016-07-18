var express = require("express")
var app = express();
var exports = module.exports = {};

app.get('/', function(req, res) {
	res.send('Hello World');
});

var server = app.listen(3000, function () {
	console.log("Listening on port %...", server.address().port);
});

exports.closeServer = function() {
	server.close();
};
