// app/triggers.js
console.log("< Info > Module trigger.js loaded");


function clsimpleajax(req,res) {
	console.log ("Client Simple Ajax without Answer" ) ;
}


function claxtrigger(req,res) {
	console.log ("Client Single Ajax Trigger" ) ;
}
function nclaxtrigger(req,res) {
	console.log ("Client Timer Ajax Trigger" ) ;
}

function srvajaxtrigger(req,res) {
	console.log ("Server Ajax Trigger" ) ;
}
function nsrvajaxtrigger(req,res) {
	console.log ("Server Ajax Trigger" ) ;
}

function srvndtrigger(req,res) {
	console.log ("Server Node Trigger" ) ;
}
function nsrvndtrigger(req,res) {
	console.log ("Server Node Trigger" ) ;
}

exports.clsimpleajax=clsimpleajax;
exports.claxtrigger=claxtrigger;
exports.nclaxtrigger=nclaxtrigger;
exports.srvajaxtrigger=srvajaxtrigger;
exports.srvndtrigger=srvndtrigger;
exports.nsrvndtrigger=nsrvndtrigger;
exports.nsrvajaxtrigger=nsrvajaxtrigger;
