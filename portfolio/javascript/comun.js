
window.addEventListener('DOMContentLoaded',()=>{

//*****      UP        *****//
	$('.up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 10);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 50 ){
			// cuando baja
			//$('.up').slideDown(1000);		
			//$('.up').show(1000);
			$('.up').fadeIn("slow");
		} else {
			//cuando sube
			//$('.up').slideUp(1000);
			//$('.up').hide(1000);
			$('.up').fadeOut("slow");
		}
	});

});














