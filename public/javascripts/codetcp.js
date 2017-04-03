
function loadpage_tcp() {

	alert ("loadpage_tcp Done");
    $("#objbutton_post").click(function(){
	    alert ("objbutton_post Done");

      $("#objhidden").val("buttonpost");
      $("form").submit();

    });

}