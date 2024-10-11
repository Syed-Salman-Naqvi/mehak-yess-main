var i = 0; 			
var images = [];	
var time = 3000;	
images[0] = "mehak yess//masala-1.jpg";
images[1] = "mehak yess//masala-2.jpg";
images[2] = "mehak yess//masala-3.jpg";
images[3] = "mehak yess//masala-4.jpg";
function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
	setTimeout("changeImg()", time);
}
window.onload=changeImg;




function setAnimationDuration(duration) {
	const lights = document.querySelectorAll('.light');
	lights.forEach(light => {
	  light.style.animationDuration = `${duration}s`;
	});
  }