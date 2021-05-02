let boton=document.querySelectorAll(".boton2")[0];
let boton2=document.querySelectorAll(".botones")[0];
let boton1=document.querySelectorAll(".boton1")[0];

let revisar2=document.querySelectorAll(".revisar_imagen")[0];
let registrar2=document.querySelectorAll(".registrar_imagen")[0];
let crear2=document.querySelectorAll(".crear_imagen")[0];
let cambio=document.querySelectorAll(".cambio")[0];
let framer=document.querySelectorAll(".oscuro")[0];


/*menu*/
let click= document.querySelectorAll(".contenedor")[0];
let click2= document.querySelectorAll(".contenedor2")[0];
let menu= document.querySelectorAll(".contenedor_menu")[0];
let imagen2= document.querySelectorAll(".primeros")[0];
let imagen3= document.querySelectorAll(".segundos")[0];
let ade= document.querySelectorAll(".ade")[0];
let adeh='ade:hover{background:red}'
let ade2h='ade_dos:hover{background:red}'
let ade2= document.querySelectorAll(".ade_dos")[0];
let modulo= document.querySelectorAll(".contenido_modulo")[0];
let elmenu= document.querySelectorAll(".elmenu")[0];
let contador=true;

click.addEventListener("click",function(){
    
        menu.className=("contenedor_menu dos");
        imagen2.style.visibility="hidden";
        imagen3.style.visibility="visible";
        modulo.style.width="90%"
        elmenu.style.width="30%"
        ade.style.cssText=adeh
        ade2.style.cssText=ade2h
        registrar2.style.background='none'
        revisar2.style.background='none'
        crear2.style.background='none'
        cambio.style.width="100%"
        ade2.style.color='#fff';
        
    
})

click2.addEventListener("click",function(){
    
        ade2.style.cssText=ade2h
        ade.style.cssText=adeh
        menu.className.remove=("dos");
        menu.className=("contenedor_menu uno");
        imagen3.style.visibility="hidden";
        imagen2.style.visibility="visible";
        modulo.style.width="95%"
        elmenu.style.width="5%"
        boton.style.background='#56AEFF';
        boton.style.cssText=css;
        boton2.style.background='#56AEFF';
        boton2.style.cssText=css;

         ade.style.color='#fff';
     

        
    
})
ade.addEventListener("click",function(){
    
        
    
        
        boton.style.background='#56AEFF';
        boton.style.cssText=css;
        boton2.style.background='#56AEFF';
        boton2.style.cssText=css;
        boton1.style.background='#56AEFF';
        boton1.style.cssText=css;
        ade.style.color='#F9AD30';
        cambio.src="principal"
         

        
    
})
ade2.addEventListener("click",function(){
    
        
        registrar2.style.background='none'
        revisar2.style.background='none'
        crear2.style.background='none'
        ade2.style.color='#F9AD30';
        cambio.src="principal"

        
    
})

//modo claro y oscuro 
let luz2= document.querySelectorAll(".bombillo2")[0];
let luz= document.querySelectorAll(".bombillo")[0];
let fondo= document.querySelectorAll(".contendor_Principal")[0];
let sombra=document.querySelectorAll(".sombra_boton")[0];
let sombra2=document.querySelectorAll(".sombra_boton2")[0];
let sombra1=document.querySelectorAll(".sombra_boton1")[0];

let borde=document.querySelectorAll(".foto")[0];
let borde2=document.querySelectorAll(".fotoA")[0];

let oscuro=true;

luz.addEventListener("click",oscuridad);
function oscuridad(){
    
    if (oscuro) {
            fondo.style.background='#092838';
            sombra.style.background='#092838';
            sombra2.style.background='#092838';
            sombra1.style.background='#092838';

            borde.style.border='#092838 3px solid';
            borde2.style.border='#092838 3px solid';
            
            menu.style.color='#092838';
            cambio.style.background='#092838';
            cambio.style,color='#fff';
            oscuro=false;
    }else{
            fondo.style.background='#AAD8F4';
            sombra.style.background='#fff';
            sombra2.style.background='#fff ';
            sombra1.style.background='#fff ';

            borde.style.borde='#fff 3px solid';
            borde2.style.borde='#fff 3px solid';
            menu.style.color='#fff';
            cambio.style.background='#AAD8F4'

            oscuro=true;
    }
}

