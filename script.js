"use strict";

const todo=document.querySelector("html")

const misterios=document.querySelector(".main-misterios");
const misterio=document.querySelector(".misterio");
const numero=document.querySelector(".num-div");

const lunes=document.querySelector(".lunes");
const martes=document.querySelector(".martes");
const miercoles=document.querySelector(".miercoles");
const jueves=document.querySelector(".jueves");
const viernes=document.querySelector(".viernes");
const sabado=document.querySelector(".sabado");
const domingo=document.querySelector(".domingo");

const padre=document.querySelector(".pad-div");
const ave1=document.querySelector(".aveMaria1");
const ave2=document.querySelector(".aveMaria2");
const ave3=document.querySelector(".aveMaria3");
const ave4=document.querySelector(".aveMaria4");
const ave5=document.querySelector(".aveMaria5");
const ave6=document.querySelector(".aveMaria6");
const ave7=document.querySelector(".aveMaria7");
const ave8=document.querySelector(".aveMaria8");
const ave9=document.querySelector(".aveMaria9");
const ave10=document.querySelector(".aveMaria10");
const gloria=document.querySelector(".gloria");

let hoy=new Date();
console.log(hoy);

let fecha=hoy.getDay();
console.log(fecha);

switch (fecha) {
    case 0: domingo.style.color="red";
            misterios.innerHTML="Gloriosos";
            break;
    case 1: lunes.style.color="red";
            misterios.innerHTML="Gozosos";
            break;
    case 2: martes.style.color="red";
            misterios.innerHTML="Dolorosos";
            break;
    case 3: miercoles.style.color="red";
            misterios.innerHTML="Gloriosos";
            break;
    case 4: jueves.style.color="red";
            misterios.innerHTML="Luminosos";
            break;
    case 5: viernes.style.color="red";
            misterios.innerHTML="Dolorosos";
            break;
    case 6: sabado.style.color="red";
            misterios.innerHTML="Gozosos";
            break;

    default:alert("algo salio mal, revisar codigo");
        break;
}



todo.addEventListener("click",contar);
todo.addEventListener("keypress",contar);
let arreglo=[padre,ave1,ave2,ave3,ave4,ave5,ave6,ave7,ave8,ave9,ave10,gloria];


let contador=0;
let click=0;

function contar(){
    click=click+1;
    console.log(click);
    contador=contador+1;
    let i;
    
    for (i = 0; i < contador; i++) {
        arreglo[i].style.opacity="0.4"
        if (contador==13) {
            for (let j = 0; j < arreglo.length; j++) {
                arreglo[j].style.opacity="1";                
            };
        }
        if (click==1) {
            numero.innerHTML=1;
        }
        if (click==13) {
            numero.innerHTML=2;
            contador=0;  
        }
        else if (click==26) {
            numero.innerHTML=3;
            contador=0;  
        }
        else if (click==39) {
            numero.innerHTML=4;
            contador=0;  
        }
        else if (click==52) {
            numero.innerHTML=5;
            contador=0;  
        }
        else if (click==65) {
            numero.innerHTML="Amén";
            contador=0;
            click=0;
        }
    }
    
    // misterios luminosos

    if (fecha==4 && numero.textContent==1) {
        misterio.innerHTML="El Bautismo en el Jordán";
    }
    if (fecha==4 && numero.textContent==2) {
        misterio.innerHTML="Las bodas de Caná";
    }
    if (fecha==4 && numero.textContent==3) {
        misterio.innerHTML="El anuncio del Reino de Dios";
    }
    if (fecha==4 && numero.textContent==4) {
        misterio.innerHTML="La Transfiguración";
    }
    if (fecha==4 && numero.textContent==5) {
        misterio.innerHTML="La institución de la Eucaristía";
    }
    if (fecha==4 && numero.textContent=="Amén") {
        misterio.innerHTML="";
    }

    // misterios Gloriosos

    if ((fecha==0||fecha==3) && numero.textContent==1) {
        misterio.innerHTML="La resurrección del Hijo de Dios";
    }
    if ((fecha==0||fecha==3) && numero.textContent==2) {
        misterio.innerHTML="La Ascensión del Señor al cielo";
    }
    if ((fecha==0||fecha==3) && numero.textContent==3) {
        misterio.innerHTML="La venida del Espíritu Santo";
    }
    if ((fecha==0||fecha==3) && numero.textContent==4) {
        misterio.innerHTML="La Asunción de María al cielo";
    }
    if ((fecha==0||fecha==3) && numero.textContent==5) {
        misterio.innerHTML="La coronación de María como Reina y Señora de todo lo creado";
    }
    if ((fecha==0||fecha==3) && numero.textContent=="Amén") {
        misterio.innerHTML="";
    }

    // misterios Gozosos

    if ((fecha==1||fecha==6) && numero.textContent==1) {
        misterio.innerHTML="La Encarnación del Hijo de Dios";
    }
    if ((fecha==1||fecha==6) && numero.textContent==2) {
        misterio.innerHTML="La Visitació de Nuestra Señora a su prima Santa Isabel";
    }
    if ((fecha==1||fecha==6) && numero.textContent==3) {
        misterio.innerHTML="El Nacimiento del Hijo de Dios en el portal de Belén";
    }
    if ((fecha==1||fecha==6) && numero.textContent==4) {
        misterio.innerHTML="La presentación de Jesús en el Templo";
    }
    if ((fecha==1||fecha==6) && numero.textContent==5) {
        misterio.innerHTML="El Niño Jesús perdido y hallado en el Templo";
    }
    if ((fecha==1||fecha==6) && numero.textContent=="Amén") {
        misterio.innerHTML="";
    }

    // misterios Dolorosos

    if ((fecha==2||fecha==5) && numero.textContent==1) {
        misterio.innerHTML="La oración en el Huerto";
    }
    if ((fecha==2||fecha==5) && numero.textContent==2) {
        misterio.innerHTML="La flagelación de Jesús atado a la columna";
    }
    if ((fecha==2||fecha==5) && numero.textContent==3) {
        misterio.innerHTML="La coronación de espinas";
    }
    if ((fecha==2||fecha==5) && numero.textContent==4) {
        misterio.innerHTML="Jesús con la Cruz a cuestas camino del Calvario";
    }
    if ((fecha==2||fecha==5) && numero.textContent==5) {
        misterio.innerHTML="La crucifixión y muerte de Jesús";
    }
    if ((fecha==2||fecha==5) && numero.textContent=="Amén") {
        misterio.innerHTML="";
    }

}


