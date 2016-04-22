// server.js

// Generate a new instance of express server.
var express = require('express')
  , http = require('http');

var app = express();

/* This will allow Cozy to run your app smoothly but
 it won't break other execution environment */
var port = process.env.OPENSHIFT_NODEJS_PORT//process.env.PORT || 9250;
var host = process.env.OPENSHIFT_NODEJS_IP //|| "127.0.0.1";

// Starts the server itself
var server = http.createServer(app).listen(port, host, function() {
  console.log("Server listening to %s:%d within %s environment",
              host, port, app.get('env'));
});

// At the root of your website, we show the index.html page
app.get('/', function(req, res) {
  res.send("Dear Kuku.\nHellooooooo, do you see my eyes. xoxoxox This is me just here to brag and say i can spy and tell you i love you.. dont roll your eyes\n Love Miki");
});