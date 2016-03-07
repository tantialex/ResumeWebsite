document.getElementsByClassName("project-box-wrapper").onclick = ProjectBoxOpen;

function ProjectBoxOpen(elem){
	var boxes = document.getElementsByClassName('project-box-wrapper');
        for (i = 0; i < boxes.length; i++) {
        	if(boxes[i].classList.contains('opened')){
	       		boxes[i].classList.remove('opened');   
	       		boxes[i].classList.add('closed');
	       	}    		
        }
        
	elem.classList.remove('closed');
	elem.classList.add('opened');
}

window.onload = function ProjectBoxBackground() {
    var contents = document.getElementsByClassName('project-box-content');
        for (i=0; i<contents.length; i++) {
            var background_path = contents[i].getAttribute("dataPath");
            contents[i].style.backgroundImage = "url('"+ background_path +"')";
        }
}