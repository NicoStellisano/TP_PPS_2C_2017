import { AlumnoItem } from '../alumno-item/alumno-imte.interface';
import { AlumnoPresenteItem } from '../alumno-presente/alumno-presente.interface';

export interface AlumnoListaPresente{
    alumnos:Array<AlumnoItem>;
    presentes:Array<AlumnoPresenteItem>;
}