import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AlumnoItem } from '../../models/alumno-item/alumno-imte.interface';
import { AlumnoListaItem } from '../../models/alumno-lista/alumno-lista.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { GeneratedFile } from '@angular/compiler';
import { AulaAlumnoItem } from '../../models/aula-alumno-item/aula-alumno.interface';
import { DescargarArchivoPage } from '../descargar-archivo/descargar-archivo';

export class GeochemComponent implements OnInit {
  
    static muestras:string[][]=[];
    static muestras2:string[][]=[];
    ngOnInit(){}
  }

@IonicPage()
@Component({
  selector: 'page-cagar-archivo',
  templateUrl: 'cagar-archivo.html',
})
export class CagarArchivoPage {

  //Atributos de descarga
  listaAlumnos:AlumnoItem[] = [];
  
  listaAlumnoItem:AlumnoListaItem[]=[];
  
  nombreArchivo:string;
  sizeArchivo:string;
  aula:string;

  alumnoLista$: FirebaseListObservable<AlumnoItem[]>;
  alumnoListaItem$: FirebaseListObservable<AlumnoListaItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase) {
    this.aula = this.navParams.get('aulaa');
    this.alumnoLista$ = this.database.list('alumno-lista');
    this.alumnoListaItem$ = this.database.list('alumno-lista');

    this.alumnoListaItem$.subscribe(alumLista =>{
      this.listaAlumnoItem = alumLista;
    });


     
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CagarArchivoPage');
    
  }
  
  leeArchivos(numarchivo:number,file:any) {

    let alumno = {} as AlumnoItem;
    let lista:AlumnoItem[] = [];
    var fr = new FileReader();
    var arrayFilas:string[][];

    //--------------------- Lectura del archivo -------------------------//
    fr.onload = function(e) {
      var text = fr.result;
      var rows = text.split("\n");
      arrayFilas=[];
      
      //guardo todas las filas en un array separando cada atributo que tenga ;
      for (var t=0;t<rows.length-1;t++) {
        if (rows[t].length!=0) {
          //console.log(rows[t].split(";"));
          arrayFilas.push(rows[t].split(";"));
        }
      }

      //Tomo cada elemento del arrayFilas y lo transformo en un alumnno para guardalos en listaAlumno
      for (let index = 0; index < arrayFilas.length; index++) {
        const elemento = arrayFilas[index];
        //console.log(element0);
        alumno.legajo = elemento[0].trim();
        alumno.nombre = elemento[1].trim();
        alumno.turno = elemento[2].trim();
        alumno.mail = elemento[3].trim();
        //console.log(alumno);
        lista.push(alumno);

        alumno = {} as AlumnoItem;
      }

      if(numarchivo==0) {
        GeochemComponent.muestras=arrayFilas.slice();
      } else if (numarchivo==1) {
        GeochemComponent.muestras2=arrayFilas.slice();
      }
    };

    fr.readAsText(file,'ISO-8859-4');
    
    this.listaAlumnos = lista;
    console.log(this.listaAlumnos);
    console.log(file.name);
    console.log(file.size);
    this.nombreArchivo = file.name;
    this.sizeArchivo = file.size/1000 + " Kb";

  }

 

  onFileSelect(input: HTMLInputElement) {
    var files = input.files;
    var len = files.length;
    for (var b=0;b<len;b++) {
      this.leeArchivos(b,files[b]);
    }
  }

  cargarLista(){
    console.log("Carga lista a firebase");
    this.alumnoLista$.push({
      aula:this.aula,
      alumnos:this.listaAlumnos
    });
  }

  descargarArchivo(){
    let miAula:string;

    this.listaAlumnoItem.forEach(aula => {
      console.log(aula);
      if(aula.aula == this.aula){
        miAula = aula.aula;
      }
    });

    if(miAula == this.aula){
      alert("Ir a descarga");
      this.navCtrl.push(DescargarArchivoPage,{aulaa:this.aula});
    }else{
      alert("No hya nada que descargar");
    }
    
  }


}


