
// server.js (new)
// set up ======================================================================
var express = require('express');
var app = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var port = process.env.PORT || 8080;                // set the port

var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

var database = require('./config/database');            // load the database config
var mLogger = require('./app/mongoLogger');            // load the MongoLogger
var ndDummy = require('./app/ndDummy');            // load the MongoLogger



// configuration ===============================================================


    //app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.set('view options',{layout:false});


app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// routes ==============================================================
require('./app/routes')(app);


mLogger.writeLog("Start me up");
//mLogger.showCompleteLog();

/**
 * @param {string } tripple

 * This is a description of the foo function. */
function foo(tripple) {
}

// listen (start app with node server.js) ======================================
if (!module.parent) {
  app.listen(8080);
  console.log('++++++++++++++++  node server running +++++++++++++++++++');
  console.log("App listening on port 8080");
  console.log("< Info > NodeJS Version: " + process.version);
}