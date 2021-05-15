let logo= document.querySelectorAll(".Elegir_Logo")[0];
let elegir= document.querySelectorAll(".elegir")[0];
let cerrar= document.querySelectorAll(".cerrar")[0];
let input=document.querySelectorAll(".input")[0];
let cancelar=document.querySelectorAll(".cancelar")[0];
let guardar=document.querySelectorAll(".aceptar")[0];
let no=document.querySelectorAll(".no")[0];

logo.addEventListener("click",function(){
	elegir.style.width='20%';
	elegir.style.height='55%'
	
})
cerrar.addEventListener("click",function(){
	
	elegir.style.height='0'
})

cancelar.addEventListener("click",function(){
    no.style.visibility="visible";
	input.value=""
})
guardar.addEventListener("click",function(){
  	no.style.visibility="hidden";
   	input.value=""
   })