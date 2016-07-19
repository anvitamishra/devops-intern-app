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

<h3> Some terms related to scaling: </h3>

Cluster = a group of servers

Load-balancer = distributes work-load between servers in a cluster

To horizontally scale the app, one or more web-servers can be added to the cluster to handle more requests from the user.

<h3> Scenario: </h3>

Hello Unu has two servers which handle requests from the user.
User A from Unu wants someone to say "Hello" to him. He makes a request and the loadbalancer will forward his request to server1. Then User B wants someone to say "Hello" to her. Her request gets forwarded to another node from the cluster i.e. server2. Then 100 other users want someone to say "Hello" to them. So we can scale the app and add more servers so they can balance the load of the requests on the application.

<h1><b>Mocha for testing:</b></h1>

This app uses Mocha with Chai for integration and unit testing.
To run the tests:

`npm test`

<h1><b>Integration on Codeship:</b></h1>
Continuous integration is handled on Codeship (an add-on in GitHub and Heroku)

(Check out the demo folder to see it in action).





