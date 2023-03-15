import { Usuario } from "./usuario";

export interface Sesion{
    sesionActiva: boolean;
    usuarioActivo?: Usuario;
}