luz2.addEventListener("click",oscuridad);
function oscuridad(){
    
    if (oscuro) {
            fondo.style.background='#092838';
            sombra.style.background='#092838';
            sombra2.style.background='#092838';
            sombra1.style.background='#092838';

            borde.style.borde='#092838 3px solid';
            borde2.style.border='#092838 3px solid';
            menu.style.color='#092838';
            cambio.style.background='#092838';
            
            oscuro=false;
    }else{
            fondo.style.background='#AAD8F4';
            sombra.style.background='#fff';
            sombra2.style.background='#fff';
            sombra1.style.background='#fff';

            borde.style.borde='#fff 3px solid';
            borde2.style.borde='#fff 3px solid';
            
            menu.style.color='#fff';
            cambio.style.background='#AAD8F4'
            oscuro=true;
    }
}

//opciones de menu

let registro= document.querySelectorAll(".Registro")[0];
let revisar=document.querySelectorAll(".Revisar")[0];
let crear=document.querySelectorAll(".Crear")[0];


let otro=true;
let otro2=true;
let otro3=true;

let css='botones:hover{background=#000}';
registro.addEventListener("click",mostrar);
revisar.addEventListener("click",seleccionar);
crear.addEventListener("click",creacion);

function mostrar() {
	// body...
	if (otro) {
		
    	boton.style.background='#F9AD30';
    	boton2.style.background='#56AEFF';
    	boton2.style.cssText=css;
        boton1.style.background='#56AEFF';
        boton1.style.cssText=css;
        ade.style.color='#fff'
        cambio.src="cursos"
        ade.style.cssText=adeh
    	otro=false;
    	
	}else{
		
    	boton.style.background='#56AEFF';
    	boton.style.cssText=css;
    		
    	otro=true;
	}
}

function seleccionar() {
	
		
    	if (otro2) {
            ade.style.cssText=adeh;
            ade.style.color='#fff'
    		boton2.style.background='#F9AD30';
    		
    		boton.style.background='#56AEFF';
    		boton.style.cssText=css;
            boton1.style.background='#56AEFF';
            boton1.style.cssText=css;
    	
            cambio.src="servicios"
    		otro2=false;

    	}else{
    		boton2.style.background='#56AEFF';
    		boton2.style.cssText=css;
    		otro2=true;
    	}
    	

	
}

function creacion() {
    
        
        if (otro3) {
            ade.style.color='#fff'
            boton2.style.background='#56AEFF';
            boton.style.background='#56AEFF';
            ade.style.cssText=adeh
            
            boton1.style.background='#F9AD30';
           
            
            cambio.src="crear"
            otro3=false;

        }else{
            
            boton1.style.background='#56AEFF';
            boton1.style.cssText=css;
            otro3=true;
        }
        

    
}
/*opciones iconos*/
let c='hover2:hover{background=#F9AD30}'
let r='hover3:hover{background=#F9AD30}'
let v='hover:hover{background=#F9AD30}'
crear2.addEventListener("click",function(){
    
        
    crear2.style.background='#F9AD30';
    registrar2.style.background='none';
    revisar2.style.background='none';
    ade2.style.cssText=ade2h
    revisar2.style.cssText=v
    registrar2.style.cssText=r
    cambio.src='crear'
})
registrar2.addEventListener("click",function(){
    
       
    crear2.style.background='none';
    registrar2.style.background='#F9AD30';
    revisar2.style.background='none';
    ade2.style.cssText=ade2h
    revisar2.style.cssText=v    
    crear2.style.cssText=c
    cambio.src='cursos'
        
    
})
revisar2.addEventListener("click",function(){
    
    crear2.style.background='none';
    registrar2.style.background='none';
    revisar2.style.background='#F9AD30';
    ade2.style.cssText=ade2h
    registrar2.style.cssText=r
    crear2.style.cssText=c
    cambio.src='servicios'
})