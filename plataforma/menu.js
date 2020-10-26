//variables
let nav= document.getElementById('nav');
let menu=document.getElementById('enlaces');
let icon=document.getElementById('nav-icon');
let linea=document.getElementById('linea')




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

cerrar1.addEventListener("click",function(){
    modal1.classList.toggle("modal-close1");
    
    setTimeout(function(){

        modalC1.style.opacity="0";
        modalC1.style.visibility="hidden";

    },900)
})