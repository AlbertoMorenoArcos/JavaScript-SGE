document.getElementById("boton1").addEventListener(getEnlace);
document.getElementById("boton2").addEventListener("click",cambiarParrafo);


function getEnlace(){
    enlaceNuevo = prompt("Introduce la direccion del enlace nuevo.");
    textoNuevo = prompt("Introduce el texto del enlace nuevo.");

    document.getElementsByTagName("a")[2].href = enlaceNuevo;
    document.getElementsByTagName("a")[2].innerHTML = textoNuevo;
}

function cambiarParrafo(){

   cadena = prompt("Introduce el nuevo texto");
   document.getElementsByTagName("p")[1].innerHTML = cadena;
}

