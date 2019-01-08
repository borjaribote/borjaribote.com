'use strict'

window.addEventListener('DOMContentLoaded',()=>{


		var img = document.getElementById("imgpag");
		
		var texto1 = document.getElementById("txt1");
		var texto2 = document.getElementById("txt2");
		var texto3= document.getElementById("txt3");
		
		var width = window.screen.availWidth;
		
		$(img).scroll(function(event) {
		  var scrollImg = $(img).scrollTop();

		function ventana(num){
			if(num==1){
				texto1.style.display="flex";
			  	texto2.style.display="none";
			  	texto3.style.display="none";
			}else if(num==2){
				texto2.style.display="flex";
				texto1.style.display="none";
				texto3.style.display="none";
			}else if(num==3){
				texto3.style.display="flex";
			  	texto1.style.display="none";
			  	texto2.style.display="none";
			}
		}
				  
		//tamaño grande
		if (width>=1101){		
			  if(scrollImg >=300 && scrollImg<=600){
			  	ventana(2);
			  }else if(scrollImg >=601){
			  	ventana(3);
			  }else{
			  	ventana(1);
			  }
			  //tamaño mediano
		}else if(width<=1100 && width>=851){
			  if(scrollImg >=450 && scrollImg<=800){
				  	ventana(2);
				  }else if(scrollImg >=701){
				 	ventana(3);
				  }else{
				  	ventana(1);
				  }
		}else if(width<=850 && width>=751){
			  if(scrollImg >=240 && scrollImg<=600){
				  	ventana(2);
				  }else if(scrollImg >=601){
				 	ventana(3);
				  }else{
				  	ventana(1);
				  }
		}else if(width <= 750 && width >= 651){
			  if(scrollImg >=155 && scrollImg<=550){
			  		ventana(2);
				  }else if(scrollImg >=551){
				 	ventana(3);
				  }else{
				  	ventana(1);	
				  }
			}else if(width<= 650 && width>=550 ){
			  if(scrollImg >=250 && scrollImg<=450){
			  		ventana(2);
				  }else if(scrollImg >=451){
				  	ventana(3);
				  }else{
				  	ventana(1);	
				  }
			}else if(width<= 550 && width>=450 ){
				if(scrollImg >=104 && scrollImg<=300){
			  		ventana(2);
				  }else if(scrollImg >=301){
				  	ventana(3);
				  }else{
				  	ventana(1);	
				  }
			}else{
				if(scrollImg >=140 && scrollImg<=400){
			  		ventana(2);
				  }else if(scrollImg >=401){
				  	ventana(3);
				  }else{
				  	ventana(1);	
				  }
			}
		  console.log("Vertical "+scrollImg + " width: "+width);
		});
});