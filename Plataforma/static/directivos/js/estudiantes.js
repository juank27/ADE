let ver=document.querySelectorAll(".ver")[0];
let cerrar=document.querySelectorAll(".cerrar")[0];
let crear=document.querySelectorAll(".crear_cursos")[0];
let crear2=document.querySelectorAll(".crear_cursos2")[0];

ver.addEventListener("click",function(){
  	
    crear2.src="listaDocentes";
    crear.style.opacity="1";
    crear.style.width="100%";
    

})
cerrar.addEventListener("click",function(){
 
    
    
        crear.style.opacity="0";
        crear.style.width="0";

	}
)