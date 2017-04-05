
function loadpage_trigger() {


    $("#btn_axtrig").click(function(){
        ajax_01_sendtrigger();
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
function ajax_01_sendtrigger(){

    var strData = JSON.stringify({REQUEST: "IOBoard"});

    $.ajax({
        url: "/ajaxtrigger",
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