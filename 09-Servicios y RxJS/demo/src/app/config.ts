import { InjectionToken } from "@angular/core";
import { Configuracion } from "./models/configuracion";
import { CursoService } from "./services/curso.service";
import { UsuarioService } from "./services/usuario.service";

export const config: Configuracion = {
    urlAPI: 'https://data.mockapi.io',
    servicios: {
        cursoService: new CursoService(),
        usuarioService: new UsuarioService()
    }
}

export const token = new InjectionToken<Configuracion>('configuracion');