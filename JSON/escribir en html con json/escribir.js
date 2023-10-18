alumnos = [
    {//ALUMNO 1
        "nombre" : "Pedro",
        "apellido" : "Perez",
        "edad" : 26,
        "estadoCivil" : "Soltero",
        "telefono" : 634198643
    },
    {//ALUMNO 2
        "nombre" : "Juan",
        "apellido" : "Lopez",
        "edad" : 33,
        "estadoCivil" : "Casado",
        "telefono" : 634974833,
    }
]


document.getElementById("btAñadir").addEventListener("click",añadir);

function añadir(){

   ul =  document.createElement("ul");
   document.body.appendChild(ul);


    alumnos.forEach(alumno => {
        liNombre = document.createElement("li");
        liApellido = document.createElement("li");
        liEdad = document.createElement("li");
        liestadoCivil = document.createElement("li");
        liTelefono = document.createElement("li");
        liNombre.innerHTML = "Nombre: " + alumno.nombre;
        liApellido.innerHTML = "Apellido: " + alumno.apellido;
        liEdad.innerHTML = "Edad: " + alumno.edad;
        liestadoCivil.innerHTML = "Estado civil: " + alumno.estadoCivil;
        liTelefono.innerHTML = "Telefono: " + alumno.telefono + "</br>";
        ul.appendChild(liNombre);
        ul.appendChild(liApellido);
        ul.appendChild(liEdad);
        ul.appendChild(liestadoCivil);
        ul.appendChild(liTelefono);
    });

    }
    

