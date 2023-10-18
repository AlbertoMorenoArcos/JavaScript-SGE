
document.addEventListener("DOMContentLoaded",function(tabla){
    padre = document.getElementById("padre");

    //Tabla
    tabla = document.createElement("table");
    tabla.setAttribute("border",2);
    tbody = document.createElement("tbody");
    //Cabecera
    trCabecera = document.createElement("tr");

    thNombre = document.createElement("th");
    thNombre.innerText = "Nombre";
    trCabecera.appendChild(thNombre);

    thTipos = document.createElement("th");
    thTipos.innerText = "Tipos";
    trCabecera.appendChild(thTipos);

    thSats = document.createElement("th");
    thSats.innerText = "Stats";
    trCabecera.appendChild(thSats);

    thMovimientos = document.createElement("th");
    thMovimientos.innerText = "Movimientos";
    trCabecera.appendChild(thMovimientos);

    thFoto = document.createElement("th");
    thFoto.innerText = "Foto";
    trCabecera.appendChild(thFoto);
    
    //TR CUERPO
    trCuerpo = document.createElement("tr");

    //Nombre
    tdNombre = document.createElement("td");
    trCuerpo.appendChild(tdNombre);
    //Tipos
    tdTipos = document.createElement("td");
    trCuerpo.appendChild(tdTipos);
    //Movimientos
    tdStats = document.createElement("td");
    trCuerpo.appendChild(tdStats);
    //Stats
    tdMovimientos = document.createElement("td");
    trCuerpo.appendChild(tdMovimientos);
    
    //Foto
    tdFoto = document.createElement("td");
    img = document.createElement("img");
    tdFoto.appendChild(img);
    trCuerpo.appendChild(tdFoto);
    
    tbody.appendChild(trCabecera);
    tbody.appendChild(trCuerpo);
    tabla.appendChild(tbody);
    padre.appendChild(tabla);

    tabla.style.display = 'none';
    
});

document.getElementById("visualizar").addEventListener("click",añadirFetch);

function añadirFetch(){
    pokemon = document.getElementById("pokemon").value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(response => response.json())
    .then(data => visualizar(data));  
   
}

function visualizar(datos){
    tabla  = document.getElementsByTagName("table")[0];
    tabla.style.display = '';
    stats = datos.stats;
    nStats = "";
    moves = datos.moves;
    nombreMoves = "";


    stats.forEach(contador => {
        nStats += contador.stat.name + ": " + contador.base_stat + "\n ";       
    });

    cincoMovimientos = moves.slice(0,5);
    cincoMovimientos.forEach(movimientos => {
        nombreMoves += movimientos.move.name + "\n ";        
    });

     if (datos.types.length == 2){
        tdTipos.innerText = datos.types[0].type.name.toUpperCase() + " & " + datos.types[1].type.name.toUpperCase();
     }else{
        tdTipos.innerText = datos.types[0].type.name.toUpperCase();
     }

    tdNombre.innerText = datos.name.toUpperCase();   
    tdStats.innerText = nStats.toUpperCase();
    tdMovimientos.innerText = nombreMoves.toUpperCase();
    img.setAttribute("src",datos.sprites.front_default);
    
}

