let agregar=document.querySelectorAll(".contenedorBotonCursosSombra")[0];
let crear=document.querySelectorAll(".crear_cursos")[0];
let crear2=document.querySelectorAll(".crear_cursos2")[0];

let ver=document.querySelectorAll(".botonTituloListas")[0];
let cerrar=document.querySelectorAll(".cerrar")[0];





agregar.addEventListener("click",function(){
  
    crear.style.opacity="1";
    crear.style.width="100%";
    crear2.src="crear_asignaturas";


})
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