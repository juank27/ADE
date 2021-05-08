let rutaa= document.querySelectorAll(".rutaa")[0];

rutaa.addEventListener("click",function(){
   
    modalIntercambioDDDos.classList.toggle("modal-container_cerrarIDD");
 
     modalIntercambioDD.style.opacity="0";
     modalIntercambioDD.style.visibility="hidden";
    setTimeout(function(){

      modalIntercambioDD.style.opacity="1";
      modalIntercambioDD.style.visibility="visible";
      modalIntercambioDDDos.classList.toggle("modal-container_cerrarIDD")

    },900)
    
})