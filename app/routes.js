// app/routes.js

// load the todo model

//var Todo = require('./models/todo');  
var Todo = require('../models/todo');
var mLogger = require('../app/mongoLogger');            // load the MongoLogger
var ntriggers = require('../app/triggers');            // load the MongoLogger
var conjson;
//var contentfile = __dirname + '/data/data.json';
var contentfile = '/home/pi/coding_node/node_base_0.4/data/data.json';

var fs = require('fs');
// expose the routes to our app with module.exports
module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) {

        console.log(" POST /api/todos");

    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {

        console.log(" POST /api/todos");

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {

        console.log(" POST /api/todos");

    });


    app.post('/Ajax_getLogs', mLogger.getCompleteLog);



    // application -------------------------------------------------------------

    // HTML Teil
    /*
    app.get('/to', function (req, res) {       // This will load the single index.html file when we hit localhost:8080
        console.log("< Info > GET Slash Call");
        res.sendfile('./views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });*/

    app.get('/overview', function (req, res) { console.log("< Info >  GET /overview"); });
    app.get('/api/todos', function (req, res) { console.log("< Info >  GET /api/todos"); });


    // ############ pure html send ############
    // bs_min
    app.get('/bs_min', function (req, res) {
        console.log("< Info > GET Slash Call");
        res.sendfile('./views/others/bs_min.html'); // load the single view file (angular will handle the page changes on the front-end)
    }); 

    // bs_dashboard_index
    app.get('/bs_dashboard_index', function (req, res) {
        console.log("< Info > GET Slash Call");
        res.sendfile('./views/others/bs_dashboard_index.html'); // load the single view file (angular will handle the page changes on the front-end)
    }); 

    // bs_theme_index
    app.get('/bs_theme_index', function (req, res) {
        console.log("< Info > GET Slash Call");
        res.sendfile('./views/others/bs_theme_index.html'); // load the single view file (angular will handle the page changes on the front-end)
    }); 

    // mein UI als pure html
    app.get('/bs_myUI_index', function (req, res) {
        console.log("< Info > GET bs_admin_index");
        res.sendfile('./views/others/bs_myUI_index.html'); // load the single view file (angular will handle the page changes on the front-end)
    }); 


    // ######## jade / puge testings ####
    // Test Jade Clean Website
    app.get('/testjade', function (req, res) {
        console.log("< Info >  GET /newjade RENDER");
        res.render('jadepug/testjade',
            { title: 'Home' }
        )
    })

    // Simple HV Jade Rebuild
    app.get('/hvjade', function (req, res) {
        console.log("< Info >  GET /hvjade RENDER");
        res.render('jadepug/hvjade_index',
            { title: 'Home' }
        )
    })

    // Jade simple Page header and content
    app.get('/simplejade', function (req, res) {
        console.log("< Info >  GET /simplejade RENDER");
        res.render('simplejade_index',
            { title: 'Home' }
        )
    })

    // New Jade Interface
    app.get('/index', function (req, res) {
        console.log("< Info > GET Slash Call");
        res.sendfile('./views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    }); 


    app.get('/pugindex', function (req, res) {
    	res.render('jadepug/pugindex', { title: 'Hey', message: 'Hello there!' })
    })

        // mein UI als Jade
    app.get('/bs_myUI_jdindex', function (req, res) {
        console.log("< Info >  GET /newjade RENDER");
        res.render('jadepug/bs_myUI_jdindex',
            { title: 'bs_myUI_jdindex' }
        )
    })

        // mein UI als Jade mit jquery nachload
    app.get('/bs_myUI_jqueryindex', function (req, res) {
        console.log("< Info > GET Slash Call");
        res.sendfile('./views/jadepug/bs_myUI_jqueryindex.html'); // load the single view file (angular will handle the page changes on the front-end)
    }); 


    // ######## Pug UI  ########
	app.get('/bs_myUI_pug_about', function (req, res) {
	  res.render('pugUI/bs_myUI_pug_about', { title: 'Hey', message: 'Hello there!' })
	})

	app.get('/bs_myUI_pugindex', function (req, res) {
	  res.render('pugUI/bs_myUI_pugindex', { title: 'Hey', message: 'Hello there!' })
	})

	app.get('/bs_myUI_pug_ajax', function (req, res) {
        conjson = JSON.parse(fs.readFileSync(contentfile).toString());
	  res.render('pugUI/bs_myUI_pug_ajax', { title: 'Hey', message: 'Hello there!' , conobj : conjson })
	})

	app.get('/bs_myUI_pug_post', function (req, res) {
        conjson = JSON.parse(fs.readFileSync(contentfile).toString());
	  res.render('pugUI/bs_myUI_pug_post', { title: 'Hey', message: 'Hello there!', conobj : conjson })
	})

    app.get('/bs_myUI_pug_mongoose', function (req, res) {
	  res.render('pugUI/bs_myUI_pug_mongoose', { title: 'Hey', message: 'Hello there!' })
	})

    app.get('/bs_myUI_pug_trigger', function (req, res) {
	  res.render('pugUI/bs_myUI_pug_trigger', { title: 'Hey', message: 'Hello there!' })
	})

    app.get('/bs_myUI_pug_tcp', function (req, res) {
	  res.render('pugUI/bs_myUI_pug_tcp', { title: 'Hey', message: 'Hello there!' })
	})

    app.get('/bs_myUI_pug_highchart', function (req, res) {
	  res.render('pugUI/bs_myUI_pug_highchart', { title: 'Hey', message: 'Hello there!' })
	})

    app.post('/sendpostdata', function (req, res) {
        console.log ("sendpostdata" ) 
        console.log ("contentA: " + req.body.contentA ) ;
        console.log ("contentB: " + req.body.contentB );
        res.redirect("back");
    });

    app.post('/Ajax_RequestJSONElement', Ajax_RequestJSONElement);
    
    
    app.post('/ax_tcpserver', function (req, res) {
        console.log ("ax_tcpserver" ) 
    });
    
    app.post('/ax_tcpclient', function (req, res) {
        console.log ("ax_tcpclient" ) 
    });
    
    
    app.post('/clsimpleajax', ntriggers.clsimpleajax);
    app.post('/claxtrigger', ntriggers.claxtrigger);
    app.post('/nclaxtrigger', ntriggers.nclaxtrigger);
    
    app.post('/srvndtrigger', ntriggers.srvndtrigger);
    app.post('/nsrvndtrigger', ntriggers.nsrvndtrigger);
    
    app.post('/srvajaxtrigger', ntriggers.srvajaxtrigger);
    app.post('/nsrvajaxtrigger', ntriggers.nsrvajaxtrigger);



};



function Ajax_RequestJSONElement(req,res)
{
    console.log("# serverajaxcalls::Ajax_RequestJSONElement : " + req.body.REQUEST);

    //var dataSection = paramscode.findlevel1(req.body.REQUEST);

    res.contentType('json');
    //res.send({ data: dataSection });
    res.send({ data: "Done" });

}

function najaxtrigger(req,res)
{
	console.log("# Timer Client Ajax Trigger");
    console.log("# serverajaxcalls::ajaxtrigger : " + req.body.REQUEST);

    //var dataSection = paramscode.findlevel1(req.body.REQUEST);

    res.contentType('json');
    //res.send({ data: dataSection });
    res.send({ data: "Done" });

}

function ajaxtrigger(req,res)
{
	console.log("# Single Client Ajax Trigger");
    console.log("# serverajaxcalls::ajaxtrigger : " + req.body.REQUEST);

    //var dataSection = paramscode.findlevel1(req.body.REQUEST);

    res.contentType('json');
    //res.send({ data: dataSection });
    res.send({ data: "Done" });

}