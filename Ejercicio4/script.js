
rbTexto= document.getElementById("rbTexto");
rbEnlace = document.getElementById("rbEnlace");
rbFoto = document.getElementById("rbFoto");
document.getElementById("boton").addEventListener("click", añadir);

function añadir(){
    texto = document.getElementById("texto").value;
    li = document.createElement("li");
    
    if(rbTexto.checked == true){
        li.innerHTML = texto;
        ul.appendChild(li);
    }
    if(rbEnlace.checked == true){
        a = document.createElement("a");
        a.setAttribute("href",texto);
        a.innerHTML = texto; 
        ul.appendChild(li);
        li.appendChild(a);
    }
    if (rbFoto.checked == true){
        img = document.createElement("img");
        img.setAttribute("src",texto);
        ul.appendChild(li);
        li.appendChild(img);
    }
}
