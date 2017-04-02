
function loadpage_highchart() {

	alert ("loadpage_highchart Done");
    $("#objbutton_post").click(function(){
	    alert ("objbutton_post Done");

      $("#objhidden").val("buttonpost");
      $("form").submit();

    });

}