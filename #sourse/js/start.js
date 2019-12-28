function dot_num(){
	return 3;
}

function slider_position() {
	for(var i = 0; i < dot_num(); i++){
		if(document.getElementById("dot__" + i).className == "dot__dot dot__dot_active"){
			return i;
		}
	}
}

function switch_to_prev() {
	pos = slider_position() - 1;
	if(pos < 0) 
		pos = dot_num() - 1;
	
	switch_to(pos);
}

function switch_to_next() {
	pos = slider_position() + 1;
	if(pos > (dot_num() - 1)) 
		pos = 0;

	switch_to(pos);
}

function switch_to(num) {
	for(var i = 0; i < dot_num(); i++)
		document.getElementById("dot__" + i).className = "dot__dot";	

	document.getElementById("dot__" + num).className = "dot__dot dot__dot_active";
	content = document.getElementsByClassName("standboard__slide");
	
	for(var i = 0; i < content.length; i++){
		content[i].style.display = "none";
	}

	content[num].style.display = "block";
}

switch_to(0);