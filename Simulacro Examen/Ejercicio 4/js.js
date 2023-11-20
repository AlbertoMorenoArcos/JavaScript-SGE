boton = document.getElementsByTagName("input")[0];
boton.addEventListener("click", enviar);


alumnos = [{
    "alumno1": {
        "Nombre": "Pedro",
        "Edad": 15,
        "NumeroTelefono": 606999875,
        "Asignaturas": [
            {
                "Asignatura1": "Lengua",
                "Asignatura2": "Mates",
                "Asignatura3": "Conocimiento"
            }
        ],
        "vivienda": [
            {
                "Localidad": "Madrid",
                "Calle": "Calle falsa 123",
                "Poblacion": "Madrid",
                "CodigoPostal": 29000,
                "Coche": "Si"
            }
        ]
    },
    "alumno2": {
        "Nombre": "Juan",
        "Edad": 12,
        "NumeroTelefono": 603249875,
        "Asignaturas": [
            {
                "Asignatura1": "Lengua",
                "Asignatura2": "Filosofia",
                "Asignatura3": "Arte"
            }
        ],
        "vivienda": [
            {
                "Localidad": "Madrid",
                "Calle": "Calle falsa 789",
                "Poblacion": "Getafe",
                "CodigoPostal": 56800,
                "Coche": "No"
            }
        ]
    }

}
]

function enviar() {
    console.log(alumnos);

}