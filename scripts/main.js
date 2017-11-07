$(document).ready(function(){
	// SLider
	var timer = 0;
	var $slider = $("#long-slider");
	var leftPos = $slider.scrollLeft();
	var width = $("#slider").width();

	function slideRight(){
		clearInterval(sliderTimer);
		$slider.animate({
			scrollLeft: leftPos + width
		}, 800);
	}
	function slideLeft(){
		clearInterval(sliderTimer);
		$slider.animate({
			scrollLeft: leftPos - width
		}, 800);
	}

	function sliderFunction(){
		$slider.animate({
			scrollLeft: leftPos + width
		}, 800);
		timer++
		if(timer === 3){
			console.log("Finished");
			clearInterval(sliderTimer);
		}
	}
	var sliderTimer = setInterval(sliderFunction, 5000);
	$("#left-arrow").click(slideLeft);
	$("#right-arrow").click(slideRight);
	//End of slider
});