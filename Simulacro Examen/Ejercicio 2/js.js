document.getElementsByTagName("input")[5].addEventListener("click", enviar);

function enviar() {
    let nombre = document.getElementsByTagName("input")[0].value;
    let apellido = document.getElementsByTagName("input")[1].value;
    let azul = document.getElementsByTagName("input")[2];
    let rojo = document.getElementsByTagName("input")[3];
    let verde = document.getElementsByTagName("input")[4];
    let color = "";

    if (azul.checked) {
        color += " Azul";
    }
    if (rojo.checked) {
        color += " Rojo";
    }
    if (verde.checked) {
        color += " Verde";
    }

    if (nombre != "" && apellido != "" && nombre.length > 5 && nombre.length < 40 && color != "") {
        alert(nombre + " " + apellido + color);
    } else {
        alert("ERROR. Faltan datos")
    }
}
