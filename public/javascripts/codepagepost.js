
function loadpage_post() {

	alert ("loadpage_post Done");
    $("#objbutton_post").click(function(){
	    alert ("objbutton_post Done");

      $("#objhidden").val("buttonpost");
      $("form").submit();

    });

}