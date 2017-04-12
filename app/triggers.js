// app/triggers.js
console.log("< Info > Module trigger.js loaded");


function clsimpleajax(req,res) {
	console.log ("Client Simple Ajax without Answer" ) ;
}


function protoaxtrig(req,res) {
	console.log ("Client Single Ajax Trigger" ) ;

	    //var dataSection = paramscode.findlevel1(req.body.REQUEST);

    res.contentType('json');
    //res.send({ data: dataSection });
	//new Date().getTime();
    res.send({ data: "Hello from Nodes | Prototyp" });

}

function claxtrigger(req,res) {
	console.log ("Client Single Ajax Trigger" ) ;

	    //var dataSection = paramscode.findlevel1(req.body.REQUEST);

    res.contentType('json');
    //res.send({ data: dataSection });
	//new Date().getTime();
    res.send({ data: "Hello from Nodes | Client Single Ajax" });

}
function nclaxtrigger(req,res) {
	console.log ("Client Timer Ajax Trigger" ) ;
   
	setTimeout( function(){ sendAjax(res); } , 1000);

	setTimeout( function(){ sendAjax(res); } , 3000);

}

function sendAjax(res){
	
	console.log ("sendAjax" ) ;
    res.contentType('json');
    //res.send({ data: dataSection });
	//new Date().getTime();
    res.send({ data: "Hello from Nodes | Client Timer Ajax" });
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

exports.protoaxtrig=protoaxtrig;
exports.clsimpleajax=clsimpleajax;
exports.claxtrigger=claxtrigger;
exports.nclaxtrigger=nclaxtrigger;
exports.srvajaxtrigger=srvajaxtrigger;
exports.srvndtrigger=srvndtrigger;
exports.nsrvndtrigger=nsrvndtrigger;
exports.nsrvajaxtrigger=nsrvajaxtrigger;
