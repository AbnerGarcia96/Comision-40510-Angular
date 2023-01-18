let mensaje1: string = "Hola :)";
const mensaje2: string = "Esta semana quedo campeon el Barcelona";
let mensaje3: string = mensaje1 + " " + mensaje2;
let n1: number = 3;
let n2: number = 2.5;
let n3: number = n1*n2;
let booleano: boolean = false;
enum opciones {
    Delivery = 1,
    Pickup = 2,
    "Delivery A Casillero" = 3,
    "opcionNueva" = 4
}
let mensaje4: string = "Prueba"

function imprimirMensajes(){
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