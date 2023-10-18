document.getElementById("visualizar").addEventListener("click",obtener);
function obtener(){
    name = document.getElementById("name").value;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '757b23b54amshc9a121b0ee86f37p12a492jsn2b88d4598f8b',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${name}`, options)
    .then(response => response.json())
    .then(datos => visualizar(datos))
    .catch(error => console.log('error', error));
}

function visualizar(datos){
    tabla  = document.getElementsByTagName("table")[0];
    tabla.style.display = '';
    
    nombre = datos.data[0].title;
    album = datos.data[0].album.title;
    artista = datos.data[0].artist.name;
    duracion = datos.data[0].duration;
    

    tdNombre.innerText = nombre.toUpperCase();
    tdArtista.innerText = artista.toUpperCase();
    tdAlbum.innerText = album.toUpperCase();

    tdDuracion.innerText = duracion;   
    img.setAttribute("src",datos.data[0].artist.picture);   
}

document.addEventListener("DOMContentLoaded",function(tabla){
    padre = document.getElementById("padre");

    //Tabla
    tabla = document.createElement("table");
    tabla.setAttribute("border",2);
    tbody = document.createElement("tbody");
    //Cabecera
    trCabecera = document.createElement("tr");

    thNombre = document.createElement("th");
    thNombre.innerText = "Nombre Cancion";
    trCabecera.appendChild(thNombre);

    thArtista = document.createElement("th");
    thArtista.innerText = "Artista";
    trCabecera.appendChild(thArtista);

    thAlbum = document.createElement("th");
    thAlbum.innerText = "Album";
    trCabecera.appendChild(thAlbum);

    thDuracion = document.createElement("th");
    thDuracion.innerText = "Duracion";
    trCabecera.appendChild(thDuracion);

    thFoto = document.createElement("th");
    thFoto.innerText = "Foto Artista";
    trCabecera.appendChild(thFoto);
    
    //TR CUERPO
    trCuerpo = document.createElement("tr");

    //Nombre
    tdNombre = document.createElement("td");
    tdNombre.setAttribute("align", "center");
    trCuerpo.appendChild(tdNombre);
    //Artista
    tdArtista = document.createElement("td");
    tdArtista.setAttribute("align", "center");
    trCuerpo.appendChild(tdArtista);
    //Album
    tdAlbum = document.createElement("td");
    tdAlbum.setAttribute("align", "center");
    trCuerpo.appendChild(tdAlbum);
    //Duracion
    tdDuracion = document.createElement("td");
    tdDuracion.setAttribute("align", "center");
    trCuerpo.appendChild(tdDuracion);
    
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
