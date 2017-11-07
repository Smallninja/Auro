$(document).ready(function(){
	var $input = $("input[name='selected']");
	var value = "";
	function getId(){
		value = "#" + $(this).data("value");
		$(".selected").fadeOut(50).removeClass("selected");
		$(value).fadeIn(50).addClass("selected");
	}
	$input.click(getId);
});