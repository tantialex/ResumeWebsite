document.getElementsByClassName("projectBox").onclick = ProjectBoxOpen;

function ProjectBoxOpen(elem){
	var boxes = document.getElementsByClassName('projectBox');
        for (i = 0; i < boxes.length; i++) {
        	if(boxes[i].classList.contains('opened')){
	       		boxes[i].classList.remove('opened');   
	       		boxes[i].classList.add('closed');
	       	}    		
        }
        
	elem.classList.remove('closed');
	elem.classList.add('opened');
}
