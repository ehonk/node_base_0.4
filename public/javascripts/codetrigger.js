
function loadpage_trigger() {


    $("#objbtn_ajaxtrig").click(function(){
        ajax_01_sendtrigger();
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