clienteJSON = {
    "Cliente":1233,
    "Nombre":"Pedro Ramirez",
    "Dirección":"Calle de la piruleta 14",
    "ultimo_pedido": 
    {
        "id_pedido": 2,    
        "Productos":
        [    
            {
                "id_producto":77, 
                "Nombre":"Impresora Láser", 
                "Fabricante":"Canon", 
                "Cantidad":3,
        "precio_uni":80
            },
            {
                "id_producto":22, 
                "Nombre":"Ratón Gamer", 
                "Fabricante":"Logitech", 
                "Cantidad":2,
        "precio_uni":55
            }    
        ]
    }
}

document.getElementById("mostrarJSON").addEventListener("click",mostrarJSON);

function mostrarJSON(){
    var p = document.createElement("p");
    var nombre = clienteJSON.Nombre;
    var direccion = clienteJSON.Dirección;
    var nombreProducto1 = clienteJSON.ultimo_pedido.Productos[0].Nombre;
    var nombreProducto2 = clienteJSON.ultimo_pedido.Productos[1].Nombre;
    var fabricanteProducto1 = clienteJSON.ultimo_pedido.Productos[0].Fabricante;
    var fabricanteProducto2 = clienteJSON.ultimo_pedido.Productos[1].Fabricante;
    var cantidadProducto1 = clienteJSON.ultimo_pedido.Productos[0].Cantidad;
    var cantidadProducto2 = clienteJSON.ultimo_pedido.Productos[1].Cantidad;
    var precioTotal = (clienteJSON.ultimo_pedido.Productos[0].precio_uni*3) + (clienteJSON.ultimo_pedido.Productos[1].precio_uni*2);
    
    p.innerHTML = "El cliente " + nombre + "que vive en " + direccion + " ha comprado:</br>" +
    cantidadProducto1 + " " + nombreProducto1 + " " + fabricanteProducto1 + "</br>" +
    cantidadProducto2 + " " + nombreProducto2 + " " + fabricanteProducto2 + "</br>" +
    "Por un importe total de " + precioTotal;



    document.body.appendChild(p);
}