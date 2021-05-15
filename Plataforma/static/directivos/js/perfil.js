let uno=document.querySelectorAll(".uno")[0];
let dos=document.querySelectorAll(".dos")[0];
let tres=document.querySelectorAll(".tres")[0];
let cuatro=document.querySelectorAll(".cuatro")[0];
let cinco=document.querySelectorAll(".cinco")[0];
let seis=document.querySelectorAll(".seis")[0];
let siete=document.querySelectorAll(".siete")[0];
let ocho=document.querySelectorAll(".ocho")[0];
let nueve=document.querySelectorAll(".nueve")[0];
let diez=document.querySelectorAll(".diez")[0];


let guar=document.querySelectorAll(".boton")[0];

let cambio1
let cambio2
let cambio3
let cambio4
let cambio5

guar.addEventListener("click",function(){
  	
   cambio1=uno.value;
   dos.value=cambio1
   console.log(dos.value);

   cambio2=tres.value;
   cuatro.value=cambio2
   console.log(cuatro.value);

   cambio3=cinco.value;
   seis.value=cambio3
   console.log(seis.value);

   cambio4=siete.value;
   ocho.value=cambio4
   console.log(ocho.value);

   cambio5=nueve.value;
   diez.value=cambio5
   console.log(diez.value);

})