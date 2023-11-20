document.getElementById("debajo").addEventListener("click",añadirFinal);
document.getElementsByTagName("input")[1].addEventListener("click",añadirInicio);

function añadirInicio(){
    ul = document.getElementById("lista");
    texto = document.getElementsByTagName("input")[0].value;
    li = document.createElement("li");
    li.innerText = texto;
    ul.insertBefore(li,ul.firstChild);
}
function añadirFinal(){
    ul = document.getElementById("lista");
    texto = document.getElementsByTagName("input")[0].value;
    li = document.createElement("li");
    li.innerText = texto;
    ultimoElemento = ul.lastChild;
    ultimoElemento.appendChild(li);
}