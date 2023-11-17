document.getElementById("btContar").addEventListener("click",contar);

function contar(){
    let contadorParrafos = 0;
    let contadorEnlaces = 0;
    for(i=0;i<document.getElementsByTagName("p").length;i++){
        contadorParrafos++;       
    }
    for(i=0;i<document.getElementsByTagName("a").length;i++){
        contadorEnlaces++;       
    }
    
    console.log("Nº Parrafos:" + contadorParrafos);
    alert("Nº Enlaces: "+ contadorEnlaces);


    var enlace4 = document.getElementsByTagName('a')[3];
    var parrafo4 = document.getElementsByTagName('p')[3];
   

    var aParrafo = document.createElement("p");
    aParrafo.innerText = "El cuarto enlace es: " + enlace4;
    parrafo4.appendChild(aParrafo);
}