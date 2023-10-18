document.getElementById("boton").addEventListener("click", añadir);

function añadir(){
    padre = document.getElementById("padre");
    imagen = document.createElement("img");
    imagen.setAttribute("src", "https://media.istockphoto.com/id/1311916919/es/vector/bombilla-de-dibujo-continua-de-una-l%C3%ADnea-l%C3%A1mpara-en-estilo-lineart-trazo-editable-concepto.jpg?s=1024x1024&w=is&k=20&c=BupIqkDax320XKvo6_yKz36WK8e0Ll39MQgOjbQE8p8=");
    imagen.setAttribute("heigth", "500px");
    imagen.setAttribute("width", "500px");
    padre.appendChild(imagen);
}