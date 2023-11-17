instituto = {
    "Profesores" : 
    {
        "profesor1" : 
        [
            {
            "nombre" : "Pedro perez",
            "dni" : "50235672D",
            "telefono" : "678543098",
            "departamento" : "Empresariales",
            "asignaturas" : [
                {
                    "asignatura1" : "FOL",
                    "asignatura2" : "EIE"
                }
            ]
        }
        ],
        "profesor2" : 
        [
            {
            "nombre" : "Paco Lopez",
            "dni" : "6785672I",
            "telefono" : "632732098",
            "departamento" : "Filosofia",
            "asignaturas" : 
            [
                {
                    "asignatura1" : "Filosofia grado 1"
                }
            ],
            "proyectos" : 
            [
                {
                    "proyecto1" : "Aristoteles",
                    "proyecto2" : "Platón",
                }
            ]
        }
        ],
        "profesor3" : 
        [
            {
            "nombre" : "Ana Suarez",
            "dni" : "9711677S",
            "telefono" : "64617543",
            "departamento" : "Matematicas",
            "asignaturas" : 
            [
                {
                    "asignatura1" : "Matematicas grado 1",
                    "asignatura2" : "Matematicas grado 1",
                    "asignatura3" : "Matematicas grado 1",
                    "asignatura4" : "Matematicas grado 1",
                }
            ],
            "proyectos" : 
            [
                {
                    "proyecto1" : "Funciones Derivadas"
                }
            ]
        }
        ]

    }
}
document.getElementById("mostrarJSON").addEventListener("click",mostrarJSON);

function mostrarJSON(){
console.log(instituto);
}