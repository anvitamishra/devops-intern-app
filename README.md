This is a simple REST API server with one endpoint. The application prints 'Hello Unu' on the browser.

The development is done using Node.js and the app is tested using Mocha and Chai frameworks. 

<h1><b>Heroku for deployment:</b></h1>

The application is deployed on Heroku. Heroku allows for horizontal scaling of applications using CLI as well as Heroku's dashboard for the application.

To install, here's the setup guide:
https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

To scale the application:
Change the web # to the scale you want in the following command:

`heroku ps:scale web=0`

This project is titled "boiling-hollows-76439" on Heroku.

Link for Hello Unu:
https://boiling-hollows-76439.herokuapp.com/

<h1><b>Mocha for testing:</b></h1>

This app uses Mocha with Chai for integration and unit testing.
To run the tests:

`npm test`

<h1><b>Integration on Codeship:</b></h1>
Continuous integration is handled on Codeship (an add-on in GitHub and Heroku)

(Check out the demo folder to see it in action).





