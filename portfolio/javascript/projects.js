'use strict'



window.addEventListener('DOMContentLoaded',()=>{

		// Get the modal
		var modal = document.getElementById('myModal');

		// Get the button that opens the modal
		//var btn = document.getElementsByID("openModal");
		var btn = document.getElementsByClassName("openModal");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks the button, open the modal 
		if (btn.length == 9) {
			btn[0].onclick = function() {
				document.getElementById("img-1").checked = true;
			    modal.style.display = "block";
			}

			btn[1].onclick = function() {
				document.getElementById("img-2").checked = true;
			    modal.style.display = "block";
			}
			btn[2].onclick = function() {
				document.getElementById("img-3").checked = true;
			    modal.style.display = "block";
			}

			btn[3].onclick = function() {
				document.getElementById("img-4").checked = true;
			    modal.style.display = "block";
			}
			btn[4].onclick = function() {
				document.getElementById("img-5").checked = true;
			    modal.style.display = "block";
			}
			btn[5].onclick = function() {
				document.getElementById("img-6").checked = true;
			    modal.style.display = "block";
			}
			btn[6].onclick = function() {
				document.getElementById("img-5").checked = true;
			    modal.style.display = "block";
			}
			btn[7].onclick = function() {
				document.getElementById("img-6").checked = true;
			    modal.style.display = "block";
			}
			btn[8].onclick = function() {
				document.getElementById("img-7").checked = true;
			    modal.style.display = "block";
			}
		/*	btn[9].onclick = function() {
				document.getElementById("img-8").checked = true;
			    modal.style.display = "block";
			}*/
			
			
		}else if(btn.length == 3) {
			btn[0].onclick = function() {
				document.getElementById("img-1").checked = true;
			    modal.style.display = "block";
			}

			btn[1].onclick = function() {
				document.getElementById("img-2").checked = true;
			    modal.style.display = "block";
			}
			btn[2].onclick = function() {
				document.getElementById("img-3").checked = true;
			    modal.style.display = "block";
			}
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
