document.getElementById("btAñadir").addEventListener("click", añadir);



function añadir(){
    var alumnos = [];
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    edad = document.getElementById("edad").value;
    soltero = document.getElementById("soltero");
    casado = document.getElementById("casado");


    var alumno = {};

    alumno.nombre = nombre;
    alumno.apellido = apellido;
    alumno.edad = edad;
    if(soltero.checked){
        alumno.eCivil = "Soltero";
    }else if(casado.checked){
        alumno.eCivil = "Casado";
    }
    
    alumnos.push(alumno);
    
    
    JSON.stringify(alumnos);
    console.log(alumnos);
    ul = document.createElement("ul");
    document.body.appendChild(ul);

        liNombre = document.createElement("li");
        liApellido = document.createElement("li");
        liEdad = document.createElement("li");
        liECivil = document.createElement("li");

        liNombre.innerText = `Nombre: ${alumno.nombre}`;
        liApellido.innerText = `Apellido: ${alumno.apellido}`;
        liEdad.innerText = `Edad: ${alumno.edad}`;
        liECivil.innerText = `Estado Civil: ${alumno.eCivil}`;
        ul.appendChild(liNombre);
        ul.appendChild(liApellido);
        ul.appendChild(liEdad);
        ul.appendChild(liECivil);

}


