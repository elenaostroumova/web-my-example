var i=0;
var image=document.getElementById("image");
var imgs=new Array('foto1.gif','foto2.jpg','foto3.jpg','foto4.jpg');

function imgsrc() {
	           i++;
            image.src=imgs[i%imgs.length];
             }
