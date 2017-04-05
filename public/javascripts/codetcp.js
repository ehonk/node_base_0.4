
function loadpage_tcp() {

	
    $("#btn_tcpclient").click(function(){
    	tcpclient_01_btn();

    });
    $("#btn_tcpserver").click(function(){
    	tcpserver_01_btn();

    });
}

function tcpserver_01_btn(){

    var strData = JSON.stringify({REQUEST: "IOBoard"});

    $.ajax({
        url: "/ax_tcpserver",
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

function tcpclient_01_btn(){

    var strData = JSON.stringify({REQUEST: "IOBoard"});

    $.ajax({
        url: "/ax_tcpclient",
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