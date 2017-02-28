global.__root = __dirname + "/";

var path        = require('path');
var express     = require('express');
var http        = require('http');
var settings    = require('./server/config/settings');
var environment = require(__root+'/server/config/env');
var routes      = require(__root+'/server/config/routes');

module.exports.start = function (done) {
  var app = express();

  process.on("uncaughtException", function (err) {
    console.log("Caught exception: " + err); // eslint-disable-line
  });

  environment(app);
  routes(app);

  var server = http.createServer(app);

  server.listen(settings.port, function () {
    console.log( ("Listening on port " + settings.port) );

    if (done) {
      return done(null, app, server);
    }
  }).on('error', function (e) {
    if (e.code == 'EADDRINUSE') {
      console.log('Address in use. Is the server already running?');
    }
    if (done) {
      return done(e);
    }
  });
}

// If someone ran: "node server.js" then automatically start the server
if (path.basename(process.argv[1],'.js') == path.basename(__filename,'.js')) {
  module.exports.start()
}
