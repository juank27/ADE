//variables
let nav= document.getElementById('nav');
let menu=document.getElementById('enlaces');
let icon=document.getElementById('nav-icon');
let linea=document.getElementById('linea')



window.addEventListener('load',function(){

    /*uso jquery*/
    $('#onload').fadeOut();
      $('body').removeClass('hidden');

    
});

function menus(){
    let Desplazamiento_Actual = window.pageYOffset;

    if(Desplazamiento_Actual <= 500){
        nav.classList.remove('nav2');
        nav.className = ('nav1'); 
        icon.classList.remove('nav-icon2')
        icon.className=('nav-icon')    
        nav.style.transition = '1s';
        icon.style.transition = '1s';
   
    }if(Desplazamiento_Actual  > 800 ){
    	nav.classList.remove('nav1');
        nav.className = ('nav2');
        icon.classList.remove('nav-icon');
        icon.className = ('nav-icon2');   
        nav.style.transition = '1s';
        icon.style.transition = '1s';


    }if(Desplazamiento_Actual > 1400){
    	nav.classList.remove('nav2');
        nav.className = ('nav3');
        icon.classList.remove('nav-icon2');
        icon.className = ('nav-icon3'); 
        nav.style.transition = '1s';
        icon.style.transition = '1s';

    }
 }

window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);/*contador de px en la consola */
    menus();
});

//modal inicio y tipo usuario 
let cerrar= document.querySelectorAll(".close")[0];
let cerrar1= document.querySelectorAll(".close1")[0];
let abrir= document.querySelectorAll(".cta")[0];
let abrirS= document.querySelectorAll(".linkU")[0];
let abrirR= document.querySelectorAll(".linkRegistro")[0];
let abrirR2= document.querySelectorAll(".linkRegistro2")[0];
let abrir2=document.querySelectorAll(".cta1")[0];
let abrir3=document.querySelectorAll(".cta2")[0];
let abrir4=document.querySelectorAll(".cta3")[0]
let modal= document.querySelectorAll(".modal")[0];
let modal1= document.querySelectorAll(".modal1")[0];
let modalC= document.querySelectorAll(".modal-container")[0];
let modalC1= document.querySelectorAll(".modal-container1")[0];
//modal de interambio
//let btn_enviarSesion= document.querySelectorAll(". btn_enviarSesion")[0];

let abrir1I= document.querySelectorAll(".nombreU")[0];
let abrir2I= document.querySelectorAll(".nombre2U")[0];
let abrir3I= document.querySelectorAll(".nombre3U")[0];
let modalI= document.querySelectorAll(".modalI")[0];
let modalCI= document.querySelectorAll(".modal-container_intercambio")[0];
let cerrarI= document.querySelectorAll(".closeI")[0];
let directivo= document.querySelectorAll(".directivo")[0];
let docente= document.querySelectorAll(".docente")[0];
let estudiante= document.querySelectorAll(".estudiante")[0];

/*btn_enviarSesion.addEventListener("click",function(e){
    header('Location:insti.html');
}*/
abrir.addEventListener("click",function(e){
    e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close")
})

abrirS.addEventListener("click",function(e){
     modal1.classList.toggle("modal-close1");
    
    setTimeout(function(){

        modalC1.style.opacity="0";
        modalC1.style.visibility="hidden";

    },900)

     e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close")
})



cerrar.addEventListener("click",function(){
    modal.classList.toggle("modal-close");
 
    
    setTimeout(function(){

        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
        

    },900)
})


abrir2.addEventListener("click",function(e){
    e.preventDefault();
    modalC1.style.opacity="1";
    modalC1.style.visibility="visible";
    modal1.classList.toggle("modal-close1")
})

abrirR.addEventListener("click",function(e){


    modal.classList.toggle("modal-close");
 
    
    setTimeout(function(){

        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
        

    },900)

    e.preventDefault();
    modalC1.style.opacity="1";
    modalC1.style.visibility="visible";
    modal1.classList.toggle("modal-close1")
})

abrirR2.addEventListener("click",function(e){


     modalI.classList.toggle("modal-closeI");
    modal1.classList.toggle("modal-close1");
    setTimeout(function(){

        modalCI.style.opacity="0";
        modalCI.style.visibility="hidden";
        modalC1.style.opacity="0";
        modalC1.style.visibility="hidden";

    },900)

    e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close")
})


cerrar1.addEventListener("click",function(){
    modal1.classList.toggle("modal-close1");
    
    setTimeout(function(){

        modalC1.style.opacity="0";
        modalC1.style.visibility="hidden";


    },900)
})

//modal de interambio


abrir1I.addEventListener("click",function(e){

    e.preventDefault();
    modalCI.style.opacity="1";
    modalCI.style.visibility="visible";
    modalI.classList.toggle("modal-closeI")
    directivo.style.visibility="visible";
    estudiante.style.visibility="hidden";
    docente.style.visibility="hidden";


})
abrir2I.addEventListener("click",function(e){

    e.preventDefault();
    modalCI.style.opacity="1";
    modalCI.style.visibility="visible";
    modalI.classList.toggle("modal-closeI")

    docente.style.visibility="visible";
    directivo.style.visibility="hidden";


})
abrir3I.addEventListener("click",function(e){

    e.preventDefault();
    modalCI.style.opacity="1";
    modalCI.style.visibility="visible";
    modalI.classList.toggle("modal-closeI")

    estudiante.style.visibility="visible";
    directivo.style.visibility="hidden";

})
cerrarI.addEventListener("click",function(){
    
modalI.classList.toggle("modal-closeI");
  
    setTimeout(function(){

        modalCI.style.opacity="0";
        modalCI.style.visibility="hidden";
        directivo.style.visibility="hidden";
        estudiante.style.visibility="hidden";
        docente.style.visibility="hidden";

        

    },900)
})
   




//buscador

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