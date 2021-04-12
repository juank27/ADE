

/*Función de recarga de la pagina*/
window.addEventListener('load',function(){

    /*uso jquery*/
    $('#onload').fadeOut();
      $('body').removeClass('hidden');

    
});
window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);/*contador de px en la consola */
    menus();
});



/************Funciones del menú de navegación***************************/
//variables
let nav= document.getElementById('nav');
let menu=document.getElementById('Enlaces');
let icon=document.getElementById('nav-icon');

function menus(){
    let Desplazamiento_Actual = window.pageYOffset;

    if(Desplazamiento_Actual <= 500){
        nav.classList.remove('Contenedor-Menú__Dos');
        nav.className = ('Contenedor-Menú'); 
        icon.classList.remove('Contenedor-iconos__menúDos')
        icon.className=('Contenedor-iconos__menú')    
        nav.style.transition = '1s';
        icon.style.transition = '1s';
   
    }if(Desplazamiento_Actual  > 800 ){
    	nav.classList.remove('Contenedor-Menú');
        nav.className = ('Contenedor-Menú__Dos');
        icon.classList.remove('Contenedor-iconos__menú');
        icon.className = ('Contenedor-iconos__menúDos');   
        nav.style.transition = '1s';
        icon.style.transition = '1s';


    }if(Desplazamiento_Actual > 1400){
    	nav.classList.remove('Contenedor-Menú__Dos');
        nav.className = ('Contenedor-Menú__3');
        icon.classList.remove('Contenedor-iconos__menúDos');
        icon.className = ('Contenedor-iconos__menúTres'); 
        nav.style.transition = '1s';
        icon.style.transition = '1s';

    }
 }
/************Funciones del menú de navegación***************************/

/**********************buscador***********************/

//Ejecutando funciones
document.getElementById("ctn-icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);
document.getElementById("x-buscador").addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search =document.getElementById("cover-ctn-search");
inputSearch =document.getElementById("inputSearch");
box_search =document.getElementById("box-search");
x_buscardor=document.getElementById("x-buscador");

//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();
    if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    box_search.style.display = "none";
    inputSearch.value = "";
   

}


//filtado de busqueda 

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);
function buscador_interno(){

    filter=inputSearch.value.toUpperCase();
    li=box_search.getElementsByTagName("li");

    //recorriendo elementos a filtrar mediante los "LI"

 for ( i = 0;i< li.length;i++) {
        
        a=li[i].getElementsByTagName("a")[0];

        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }
    }

}
/********************** fin buscador***********************/

//variables modal inicio de sesion

let abrirSesion= document.querySelectorAll(".abrir-Sesion")[0];
let cerrarSesion= document.querySelectorAll(".cerrar-Sesion")[0];
let modalSesion= document.querySelectorAll(".modal-container_Sesión")[0];
let modalSesionDos= document.querySelectorAll(".modal-container_SesiónDos ")[0];
let abrirRegistroLink= document.querySelectorAll(".linkRegistro")[0];


//variables modal usuarios de registro
let modalUsuarioDos= document.querySelectorAll(".modal-container_UsuariosDos")[0];
let modalUsuario= document.querySelectorAll(".modal-container_Usuarios")[0];
let cerrarUsuario= document.querySelectorAll(".cerrar-Usuario")[0];
let abrirUsuario=document.querySelectorAll(".abrir-Usuario")[0];
let abrirSesionLink= document.querySelectorAll(".linkSesion")[0];


//variables modal de registro 
 
//directivo
let modalIntercambioDi= document.querySelectorAll(".modal-container_intercambioDirectivos")[0];
let modalIntercambioDiDos= document.querySelectorAll(".modal-container_intercambioDosDirectivos")[0];
let intercambioUno= document.querySelectorAll(".intercambioUno")[0];
let cerrarIntercambioD= document.querySelectorAll(".cerrar-IntercambioDirectivos")[0];
let abrirSesionLinkD= document.querySelectorAll(".linkSesionD")[0];
//Estudiante
let modalIntercambioE= document.querySelectorAll(".modal-container_intercambioEstudiantes")[0];
let modalIntercambioEDos= document.querySelectorAll(".modal-container_intercambioDosEstudiantes")[0];
let intercambioTres= document.querySelectorAll(".intercambioTres")[0];
let cerrarIntercambioE= document.querySelectorAll(".cerrar-IntercambioEstudiantes")[0];
let abrirSesionLinkE= document.querySelectorAll(".linkSesionE")[0];
 //docente
let modalIntercambioDD= document.querySelectorAll(".modal-container_intercambioDocentes")[0];
let modalIntercambioDDDos= document.querySelectorAll(".modal-container_intercambioDosDocentes")[0];
let intercambioDos= document.querySelectorAll(".intercambioDos")[0];
let cerrarIntercambioDD= document.querySelectorAll(".cerrar-IntercambioDocentes")[0];
let abrirSesionLinkDD= document.querySelectorAll(".linkSesionDD")[0];



/*Modal inicio de sesion*/
abrirSesion.addEventListener("click",function(e){
    e.preventDefault();
    modalSesion.style.opacity="1";
    modalSesion.style.visibility="visible";
    modalSesionDos.classList.toggle("modal-container_cerrarS")
})

cerrarSesion.addEventListener("click",function(){
    modalSesionDos.classList.toggle("modal-container_cerrarS");
 
    
    setTimeout(function(){

        modalSesion.style.opacity="0";
        modalSesion.style.visibility="hidden";
        

    },900)
})

