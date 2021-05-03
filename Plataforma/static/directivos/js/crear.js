let ver=document.querySelectorAll(".ver")[0];
let ver2=document.querySelectorAll(".ver2")[0];
let ver3=document.querySelectorAll(".ver3")[0];
let cerrar=document.querySelectorAll(".cerrar")[0];
let crear=document.querySelectorAll(".crear_cursos")[0];
let crear2=document.querySelectorAll(".crear_cursos2")[0];

ver.addEventListener("click",function(){
  	
    crear2.src="construcion";
    crear.style.opacity="1";
    crear.style.width="100%";
    

})
ver2.addEventListener("click",function(){
  	
    crear2.src="construcion";
    crear.style.opacity="1";
    crear.style.width="100%";
    

})
ver3.addEventListener("click",function(){
  	
    crear2.src="construcion";
    crear.style.opacity="1";
    crear.style.width="100%";
    

})
cerrar.addEventListener("click",function(){
 
    
    
        crear.style.opacity="0";
        crear.style.width="0";

	}
)