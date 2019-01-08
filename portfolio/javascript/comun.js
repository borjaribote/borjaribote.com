
window.addEventListener('DOMContentLoaded',()=>{
//******   My Modal  **********//

// Get the modal
	/*	var modal = document.getElementById('myModal');

		// Get the button that opens the modal
		//var btn = document.getElementsByID("openModal");
		var btn = document.getElementsByID("openModal");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks the button, open the modal 

		btn.onclick = function() {
			document.getElementById("img-1").checked = true;
		    modal.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		    modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		}

	});

*/

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


















