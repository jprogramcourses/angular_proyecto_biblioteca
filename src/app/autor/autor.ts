export class Autor {

    private _id: string;
    private _nombre: string;
    private _apellidos: string;
    private _nacionalidad: string;

    constructor(nombre: string){
        this._nombre = nombre;
    }
    
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }
    public get nacionalidad(): string {
        return this._nacionalidad;
    }
    public set nacionalidad(value: string) {
        this._nacionalidad = value;
    }

}