abrirRegistroLink.addEventListener("click",function(e){


    modalSesionDos.classList.toggle("modal-container_cerrarS");
 
    
    setTimeout(function(){

        modalSesion.style.opacity="0";
        modalSesion.style.visibility="hidden";
        

    },900)

    e.preventDefault();
    modalUsuario.style.opacity="1";
    modalUsuario.style.visibility="visible";
    modalUsuarioDos.classList.toggle("modal-container_cerrarU")
})

///////////////////////////////////////////////////////////////////////////

/*modal eleccion usuario para el registro*/

abrirUsuario.addEventListener("click",function(e){
    e.preventDefault();
    modalUsuario.style.opacity="1";
    modalUsuario.style.visibility="visible";
    modalUsuarioDos.classList.toggle("modal-container_cerrarU")
})

cerrarUsuario.addEventListener("click",function(){
    modalUsuarioDos.classList.toggle("modal-container_cerrarU");
    
    setTimeout(function(){

        modalUsuario.style.opacity="0";
        modalUsuario.style.visibility="hidden";


    },900)
})

abrirSesionLink.addEventListener("click",function(e){

    modalUsuarioDos.classList.toggle("modal-container_cerrarU");
    
    setTimeout(function(){

        modalUsuario.style.opacity="0";
        modalUsuario.style.visibility="hidden";


    },900)

    e.preventDefault();
    modalSesion.style.opacity="1";
    modalSesion.style.visibility="visible";
    modalSesionDos.classList.toggle("modal-container_cerrarS")

})
//////////////////////////////////////////////////////////////////////

/*modal registro*/
/*Directivos*/
intercambioUno.addEventListener("click",function(e){
    e.preventDefault();
    modalIntercambioDi.style.opacity="1";
    modalIntercambioDi.style.visibility="visible";
    modalIntercambioDiDos.classList.toggle("modal-container_cerrarID")
})
cerrarIntercambioD.addEventListener("click",function(){
    modalIntercambioDiDos.classList.toggle("modal-container_cerrarID");
 
    
    setTimeout(function(){

       modalIntercambioDi.style.opacity="0";
        modalIntercambioDi.style.visibility="hidden";
        

    },900)
})

abrirSesionLinkD.addEventListener("click",function(e){

    modalUsuarioDos.classList.toggle("modal-container_cerrarU");
    modalIntercambioDiDos.classList.toggle("modal-container_cerrarID");

    setTimeout(function(){

        modalUsuario.style.opacity="0";
        modalUsuario.style.visibility="hidden";
        modalIntercambioDi.style.opacity="0";
        modalIntercambioDi.style.visibility="hidden";

    },900)

    e.preventDefault();
    modalSesion.style.opacity="1";
    modalSesion.style.visibility="visible";
    modalSesionDos.classList.toggle("modal-container_cerrarS")

})


/*Docentes*/
intercambioDos.addEventListener("click",function(e){
   e.preventDefault();
    modalIntercambioDD.style.opacity="1";
    modalIntercambioDD.style.visibility="visible";
    modalIntercambioDDDos.classList.toggle("modal-container_cerrarIDD")
     
})
cerrarIntercambioDD.addEventListener("click",function(){

    modalIntercambioDDDos.classList.toggle("modal-container_cerrarIDD");
 
    
    setTimeout(function(){

       modalIntercambioDD.style.opacity="0";
        modalIntercambioDD.style.visibility="hidden";
        

    },900)
})
abrirSesionLinkDD.addEventListener("click",function(e){

    modalUsuarioDos.classList.toggle("modal-container_cerrarU");
    modalIntercambioDDDos.classList.toggle("modal-container_cerrarIDD");

    setTimeout(function(){

        modalUsuario.style.opacity="0";
        modalUsuario.style.visibility="hidden";
        modalIntercambioDD.style.opacity="0";
        modalIntercambioDD.style.visibility="hidden";

    },900)

    e.preventDefault();
    modalSesion.style.opacity="1";
    modalSesion.style.visibility="visible";
    modalSesionDos.classList.toggle("modal-container_cerrarS")

})


/*Estudiantes*/
intercambioTres.addEventListener("click",function(e){
    e.preventDefault();
    modalIntercambioE.style.opacity="1";
    modalIntercambioE.style.visibility="visible";
    modalIntercambioEDos.classList.toggle("modal-container_cerrarIE")
})
cerrarIntercambioE.addEventListener("click",function(){
    modalIntercambioEDos.classList.toggle("modal-container_cerrarIE");
 
    
    setTimeout(function(){

       modalIntercambioE.style.opacity="0";
        modalIntercambioE.style.visibility="hidden";
        

    },900)
})

abrirSesionLinkE.addEventListener("click",function(e){

    modalUsuarioDos.classList.toggle("modal-container_cerrarU");
    modalIntercambioEDos.classList.toggle("modal-container_cerrarIE");
    
    setTimeout(function(){

        modalUsuario.style.opacity="0";
        modalUsuario.style.visibility="hidden";
        modalIntercambioE.style.opacity="0";
        modalIntercambioE.style.visibility="hidden";

    },900)

    e.preventDefault();
    modalSesion.style.opacity="1";
    modalSesion.style.visibility="visible";
    modalSesionDos.classList.toggle("modal-container_cerrarS")

})