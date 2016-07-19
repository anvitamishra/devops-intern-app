var request = require("request");
var assert = require('assert');
var baseURL = "http://localhost:3000/";
var server = require("../app.js");

describe("Hello Unu App Server", function() {
	describe("GET /", function() {
		it("return status 200 OK", function(done) {
			request.get(baseURL, function(error, response, body) {
				assert.equal(200, response.statusCode);
				done();
			});
		});
		it("get Hello Unu", function(done) {
			request.get(baseURL, function(error, response, body) {
				assert.equal("Hello Unu", body);
				server.closeServer();
				done();
			});
		});
	});
});
