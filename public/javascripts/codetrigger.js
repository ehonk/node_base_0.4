
function loadpage_trigger() {


    $("#btn_claxtrig").click(function(){
        ax_01_clsendtrigger();
    });
    $("#btn_nclaxtrig").click(function(){
    	ax_01_nclsendtrigger();
    });
    
    
    $("#btn_srvnodetrig").click(function(){
        ax_01_srvndtrigger();
    });
    
    $("#btn_srvajaxtrig").click(function(){
        ax_01_srvajaxtrigger();
    });
    
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
            alert ("data.data");

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