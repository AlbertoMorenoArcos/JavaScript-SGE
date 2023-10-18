
document.getElementById("boton1").addEventListener("click",añadirEnlace);

function añadirEnlace(){
    let enlace1;
    let enlace2;
    let enlace3;
    let enlace4;
    
    let arrayEnlaces = [];
    
    enlace1 = document.getElementsByTagName("a")[0].href;
    enlace2 = document.getElementsByTagName("a")[1].href;
    enlace3 = document.getElementsByTagName("a")[2].href;
    enlace4 = document.getElementsByTagName("a")[3].href;
    
    arrayEnlaces.push(enlace1);
    arrayEnlaces.push(enlace2);
    arrayEnlaces.push(enlace3);
    arrayEnlaces.push(enlace4);

    lista = document.getElementById("enlacesNuevos");

    for(let i=0; i<arrayEnlaces.length; i++){
        elemento = document.createElement("a"); 
        elemento.href =  arrayEnlaces[i];
        elemento.innerHTML = arrayEnlaces[i];
        lista.appendChild(elemento);
        
    }
}


