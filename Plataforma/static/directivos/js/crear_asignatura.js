let logo= document.querySelectorAll(".Elegir_Logo")[0];
let elegir= document.querySelectorAll(".elegir")[0];
let cerrar= document.querySelectorAll(".cerrar")[0];
let input=document.querySelectorAll(".input")[0];
let cancelar=document.querySelectorAll(".cancelar")[0];
let guardar=document.querySelectorAll(".aceptar")[0];
let no=document.querySelectorAll(".no")[0];
let si=document.querySelectorAll(".si")[0];

logo.addEventListener("click",function(){
	elegir.style.width='20%';
	elegir.style.height='55%'
	
})
cerrar.addEventListener("click",function(){
	
	elegir.style.height='0'
})
function cambiarImagenJS(a){
                document.getElementById("f").src=a;
            }

cancelar.addEventListener("click",function(){
	si.style.visibility="hidden";
    no.style.visibility="visible";
	input.value=""
})
guardar.addEventListener("click",function(){
  
  	no.style.visibility="hidden";
   	si.style.visibility="visible";
   	input.value=""
   })