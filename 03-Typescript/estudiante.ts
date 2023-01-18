import { Persona } from "./persona";

export class Estudiante extends Persona{
    private correo: string;
    private contrasena: string;

    constructor(correo: string, contrasena: string, persona: Persona){
        super(persona.getNombre(), persona.getApellido(), persona.getEdad());
        this.correo = correo;
        this.contrasena = contrasena;
    }
}