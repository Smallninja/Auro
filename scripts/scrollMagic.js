$(document).ready(function(){
		$("nav a").click(function(e){
			e.preventDefault();
			var id = "#" + $(this).data("value");
			$('html, body').animate({
				scrollTop: $(id).offset().top
			}, 200)
		});
});