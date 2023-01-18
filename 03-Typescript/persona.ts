export class Persona{
    private nombre: string;
    private apellido: string;
    private edad: number;

    constructor(nombre: string, apellido: string, edad: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar(nombreASaludar: string){
        let variable = "valor";
        return "Hola " + nombreASaludar + ", me llamo " + this.nombre;    
    }

    setNombre(nombre: string): void{
        this.nombre = nombre;
    }

    setApellido(apellido: string): void{
        this.apellido = apellido;
    }

    setEdad(edad: number): void{
        this.edad = edad;
    }

    getNombre(): string{
        return this.nombre;
    }

    getApellido(): string{
        return this.apellido;
    }

    getEdad(): number{
        return this.edad;
    }
}