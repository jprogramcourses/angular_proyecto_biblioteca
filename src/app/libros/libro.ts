import { Autor } from "../autor/autor";

export class Libro {

    private _id: string;
    private _titulo: string;
    private _anhoPublicacion: number;
    private _paginas: number;
    private _createdAt: string;
    private _lastModified: string;
    private _autores: Autor[];
    private _genero: string;
    private _editorial: string;
    private _descripcion: string;
    private _portada: string;

    constructor(titulo: string, genero: string, paginas: number, descripcion: string, anhoPublicacion: number, portada: string){
        this._titulo = titulo;
        this._genero = genero;
        this._paginas = paginas;
        this._descripcion = descripcion;
        this._anhoPublicacion = anhoPublicacion;
        this._portada = portada;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }
    public get autores(): Autor[] {
        return this._autores;
    }
    public set autores(value: Autor[]) {
        this._autores = value;
    }
    public get genero(): string {
        return this._genero;
    }
    public set genero(value: string) {
        this._genero = value;
    }
    public get paginas(): number {
        return this._paginas;
    }
    public set paginas(value: number) {
        this._paginas = value;
    }
    public get createdAt(): string {
        return this._createdAt;
    }
    public set createdAt(value: string) {
        this._createdAt = value;
    }
    public get lastModified(): string {
        return this._lastModified;
    }
    public set lastModified(value: string) {
        this._lastModified = value;
    }
    public get editorial(): string {
        return this._editorial;
    }
    public set editorial(value: string) {
        this._editorial = value;
    }
    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }
    public get anhoPublicacion(): number {
        return this._anhoPublicacion;
    }
    public set anhoPublicacion(value: number) {
        this._anhoPublicacion = value;
    }
    public get portada(): string {
        return this._portada;
    }
    public set portada(value: string) {
        this._portada = value;
    }

}
