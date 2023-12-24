import { Autor } from "../autor/autor";

export class Libro {

    private _id: string;
    private _titulo: string;
    private _autor: Autor;
    private _genero: string;
    private _paginas: number;
    private _editorial: string;
    private _descripcion: string;
    private _anhoPublicacion: number;
    private _imagen: string;

    constructor(id: string, titulo: string, autor: Autor, genero: string, paginas: number, editorial: string, descripcion: string, anhoPublicacion: number, imagen: string){
        this._id = id;
        this._titulo = titulo;
        this._autor = autor;
        this._genero = genero;
        this._paginas = paginas;
        this._editorial = editorial;
        this._descripcion = descripcion;
        this._anhoPublicacion = anhoPublicacion;
        this._imagen = imagen;
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
    public get autor(): Autor {
        return this._autor;
    }
    public set autor(value: Autor) {
        this._autor = value;
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
    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }

}
