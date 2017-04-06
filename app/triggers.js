// app/triggers.js
console.log("< Info > Module trigger.js loaded");

function claxtrigger(req,res) {
	console.log ("Client Single Ajax Trigger" ) ;
}
function nclaxtrigger(req,res) {
	console.log ("Client Timer Ajax Trigger" ) ;
}

function srvajaxtrigger(req,res) {
	console.log ("Server Ajax Trigger" ) ;
}

function srvndtrigger(req,res) {
	console.log ("Server Node Trigger" ) ;
}

exports.claxtrigger=claxtrigger;
exports.nclaxtrigger=nclaxtrigger;
exports.srvajaxtrigger=srvajaxtrigger;
exports.srvndtrigger=srvndtrigger;