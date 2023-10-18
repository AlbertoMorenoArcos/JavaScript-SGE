let array = [];
let palabra;
let comprobacion = false;
while(comprobacion != true){      
    palabra= prompt("Introduce una palabra");
        array.push(palabra);
    if(palabra == "fin"){
        comprobacion = confirm("¿Ya no quieres introducir más palabras?")  
        if(palabra =="fin"){
            array.pop();
        }
    } 
}

array.pop(); 
for(objeto in array){
    document.write("<h1>" + array[objeto] + "</h1>");
}