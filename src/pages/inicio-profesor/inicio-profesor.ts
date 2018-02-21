import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MateriasProfesorPage} from '../materias-profesor/materias-profesor';
import { AulaProfesorPage } from '../aula-profesor/aula-profesor';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireAuth } from 'angularfire2/auth';
// for databas
import { AngularFireDatabase } from 'angularfire2/database';
import  firebase  from 'firebase';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { MateriaPage } from '../materia/materia';
import { AulaAdministrativoPage } from '../aula-administrativo/aula-administrativo';
import { ActionSheetController } from 'ionic-angular';
import { SettingProvider } from '../../providers/setting/setting';

import { TemaCustom } from '../../models/tema-custom/tema-custom';
/**
 * Generated class for the InicioProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-profesor',
  templateUrl: 'inicio-profesor.html',
})
export class InicioProfesorPage {
  aula: string;
  listaMateriasProfesor: any[]=[];
  listaAlumnos: any[]=[];
  apellido:string;

  selectTheme:String;
  miTema:TemaCustom;
  tema:string="";
  

  constructor(public navCtrl: NavController,private setting: SettingProvider,public actionSheetCtrl: ActionSheetController, public navParams: NavParams,public fireService : FireBaseServiceProvider) {
    //tema custom
    this.miTema = {colorFondo:"",colorLetra:"",colorBoton:"",colorNav:"",sizeLetra:"",tipoLetra:"",radioButton:"",iconoAgregar:"",iconoTema:""};
    this.tema = localStorage.getItem('tema');
    localStorage.setItem('home',"profesor");
    console.log("-- *** Tema constructor: "+this.tema);
    console.log(this.listaMateriasProfesor);
    if(this.tema == "custom"){
      console.log("Ingresa a custom");
      this.miTema = JSON.parse(localStorage.getItem('miTema'));
    }else{
      this.miTema.iconoAgregar = "basket";
      this.miTema.iconoTema = "brush";
      console.log(this.miTema);
    }
    
    console.log("--------------- Estoy en  inicio profesor ------------------");
    this.setting.getActiveProfesional().subscribe(val => this.selectTheme = val);
    this.fireService.getAlumnos().subscribe(data=>
      {
        this.listaAlumnos=data;
      });
      this.apellido=localStorage.getItem("Apellido");                
      console.log(this.apellido);
      this.listaMateriasProfesor=[];
      for (let i = 0; i < this.listaAlumnos.length; i++) {
        const element = this.listaAlumnos[i];
       if(this.apellido==element.profesor)
          console.log("es el profesor");
          this.listaMateriasProfesor.push({aula:element.aula,profesor:element.profesor,materia:element.materia});
        
      }
  }

  ionViewDidEnter() {
  
      }

      temaArgentina(){
        //localStorage.clear('');
        localStorage.setItem('tema',"argentina");
        this.setting.setActiveProfesional('argentina-theme');
      }
    
      temaProfesional(){
        //localStorage.clear();
        localStorage.setItem('tema',"profesional");
        this.setting.setActiveProfesional('profesional-theme');
      }
    
      temaNaif(){
        //localStorage.clear();
        localStorage.setItem('tema',"naif");
        this.setting.setActiveProfesional('naif-theme');
      }
    
      presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
          title: 'Elergir un tema',
          
          buttons: [
            {
              text: 'Profesional',
              role: 'destructive',
              handler: () => {
                console.log('Destructive clicked');
                this.temaProfesional();
              }
            },
            {
              text: 'Argentina',
              handler: () => {
                console.log('Archive clicked');
                this.temaArgentina();
              }
            },
            {
              text: 'Naif',
              handler: () => {
                console.log('Archive clicked');
                this.temaNaif();
              }
            },
            {
              text: 'Personalizable',
              handler: () => {
                console.log('Personalizable clicked');
                //this.temaArgentina();
                this.navCtrl.push('CustomizablePage');
              }
            },
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        actionSheet.present();
      }
    

    RedireccionMateria(elemento:any)
    {
      this.navCtrl.push(AulaProfesorPage,{aula:elemento.aula,materia:elemento.materia,profesor:elemento.profesor});
      /*
        switch(materia)
        {
        
          case "Programacion 3":
          alert("Se redireccionara a la materia: Programacion 3");
         //this.navCtrl.push();
          break;
          case "Laboratorio 3":
          alert("Se redireccionara a la materia: Laboratorio 3");
         // this.navCtrl.push();
          break;
          case "Practica Profesional":
          alert("Se redireccionara a la materia: Practica Profesional");
          // this.navCtrl.push();
          break;
          case "Laboratorio 4":
          alert("Se redireccionara a la materia: Laboratorio 4");
          // this.navCtrl.push();
          break;
    
        }
    */  
    }
    

    /*RedireccionAula(aula: string)
    {
      switch(aula)
      {
      
        case "2° B":
       // alert("Se redireccionara al aula: 2° B ");
       this.navCtrl.push(MateriasProfesorPage,{aulaa:aula});
        break;
        case "3° A":
       //redirecciono y paso el aula
        this.navCtrl.push(MateriasProfesorPage,{aulaa:aula});
        break;
        case "4A":
        //alert("Se redireccionara al aula: 4° A ");
        this.navCtrl.push(AulaProfesorPage,{aulaa:aula});
        break;
        case "4B":
       // alert("Se redireccionara al aula: 4° B ");
        this.navCtrl.push(AulaProfesorPage,{aulaa:aula});
        break;
  
      }
    }*/

}
