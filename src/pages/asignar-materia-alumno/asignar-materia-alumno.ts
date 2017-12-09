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
  selector: 'page-asignar-materia-alumno',
  templateUrl: 'asignar-materia-alumno.html',
})
export class AsignarMateriaAlumnoPage {
materia:string;
curso:string;
listaAlumnos:any[]=[];
listaABMAlumnos:any[]=[];
aula:string;
listaAux:any[]=[];
alumno:string;
profesor:any;
legajo:any;
listaMaterias:any[]=[];


  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,public viewCtrl: ViewController,public alertCtrl:AlertController) {
   
    this.alumno=this.navParams.get('alumno');

    
    
   
  }

  ionViewDidLoad() {
    this.fireService.getAlumnos().subscribe(data=>
      {
        this.listaAlumnos=data;
      });

      this.fireService.getABMAlumnos().subscribe(data=>
        {
          this.listaABMAlumnos=data;
        });

     
  }

  changeList(aula)
  {
    this.aula=aula;
    this.listaMaterias=[];
    for (let i = 0; i < this.listaAlumnos.length; i++) {
      const element = this.listaAlumnos[i];
      if(element.aula==aula)
      {
        this.listaMaterias.push(element);
             
      }
    }
  }

  
  changeMateria(materia)
  {
    this.materia=materia;
  }

  asignar()
  {
try{
    for (let i = 0; i < this.listaAlumnos.length; i++) {
      const element = this.listaAlumnos[i];
      if(element.aula==this.aula && element.materia==this.materia)
      {
        element.alumnos=this.listaAux;
        this.listaAux.push(element);

                this.fireService.updateAlumno(this.listaAux,element['$key']);
                
                break;

          }
        }

     
    
      let alert = this.alertCtrl.create({
        title: "Exito!",
        subTitle: "Alumno asignado",
        cssClass:"miClaseAlert",
      buttons: ['Aceptar']
    });
     alert.present();
      this.viewCtrl.dismiss();
    } catch (error) {
      let alert = this.alertCtrl.create({
        title: "Error!",
        subTitle: "No se pudo asignar el alumno",
        cssClass:"miClaseDanger",
      buttons: ['Aceptar']
    });
     alert.present();
      console.log(error);
    }
      
  }

}

