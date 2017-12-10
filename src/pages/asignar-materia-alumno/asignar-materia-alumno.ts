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
listaAulas:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,public viewCtrl: ViewController,public alertCtrl:AlertController) {
   
    this.alumno=this.navParams.get('alumno');
    this.legajo=this.navParams.get('legajo');
    
    
   
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

setTimeout(() => {
  this.act();
}, 500);
       

     
  }
act()
{
  for (let i = 0; i < this.listaAlumnos.length; i++) {
    const element = this.listaAlumnos[i];
    let flag=false;
    for (let j = 0; j < this.listaAulas.length; j++) {
      const element2 = this.listaAulas[j];
      if(element.aula==element2.aula)
      {
        flag=true;
        break;
      }
    }
    if(!flag)
    {
      this.listaAulas.push(element);
    }
    
  }
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
    let bandera=false;
try{
    for (let i = 0; i < this.listaAlumnos.length; i++) {
      const element = this.listaAlumnos[i];
      if(element.aula==this.aula && element.materia==this.materia)
      {
        for (let j = 0; j < element.alumnos.length; j++) {
          let element2 = element.alumnos[j];
          if(element2.nombre==this.alumno)
          {
            let alert = this.alertCtrl.create({
              title: "Error!",
              subTitle: "El alumno ya está inscripto en esta materia",
              cssClass:"miClaseDanger",
            buttons: ['Aceptar']
          });
          alert.present();
          bandera=true;
          break;
          }
        }
        if(!bandera)
        {
          this.listaAux=element.alumnos;
         for (let h = 0; h < this.listaABMAlumnos.length; h++) {
           const elementh =  this.listaABMAlumnos[h];
           if(elementh.legajo==this.legajo)
           {
             this.listaAux.push(elementh);
             this.fireService.updateAlumno(this.listaAux,element['$key']);
             let alert = this.alertCtrl.create({
              title: "Exito!",
              subTitle: "Alumno asignado",
              cssClass:"miClaseAlert",
            buttons: ['Aceptar']
          });
           alert.present();
           this.viewCtrl.dismiss();
           }
           
         }
   
        }
       
        
                
                break;

          }
        }

     
    
     
      
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

