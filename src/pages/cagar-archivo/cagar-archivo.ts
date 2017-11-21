import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AlumnoItem } from '../../models/alumno-item/alumno-imte.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
//import { FileOpener } from '@ionic-native/file-opener';

/**
 * Generated class for the CagarArchivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * $ ionic cordova plugin add cordova-plugin-file-opener2
 * $ npm install --save @ionic-native/file-opener
 * 
 */

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

  alumno:AlumnoItem;
  listaAlumnos:AlumnoItem[] = [];
  nombreArchivo:string;
  sizeArchivo:string;
  aula:string;
  alumnoLista$: FirebaseListObservable<AlumnoItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase) {
    this.aula = this.navParams.get('aulaa');
    this.alumnoLista$ = this.database.list('alumno-lista');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CagarArchivoPage');
  }
  
  leeArchivos(numarchivo:number,file:any) {

    let alumno = {} as AlumnoItem;
    let lista:AlumnoItem[] = [];
    var fr = new FileReader();
    var arrayFilas:string[][];

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
        console.log(alumno.turno);
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

  descargarArchvio(){
    console.log("Descarga archivo PDF");
  }
}


