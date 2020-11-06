 window.addEventListener('scroll',function () {
 	// body...
 	let animacion=document.getElementById('animacion');
 	let posicionObj1=animacion.getBoundingClientRect().top;
 	console.log(posicionObj1);
 	let tamñoPantalla=window.innerHeight;

 	if (posicionObj1 <tamñoPantalla) {
 		animacion.style.animacion=' mover 2s ease-out'
 	}
 })