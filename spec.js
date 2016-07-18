var request = require('supertest');
var server;

describe('loading express', function () {

	beforeEach(function() {
		server = require("./app.js");
	});

	afterEach(function() {
		server.closeServer();
	});
	
	it('responds to /', function testSlash(done) {
		request(server)
			.get('/')
			.expect(200, done);
	});

	it('everything else is 404', function testPath(done) {
		request(server)
			.get('/bubble/tea')
			.expect(404, done);
	});

});
