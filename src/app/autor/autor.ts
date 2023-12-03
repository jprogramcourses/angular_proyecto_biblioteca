export class Autor {

    private _id: string;
    private _nombre: string;
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
    public get nombre_1(): string {
        return this._nombre;
    }
    public set nombre_1(value: string) {
        this._nombre = value;
    }
    public get nacionalidad(): string {
        return this._nacionalidad;
    }
    public set nacionalidad(value: string) {
        this._nacionalidad = value;
    }

}
