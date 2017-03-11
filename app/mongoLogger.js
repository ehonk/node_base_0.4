// app/mongoLogger.js
console.log("< Info > Module mongoLogger.js loaded");
var mongoose = require('mongoose');
var database = require('../config/database');            // load the database config

mongoose.connect(database.url);
var Schema = mongoose.Schema;

var logSchema = new Schema({
	author: String,
	module: String,
	comments: String,
	date: { type: Date, default: Date.now },
	hidden: Boolean
});


function writeLog(sText) {



	var Log = mongoose.model('Log', logSchema);
	var logline = new Log({ author: 'nodejs', module: 'server.js' , comments: sText   });



	logline.save(function (err, logline) {
		if (err) return console.error(err);
		console.log('mongoose saved');
	});

}

function showCompleteLog() {

	var Log = mongoose.model('Log', logSchema);
	Log.find({}, function (err, users) {
		if (err) throw err;

		// object of all the users
		console.log(users);
	});

}

function getCompleteLog(req, res) {

console.log("getCompleteLog");

	var Log = mongoose.model('Log', logSchema);
	Log.find({}, function (err, logs) {
		if (err) throw err;

		// object of all the users
		//console.log(logs);

		    res.contentType('json');
    		res.send({data: logs});
	});

}

/*
FIND ONE

// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});*/

exports.writeLog = writeLog;
exports.showCompleteLog = showCompleteLog;
exports.getCompleteLog = getCompleteLog;
