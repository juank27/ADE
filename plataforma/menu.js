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

//modal
let cerrar= document.querySelectorAll(".close")[0];
let cerrar1= document.querySelectorAll(".close1")[0];
let abrir= document.querySelectorAll(".cta")[0];
let abrir2=document.querySelectorAll(".cta1")[0];
let abrir3=document.querySelectorAll(".cta2")[0];
let abrir4=document.querySelectorAll(".cta3")[0]
let modal= document.querySelectorAll(".modal")[0];
let modal1= document.querySelectorAll(".modal1")[0];
let modalC= document.querySelectorAll(".modal-container")[0];
let modalC1= document.querySelectorAll(".modal-container1")[0];

abrir.addEventListener("click",function(e){
    e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close")
})
abrir3.addEventListener("click",function(e){
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
abrir4.addEventListener("click",function(e){
    e.preventDefault();
    modalC1.style.opacity="1";
    modalC1.style.visibility="visible";
    modal1.classList.toggle("modal-close1")
})

cerrar1.addEventListener("click",function(){
    modal1.classList.toggle("modal-close1");
    
    setTimeout(function(){

        modalC1.style.opacity="0";
        modalC1.style.visibility="hidden";

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