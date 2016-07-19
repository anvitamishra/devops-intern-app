var request = require("request");
var assert = require('assert');
var baseURL = "http://localhost:3000/";
var server = require("../app.js");

describe("Hello World App Server", function() {
	describe("GET /", function() {
		it("return status 200 OK", function(done) {
			request.get(baseURL, function(error, response, body) {
				assert.equal(200, response.statusCode);
				done();
			});
		});
		it("get Hello World", function(done) {
			request.get(baseURL, function(error, response, body) {
				assert.equal("Hello World", body);
				server.closeServer();
				done();
			});
		});
	});
});
