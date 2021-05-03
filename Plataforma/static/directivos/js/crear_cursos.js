let cancelar=document.querySelectorAll(".cancelar")[0];
let guardar=document.querySelectorAll(".guardar")[0];

let no=document.querySelectorAll(".no")[0];
let si=document.querySelectorAll(".si")[0];
let contenedor=document.querySelectorAll(".contenedor_CC2")[0];

let resultado=document.querySelectorAll(".resultado")[0];


cancelar.addEventListener("click",function(){
  
  	si.style.visibility="hidden";
    no.style.visibility="visible";
})
guardar.addEventListener("click",function(){
  
  	no.style.visibility="hidden";
   	si.style.visibility="visible";})