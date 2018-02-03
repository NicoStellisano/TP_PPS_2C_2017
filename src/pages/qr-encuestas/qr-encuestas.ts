import { Component,ViewChild } from '@angular/core';

import { IonicPage, NavController, NavParams,LoadingController,Platform,AlertController,Content ,ModalController} from 'ionic-angular';
//import { AulaAdministrativoItem } from '../../models/aula-administrativo-item/aula-administrativo.interface';
import { CagarArchivoPage } from '../cagar-archivo/cagar-archivo';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { ButtonRenderComponent } from '../../components/button-renderer/button-renderer';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireAuth } from 'angularfire2/auth';
// for databas
import  firebase  from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database';

import { NotificacionPage } from '../notificacion/notificacion';
import { MateriaPage } from '../materia/materia';
import { EncuestasPage } from '../encuestas/encuestas';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { TomarListaPage } from '../tomar-lista/tomar-lista';
import { NativeAudio } from '@ionic-native/native-audio';
import { DesasignarMateriaComponent } from '../../components/desasignar-materia/desasignar-materia';
import { ResultadosVotacionPage } from '../resultados-votacion/resultados-votacion';
import { RespuestaEncuestaPage } from '../respuesta-encuesta/respuesta-encuesta';

/**
 * Generated class for the QrEncuestasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-encuestas',
  templateUrl: 'qr-encuestas.html',
})
export class QrEncuestasPage {

  nombreEncuesta:string;
listaRespuestas:any[]=[];
listaEncuestas:any[]=[];
mailLocal:string;
voto:boolean;
grafico:boolean;
perfil:string;

respondido:boolean;


@ViewChild(Content) content: Content;  




single: any[]=[];
view: any[] = [700, 400];
showLegend = false;
colorScheme = {
  domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
};
showLabels = true;
explodeSlices = false;
doughnut = false;
mostrado:boolean;
listadoAlumnos:any[]=[];


  constructor( public db: AngularFireDatabase,private nativeAudio: NativeAudio,public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,
    public loadingCtrl:LoadingController,private screenOrientation: ScreenOrientation ,public platform:Platform,public afd:AngularFireDatabase
    ,public alertCtrl:AlertController,public modalCtrl: ModalController) {
      //this.qrCodigo=this.navParams.get("codigo");
      
    }

  ionViewDidEnter() {
    this.respondido=false;
    this.grafico=false;
    this.mostrado=true;
    this.perfil="";
    this.voto=false;
    if(localStorage.getItem("Perfil")==null || localStorage.getItem("Perfil")==undefined)
    {
        this.perfil="Alumno";
        this.mailLocal=localStorage.getItem('mail');
    }else if(localStorage.getItem("Perfil")=="Profesor")
    {
      this.perfil="Profesor";
    }else{
      this.perfil="Administrativo";
    }
 
    if(this.navParams.get("nombreEncuesta")==null)
    {
      this.nombreEncuesta="Legislacion";
    }else{
      this.nombreEncuesta=this.navParams.get("nombreEncuesta");
    }
    this.db.list('/encuestaRespuestas').subscribe(data=>
    {
      this.listaRespuestas=data;
    });

    this.db.list('/encuestas').subscribe(data=>
      {
        this.listaEncuestas=data;
      });
      this.fireService.getAlumnos().subscribe(data=>
      {
        this.listadoAlumnos=data;
      });

      this.applyDimensions();
      window.addEventListener('resize', () => {
        this.applyDimensions();
      }, false);

   
  }
  applyDimensions() {
    const width = this.content.getContentDimensions().contentWidth - 50;
    this.view = [width, 150];
  }
  activar()
  {
    this.mostrado=false;
    if(this.perfil=="Alumno")
    {
      for (let i = 0; i < this.listaRespuestas.length; i++) {
        const element = this.listaRespuestas[i];
        if(element.nombreEncuesta==this.nombreEncuesta)
        {
          this.respondido=true;
         
        if(element.mailUsuario==this.mailLocal)
        {
          this.voto=true;
          for (let j = 0; j < this.listaEncuestas.length; j++) {
            const element2 = this.listaEncuestas[j];
            if(element2.nombre==element.nombreEncuesta)
            {
              let horaF=new Date(element2.horaFinalizacion);
              let horaActual=new Date();
              if(horaF<horaActual)
              {
                  this.mostrarGrafico();
                  break;
              }else{
                let alert = this.alertCtrl.create({
                  title: "Info!",
                  subTitle: "No se pueden mostrar los resultados, porque todavía no ha terminado la encuesta",
                  cssClass:"miClaseDanger",
                buttons: ['Aceptar']
              });
               alert.present();
               setTimeout(() => {
                this.navCtrl.pop();
                  }, 3000);
               break;
              }
            }
            
          }
        }
      }
        
      }
      if(this.voto==false)
      {
        for (let j = 0; j < this.listaEncuestas.length; j++) {
          const element2 = this.listaEncuestas[j];
          if(element2.nombre==this.nombreEncuesta)
          {   
            let band=false;
          for (let p = 0; p < this.listadoAlumnos.length; p++) {
            const elementp = this.listadoAlumnos[p];
            if(elementp.aula==element2.aula && elementp.materia==element2.materia)
            {
              for (let t = 0; t < elementp.alumnos.length; t++) {
                const element3 = elementp.alumnos[t];
             
                if(element3.mail==localStorage.getItem('mail'))
                {
                  band=true;
                    let horaF=new Date(element2.horaFinalizacion);
                    let horaActual=new Date();
                    if(horaF>horaActual)
                    {
                        this.votar();
                        break;
                    }else if(horaF<horaActual){
                      this.mostrarGrafico();
                     break;
                    }else if(this.respondido==false)
                    {
                      this.mostrarGrafico();
                      break;
                    }
                   
                  }
                

                }


                if(!band)
                {
                  let alert = this.alertCtrl.create({
                    title: "Info!",
                    subTitle: "No se pueden mostrar los resultados, porque no perteneces a este curso",
                    cssClass:"miClaseDanger",
                  buttons: ['Aceptar']
                });
                 alert.present();
                 setTimeout(() => {
                  this.navCtrl.pop();
                    }, 3000);
                }


              }
            }
          }
       
          
        }
      }

    }else if(this.perfil=="Profesor")
    {
      let creador:boolean=false;
      for (let j = 0; j < this.listaEncuestas.length; j++) {
        const element2 = this.listaEncuestas[j];
        if(element2.nombre==this.nombreEncuesta)
        {
          if(element2.creadorEncuesta==localStorage.getItem('Email'))
          {
            creador=true;
            this.mostrarGrafico();
          }else{
            let horaF=new Date(element2.horaFinalizacion);
            let horaActual=new Date();
            if(horaF<horaActual)
            {
                this.mostrarGrafico();
                break;
            }else{
              let alert = this.alertCtrl.create({
                title: "Info!",
                subTitle: "No se pueden mostrar los resultados, porque todavía no ha terminado la encuesta",
                cssClass:"miClaseDanger",
              buttons: ['Aceptar']
            });
             alert.present();

             setTimeout(() => {
              this.navCtrl.pop();
                }, 3000);
             break;
          }
         
          }
        }
        
      }
    }else{
      let alert = this.alertCtrl.create({
      title: "Info!",
      subTitle: "No se pueden mostrar los resultados, porque no le corresponde saberlos",
      cssClass:"miClaseDanger",
    buttons: ['Aceptar']
  });
   alert.present();
   setTimeout(() => {
     this.navCtrl.pop();
       }, 3000);
    }
 
  }

  mostrarGrafico()

  
  {
    
    
    let rta1:string;
    let cont1=0;
    let rta2:string;
    let cont2=0;

    for (let i = 0; i < this.listaEncuestas.length; i++) {
      const element = this.listaEncuestas[i];
      if(element.nombre==this.nombreEncuesta)
      {
        rta1=element.respuesta1;
        rta2=element.respuesta2;
        for (let j = 0; j < this.listaRespuestas.length; j++) {
          const element2 = this.listaRespuestas[j];
          if(element.nombre==element2.nombreEncuesta)
          {
            if(element.respuesta1==element2.respuesta)
            {
              cont1++;
            }else if(element.respuesta2==element2.respuesta)
            {
              cont2++;
            }
          }
          
        }
       
       if(cont1==0 && cont2==0)
       {
         let cantidad=Math.round(Math.random()*30);
      
        
        cont1=Math.round(Math.random()*cantidad/2);
        cont2=cantidad-cont1;
       }
      
        break;
      }
    }

     this.single = [
      {
        "name": rta1,
        "value": cont1
      },
      {
        "name": rta2,
        "value": cont2
      },
      
    ];
    this.grafico=true;
  }

  votar()
  {
    //pushear a votacion
    this.navCtrl.push(RespuestaEncuestaPage);
  }

}
