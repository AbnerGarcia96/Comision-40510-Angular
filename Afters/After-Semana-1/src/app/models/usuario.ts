export interface Usuario{
    nombre: string;
    contrasena: string;
    admin: boolean;

    agregarUsuario(id: number): string;
}