import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlumnoItem } from '../../models/alumno-item/alumno-imte.interface';
import { AlumnoListaItem } from '../../models/alumno-lista/alumno-lista.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the DescargarArchivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descargar-archivo',
  templateUrl: 'descargar-archivo.html',
})
export class DescargarArchivoPage {

  aula:string;
  listaAlumnosCsv:AlumnoItem[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase) {
    this.aula = this.navParams.get('aulaa');


    //Toma lista para leer y crear archivo
    this.lista(this.aula).subscribe(dato => {
      //lista de alumnos en el aula
      this.listaAlumnosCsv = dato.values().next().value.alumnos;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescargarArchivoPage');
  }

  generaCSV(){
  
    let csvContent = "data:text/csv;charset=utf-8,";
    
    this.listaAlumnosCsv.forEach(alumno => {
      //alumno
      console.log(alumno);
      csvContent += this.generarLinea(alumno);
    });
    
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "alumnos.csv");
    document.body.appendChild(link); // Required for FF
         
    link.click();      
  }
    
  generarLinea(alumno:AlumnoItem):string{ 
    var texto:string;
    texto = alumno.legajo+";"+alumno.mail+";"+alumno.nombre+";"+alumno.turno+";\r\n";
    console.log("genera linea: "+texto);
    return texto;
  }
    
  lista(aula){
    
    return this.database.list('/alumno-lista/' ,{
            query: {
              orderByChild :"aula",
              equalTo:aula
            }
           });
  }

}
