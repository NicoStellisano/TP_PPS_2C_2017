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
import { perfilItem } from '../../models/perfil-item/perfil-imte.interface';

import { NotificacionPage } from '../notificacion/notificacion';
import { MateriaPage } from '../materia/materia';
import { EncuestasPage } from '../encuestas/encuestas';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { TomarListaPage } from '../tomar-lista/tomar-lista';
import { NativeAudio } from '@ionic-native/native-audio';
import { AsignarMateriaperfilPage } from '../asignar-materia-perfil/asignar-materia-perfil';
import { DesasignarMateriaComponent } from '../../components/desasignar-materia/desasignar-materia';

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



single: any[]=[];
view: any[] = [700, 400];
showLegend = true;
colorScheme = {
  domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
};
showLabels = true;
explodeSlices = false;
doughnut = false;


  constructor( public db: AngularFireDatabase,private nativeAudio: NativeAudio,public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider,
    public loadingCtrl:LoadingController,private screenOrientation: ScreenOrientation ,public platform:Platform,public afd:AngularFireDatabase
    ,public alertCtrl:AlertController,public modalCtrl: ModalController) {
      //this.qrCodigo=this.navParams.get("codigo");
      
    }

  ionViewDidEnter() {
    this.grafico=false;
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
 
    this.nombreEncuesta=this.navParams.get("nombreEncuesta");
    this.db.list('/encuestaRespuestas').subscribe(data=>
    {
      this.listaRespuestas=data;
    });

    this.db.list('/encuestas').subscribe(data=>
      {
        this.listaEncuestas=data;
      });
setTimeout(() => {
  this.activar();
}, 1000);
   
  }

  activar()
  {
    if(this.perfil="Alumno")
    {
      for (let i = 0; i < this.listaRespuestas.length; i++) {
        const element = this.listaRespuestas[i];
        if(element.mailUsuario==this.mailLocal && element.nombreEncuesta==this.nombreEncuesta)
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
               break;
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
            let horaF=new Date(element2.horaFinalizacion);
            let horaActual=new Date();
            if(horaF>horaActual)
            {
                this.votar();
                break;
            }else{
              let alert = this.alertCtrl.create({
                title: "Info!",
                subTitle: "La encuesta ya expiró",
                cssClass:"miClaseDanger",
              buttons: ['Aceptar']
            });
             alert.present();
             break;
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
          if(element2.creador==localStorage.getItem('Email'))
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
             break;
          }
         
          }
        }
        
      }
    }
 
  }

  mostrarGrafico()
  {let rta1:string;
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
  }

}
