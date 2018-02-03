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
import {BarcodeScanner,BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { QrEncuestasPage } from '../qr-encuestas/qr-encuestas';

import { AlertController } from 'ionic-angular';
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

  listadoProfesores:any[] =[];
  listadoAlumnos:any[] =[];
  listadoEncuestas:any[]=[];
  seleccion:string;
  listaMaterias: any[] = [];
  listaAux: any[] = [];
  datosfaltas;
  texto:any;
  formato:any;
  cancelado:any;
  aula: string;
  listaMateriasProfesor: any[]=[];
  listaAlumnos: any[]=[];
  apellido:string;
  constructor(public navCtrl: NavController,private barcode:BarcodeScanner,public db: AngularFireDatabase,private alertCtrl: AlertController, public navParams: NavParams,public fireService : FireBaseServiceProvider) {
    this.fireService.getAlumnos().subscribe(data=>
      {
        this.listaAlumnos=data;
      });
      this.apellido=localStorage.getItem("Apellido");                
      
      this.listaMateriasProfesor=[];
      for (let i = 0; i < this.listaAlumnos.length; i++) {
        const element = this.listaAlumnos[i];
       if(this.apellido==element.profesor)
        
          this.listaMateriasProfesor.push({aula:element.aula,profesor:element.profesor,materia:element.materia});
        
      }
  }

  ionViewDidEnter() {
    this.db.list('/encuestas').subscribe(data=>
      {
        this.listadoEncuestas=data;
      });
      }

    
      async escanear()
      {
        
        await  this.barcode.scan().then(barC=>{
            this.texto=barC.text;
            this.formato=barC.format;
            this.cancelado=barC.cancelled;
    
           
         });
        
        
        
    
        
          let flag:boolean=false;
          if(this.texto.startsWith("Encuesta"))
          {
            for (var j = 0; j < this.listadoEncuestas.length; j++) {
              
              var element2 = this.listadoEncuestas[j];
              if(this.texto==element2.codigo)
              {
               
                let textoReal=this.texto.slice(8);
                  this.navCtrl.push(QrEncuestasPage,{nombreEncuesta:textoReal});
                  flag=true;
                  break;
                 
            }
            /*this.resultado="Se han añadido: "+element3.credito+" créditos a su cuenta";
            this.crearCarga(element3.credito);*/
          }
    
          
             if(flag==false)
            { 
              let alert = this.alertCtrl.create({
                title: "Alerta",
                subTitle: "Código desconocido",
                cssClass:"miClaseDanger",
              buttons: [{text:'Aceptar'}]});
              alert.present();
            }
        }else{
    
        }
      
      
       
    
        
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
