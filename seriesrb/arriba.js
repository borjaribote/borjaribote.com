$(document).ready(function(){

	$('.pie').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 1000);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 50 ){
			$('.pie').slideDown(900);
		} else {
			$('.pie').slideUp(900);
		}
	});

});


















