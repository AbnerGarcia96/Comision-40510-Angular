var mensaje1 = "Hola :)";
var mensaje2 = "Esta semana quedo campeon el Barcelona";
var mensaje3 = mensaje1 + " " + mensaje2;
var n1 = 3;
var n2 = 2.5;
var n3 = n1 * n2;
var booleano = false;
var opciones;
(function (opciones) {
    opciones[opciones["Delivery"] = 1] = "Delivery";
    opciones[opciones["Pickup"] = 2] = "Pickup";
    opciones[opciones["Delivery A Casillero"] = 3] = "Delivery A Casillero";
    opciones[opciones["opcionNueva"] = 4] = "opcionNueva";
})(opciones || (opciones = {}));
var mensaje4 = "Prueba";
function imprimirMensajes() {
    console.log("Mensaje 1: ", mensaje1);
    console.log("Mensaje 2: ", mensaje2);
    console.log("Mensaje 3: ", mensaje3);
    console.log("Numero 1: ", n1);
    console.log("Numero 2: ", n2);
    console.log("Numero 3: ", n3);
    console.log("Booleano: ", booleano);
    console.log("Enum: ", opciones);
}
imprimirMensajes();
