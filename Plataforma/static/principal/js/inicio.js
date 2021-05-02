//variables modal inicio de sesion

let abrirSesion2= document.querySelectorAll(".abrir-Sesion2")[0];



let abrirUsuario2=document.querySelectorAll(".abrir-Usuario2")[0];


//variables modal de registro 
 
 
/*Modal inicio de sesion*/
abrirSesion2.addEventListener("click",function(){
    modalSesion.style.opacity="1";
    modalSesion.style.visibility="visible";
    modalSesionDos.classList.toggle("modal-container_cerrarS")
})


abrirUsuario2.addEventListener("click",function(){

    modalUsuario.style.opacity="1";
    modalUsuario.style.visibility="visible";
    modalUsuarioDos.classList.toggle("modal-container_cerrarU")
})
