document.getElementById("boton").addEventListener("click", añadir);

function añadir(){
    padre = document.getElementById("padre");
    marca = document.getElementById("marca").value;    
    modelo = document.getElementById("modelo").value;
    

    elemento = document.createElement("li");
    elemento.innerText = "este vehiculo es de la marca " + marca + " y el modelo" + modelo; 
    padre.appendChild(elemento);

}