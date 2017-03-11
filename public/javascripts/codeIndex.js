

function Index_Load() {
    //console.info ("## JQuery Core: " + $.fn.jquery + " JQuery UI " + $.ui.version);
    console.info("## Index_Load");
    console.info("## JQuery Core: " + $.fn.jquery);
    console.info("## angular : " + angular.version.full);

    console.info("## Ajax Call : ");
    loadLogs();
}


function loadLogs() {

    console.info("# codeIndex::loadLogs");
    var strData = JSON.stringify({ strData: "All" });


    $.ajax({
        url: "/Ajax_getLogs",
        type: "POST",
        dataType: "json",
        data: strData,
        contentType: "application/json",
        cache: false,
        timeout: 5000,
        complete: function () {
            //called when complete
            console.log('process complete');
        },
        success: function (data) {
            console.info("success");
            console.log('data: ' + data);
            console.log('data.data: ' + data.data);
            //var jsondata = JSON.parse(data.data);
            $.each(data.data, function (key, val) {

                    	//console.info ("key: " + key + " val: " + val);
                        console.info ("## author : " + val["author"] );
                        console.info ("## module : " + val["module"] );
                        console.info ("## date : " + val["date"] );
                        console.info ("## date : " + val["comments"] );
                        console.info("-----------------------------------------");
                        //.each(val, function (key2, val2) {
                          //  console.info ("key:2 " + key2 + " val2: " + val2);
                           // });

            });
            //        	showStatusHistory(data);

        },
        error: function (jqXHR, textStatus, err) {
            console.info("# ERROR codeIndex::loadLogs");
        }
    });
}