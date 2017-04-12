
function loadpage_trigger() {

	console.info ("## JQuery Core: " + $.fn.jquery);
	
    $("#btn_simpleajax").click(function(){
        ax_01_simpleajax();
    });
	
    $("#btn_protoaxtrig").click(function(){
        ax_01_protoaxtrig();
    });

    $("#btn_claxtrig").click(function(){
        ax_01_clsendtrigger();
    });

    

    $("#btn_nclaxtrig").click(function(){
    	ax_01_nclsendtrigger();
    });
    
    
    $("#btn_srvnodetrig").click(function(){
        ax_01_srvndtrigger();
    });
    $("#btn_nsrvnodetrig").click(function(){
        ax_01_nsrvndtrigger();
    });
    
    $("#btn_srvajaxtrig").click(function(){
        ax_01_srvajaxtrigger();
    });
    $("#btn_nsrvajaxtrig").click(function(){
        ax_01_nsrvajaxtrigger();
    });
}


function ax_01_protoaxtrig(){

    var strData = JSON.stringify({REQUEST: "IOBoard"});

    $.ajax({
        url: "/protoaxtrig",
        type: "POST",
        dataType: "json",
        data: strData,
        contentType: "application/json",
        cache: false,
        timeout: 1000,
        complete: function()
        {
          //called when complete
//          console.info('process complete');
        },
        success: function(data)
        {
//            loadOverviewSystemMessages_01_AnalogIn(data.data, SystemMessage);
           // loadOverviewSystemMessages_02_preLoadCommunication(data.data, SystemMessage);
//            IO_Environment(data.data );

            $("#nodeanswer").val( data.data  );
        },
        error: function(jqXHR, textStatus, err)
        {
            console.info('error complete');
        }
      });
}

function ax_01_simpleajax(){

	
	console.info (" Simple Ajax Call");
	
//    var strData = JSON.stringify({REQUEST: "IOBoard"});

    $.ajax({
    	url: "/clsimpleajax", 
    	type: "POST",
    	success: function(result){
    		console.info('process complete');
    }});
    
//    $.ajax({
//        url: "/clsimpleajax",
//        type: "POST",
//        dataType: "json",
//        contentType: "application/json",
//        cache: false,
//        timeout: 1000,
//        complete: function()
//        {
//          //called when complete
//          console.info('process complete');
//        },
//        success: function(data)
//        {
////            loadOverviewSystemMessages_01_AnalogIn(data.data, SystemMessage);
//           // loadOverviewSystemMessages_02_preLoadCommunication(data.data, SystemMessage);
////            IO_Environment(data.data );
//
//            $("#nodeanswer").val("Node Answer Success");
//        },
//        error: function(jqXHR, textStatus, err)
//        {
//            console.info('error complete: ' + err + " Textstatus: " + textStatus);
//        }
//      });
}

function ax_01_srvndtrigger(){

    var strData = JSON.stringify({REQUEST: "IOBoard"});

    $.ajax({
        url: "/srvndtrigger",
        type: "POST",
        dataType: "json",
        data: strData,
        contentType: "application/json",
        cache: false,
        timeout: 1000,
        complete: function()
        {
          //called when complete
//          console.info('process complete');
        },
        success: function(data)
        {
//            loadOverviewSystemMessages_01_AnalogIn(data.data, SystemMessage);
           // loadOverviewSystemMessages_02_preLoadCommunication(data.data, SystemMessage);
//            IO_Environment(data.data );
            alert ("data.data");

        },
        error: function(jqXHR, textStatus, err)
        {
            console.info('error complete');
        }
      });
}

function ax_01_nsrvndtrigger(){

    var strData = JSON.stringify({REQUEST: "IOBoard"});

    $.ajax({
        url: "/nsrvndtrigger",
        type: "POST",
        dataType: "json",
        data: strData,
        contentType: "application/json",
        cache: false,
        timeout: 1000,
        complete: function()
        {
          //called when complete
//          console.info('process complete');
        },
        success: function(data)
        {
//            loadOverviewSystemMessages_01_AnalogIn(data.data, SystemMessage);
           // loadOverviewSystemMessages_02_preLoadCommunication(data.data, SystemMessage);
//            IO_Environment(data.data );
            alert ("data.data");

        },
        error: function(jqXHR, textStatus, err)
        {
            console.info('error complete');
        }
      });
}

function ax_01_srvajaxtrigger(){

    var strData = JSON.stringify({REQUEST: "IOBoard"});

    $.ajax({
        url: "/srvajaxtrigger",
        type: "POST",
        dataType: "json",
        data: strData,
        contentType: "application/json",
        cache: false,
        timeout: 1000,
        complete: function()
        {
          //called when complete
//          console.info('process complete');
        },
        success: function(data)
        {
//            loadOverviewSystemMessages_01_AnalogIn(data.data, SystemMessage);
           // loadOverviewSystemMessages_02_preLoadCommunication(data.data, SystemMessage);
//            IO_Environment(data.data );
            alert ("data.data");

        },
        error: function(jqXHR, textStatus, err)
        {
            console.info('error complete');
        }
      });
}


function ax_01_nsrvajaxtrigger(){

    var strData = JSON.stringify({REQUEST: "IOBoard"});

    $.ajax({
        url: "/nsrvajaxtrigger",
        type: "POST",
        dataType: "json",
        data: strData,
        contentType: "application/json",
        cache: false,
        timeout: 1000,
        complete: function()
        {
          //called when complete
//          console.info('process complete');
        },
        success: function(data)
        {
//            loadOverviewSystemMessages_01_AnalogIn(data.data, SystemMessage);
           // loadOverviewSystemMessages_02_preLoadCommunication(data.data, SystemMessage);
//            IO_Environment(data.data );
            //alert ("data.data");
            $("#nodeanswer").val( data.data  );

        },
        error: function(jqXHR, textStatus, err)
        {
            console.info('error complete');
        }
      });
}

function ax_01_clsendtrigger(){

    var strData = JSON.stringify({REQUEST: "IOBoard"});

    $.ajax({
        url: "/claxtrigger",
        type: "POST",
        dataType: "json",
        data: strData,
        contentType: "application/json",
        cache: false,
        timeout: 1000,
        complete: function()
        {
          //called when complete
//          console.info('process complete');
        },
        success: function(data)
        {
//            loadOverviewSystemMessages_01_AnalogIn(data.data, SystemMessage);
           // loadOverviewSystemMessages_02_preLoadCommunication(data.data, SystemMessage);
//            IO_Environment(data.data );

            $("#nodeanswer").val( data.data  );
        },
        error: function(jqXHR, textStatus, err)
        {
            console.info('error complete');
        }
      });
}


function ax_01_nclsendtrigger(){

    var strData = JSON.stringify({REQUEST: "IOBoard"});

    $.ajax({
        url: "/nclaxtrigger",
        type: "POST",
        dataType: "json",
        data: strData,
        contentType: "application/json",
        cache: false,
        timeout: 5000,
        complete: function()
        {
          //called when complete
//          console.info('process complete');
        },
        success: function(data)
        {
//            loadOverviewSystemMessages_01_AnalogIn(data.data, SystemMessage);
           // loadOverviewSystemMessages_02_preLoadCommunication(data.data, SystemMessage);
//            IO_Environment(data.data );
            $("#nodeanswer").val( data.data  );

        },
        error: function(jqXHR, textStatus, err)
        {
            console.info('error complete');
        }
      });
}