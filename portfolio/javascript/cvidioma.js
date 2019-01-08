'use strict'

window.addEventListener('DOMContentLoaded',()=>{


var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');
var img = document.getElementById("cvimage");

function cambiaimg(num,activate){
	if(num == 1){	
		if (!activate){
			img.src="../img/trabajos/CVsara/CVpeq.jpg";	
		}else{
			img.src="../img/trabajos/CVsara/info.jpg";
		}
	}else if(num == 2){
		if (!activate){
			img.src="../img/trabajos/CVsara/CVpeq.jpg";	
		}else{
			img.src="../img/trabajos/CVsara/conocimientos.jpg";
		}
	}else if(num == 3){
		if (!activate){	
			img.src="../img/trabajos/CVsara/CVpeq.jpg";	
		}else{	
			img.src="../img/trabajos/CVsara/experiencia.jpg";
		}
	}else if(num == 4){
		if (!activate){			
			img.src="../img/trabajos/CVsara/CVpeq.jpg";	
		}else{	
			img.src="../img/trabajos/CVsara/otros.jpg";
		}
	}
}
for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
    	
    	
        var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');
        if (this.classList.contains('1')){
        	cambiaimg(1,setClasses);
        } else if(this.classList.contains('2')){
			cambiaimg(2,setClasses);
        }else if(this.classList.contains('3')){
			cambiaimg(3,setClasses);
        }else if(this.classList.contains('4')){
			cambiaimg(4,setClasses);
        }


        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}



});
