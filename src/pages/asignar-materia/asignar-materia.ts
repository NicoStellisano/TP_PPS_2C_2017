import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireAuth } from 'angularfire2/auth';
// for databas
import { AngularFireDatabase } from 'angularfire2/database';
import  firebase  from 'firebase';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { MateriaPage } from '../materia/materia';
import { ViewController } from 'ionic-angular';
/* Generated class for the AsignarMateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asignar-materia',
  templateUrl: 'asignar-materia.html',
})
export class AsignarMateriaPage {
materiaD:string;
curso:string;
listaAlumnos:any[]=[];
aula:string;
listaAux:any[]=[];
listaProfesores:any[]=[];

profesor:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,public viewCtrl: ViewController,public alertCtrl:AlertController) {
    this.materiaD=this.navParams.get("materia");
    this.aula=this.navParams.get("aula");

    console.log("--------------- Estoy en adignar materia ------------------");
    
   
  }

  ionViewDidLoad() {
    this.fireService.getAlumnos().subscribe(data=>
      {
        this.listaAlumnos=data;
      });

      this.fireService.getProfesores().subscribe(data=>
        {
          this.listaProfesores=data;
        });
  }

  asignar()
  {
    try {
    //  this.fireService.addMateria({materiaD:this.materiaD,curso:this.curso,nombre:this.materia});
    for (let i = 0; i < this.listaAlumnos.length; i++) {
      const element = this.listaAlumnos[i];
      if(element.aula==this.aula && element.materia==this.materiaD)
      {
        this.listaAux=this.listaAlumnos;
        this.listaAux[i].profesor=this.profesor.Apellido;
        
      //this.listaAux[i]=
        this.fireService.updateAlumnoLista(this.listaAux,element['$key']);
        this.fireService.getAlumnos().subscribe(data=>
          {
            this.listaAlumnos=data;
          });
        
        
      }
    }
      let alert = this.alertCtrl.create({
        title: "Exito!",
        subTitle: "Profesor asignado",
        cssClass:"miClaseAlert",
      buttons: ['Aceptar']
    });
     alert.present();
      this.viewCtrl.dismiss();
    } catch (error) {
      let alert = this.alertCtrl.create({
        title: "Error!",
        subTitle: "No se pudo asignar el profesor",
        cssClass:"miClaseDanger",
      buttons: ['Aceptar']
    });
     alert.present();
      console.log(error);
    }
      
  }

}
