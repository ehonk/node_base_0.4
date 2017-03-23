
function loadpage_ajax() {

	
    $("#objbutton_ajax").click(function(){

        alert("objbutton_ajax");

    });

    ajax_01_getdata();

}

function ajax_01_getdata(){

    var strData = JSON.stringify({REQUEST: "IOBoard"});

    $.ajax({
        url: "/Ajax_RequestJSONElement",
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

function ajax_02_filldata(){

                if (typeof data.value == 'number'){
              if (!isNaN( (data.value*data.conversion).toFixed(3) ))
//        	$("#txtFlow").val( (data.value*data.conversion).toFixed(3) );
                $("#txtFlow").text( (data.value*data.conversion).toFixed(3) );
//                $('#spanAInMax' + vChannelSelected).text(  $('#displayMaxHeight').val() );
            }
            else
              $("#txtFlow").text( "---" );
//              $("#txtFlow").val( "---" );
}