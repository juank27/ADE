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

//varibles botones pagina principal
let abrir3=document.querySelectorAll(".cta2")[0];
let abrir4=document.querySelectorAll(".cta3")[0];

abrir3.addEventListener("click",function(e){
    e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close")
})
abrir4.addEventListener("click",function(e){
    e.preventDefault();
    modalC1.style.opacity="1";
    modalC1.style.visibility="visible";
    modal1.classList.toggle("modal-close1")
})
