export class Curso{
    private _nombre: string;
    private _comision: string;
    private _profesor: string;

    get nombre(): string{
        return this._nombre;
    }

    set nombre(nombre: string){
        this._nombre = nombre;
    }

    get comision(): string{
        return this._comision;
    }

    set comision(comision: string){
        this._comision = comision;
    }

    get profesor(): string{
        return this._profesor;
    }

    set profesor(profesor: string){
        this._profesor = profesor;
    }
}