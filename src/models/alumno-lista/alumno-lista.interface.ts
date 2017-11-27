import { AlumnoItem } from '../alumno-item/alumno-imte.interface';

export interface AlumnoListaItem{
    aula:string;
    materia:string;
    alumnos:Array<AlumnoItem>;
}