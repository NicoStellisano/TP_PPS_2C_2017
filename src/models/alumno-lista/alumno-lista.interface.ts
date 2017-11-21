import { AlumnoItem } from '../alumno-item/alumno-imte.interface';

export interface AlumnoListaItem{
    aula:string;
    alumnos:Array<AlumnoItem>;
}