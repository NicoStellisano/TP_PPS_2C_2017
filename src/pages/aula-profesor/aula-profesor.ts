import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,Content } from 'ionic-angular';


import { CagarArchivoPage } from '../cagar-archivo/cagar-archivo';

import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database';
import { AlumnoItem } from '../../models/alumno-item/alumno-imte.interface';

import { NotificacionPage } from '../notificacion/notificacion';
import { MateriaPage } from '../materia/materia';
import { EncuestasPage } from '../encuestas/encuestas';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { TomarListaPage } from '../tomar-lista/tomar-lista';
import { NativeAudio } from '@ionic-native/native-audio';
import {BarcodeScanner,BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { QrEncuestasPage } from '../qr-encuestas/qr-encuestas';

import { AlertController } from 'ionic-angular';
/**
 * Generated class for the AulaProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aula-profesor',
  templateUrl: 'aula-profesor.html',
})
export class AulaProfesorPage {

  listaAlumnos:AlumnoItem[] = [];
  aula:string;
  datosMaterias;
  datosfaltas;
  materia:string;
  texto:any;
  formato:any;
  cancelado:any;
  listadoEncuestas:any[]=[];
  
  @ViewChild(Content) content: Content;  
  view: number[] = [700, 150];
  view2: number[] = [700, 150];
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  showLegend: boolean;
  interval: number;
  listFaltantesB:any[] =[];
  listadoAlumnos:any[] =[];
  
  listadoFaltas:Array<any>=[];
  

  informacion: any[] = [];
listFaltantes:any[]=[];

  constructor(public navCtrl: NavController,private barcode:BarcodeScanner
    ,private alertCtrl: AlertController, public navParams: NavParams
    , public db: AngularFireDatabase,private nativeAudio: NativeAudio
    , private toastCtrl:ToastController ) {
    this.aula = this.navParams.get('aula');
this.materia= this.navParams.get('materia');

this.db.list('/alumno-lista').subscribe(data=>
  {
    this.listadoAlumnos=data;
    
  }); 

this.db.list("/tomarB").subscribe(data=>
  {
    this.listFaltantesB=data;
  });
  
this.db.list("/tomarA").subscribe(data=>
{
  this.listFaltantes=data;
});
    
    this.nativeAudio.preloadComplex('bienvenidoProfesor', 'assets/sonidos/bienvenidoProfesor.mp3', 1, 1, 0);
    this.nativeAudio.play('bienvenidoProfesor');

    this.db.list('/notificacionFalta').
    subscribe( data => {
    this.datosfaltas=data;
    console.log(this.datosfaltas);

    let bandera=false;
    for(let i=0;i<this.datosfaltas.length;i++){

      //if(localStorage.getItem("mail")==this.datosfaltas[i].mail){
      
  
          
let toast = this.toastCtrl.create({
  message: 'El alumno'+' '+this.datosfaltas[i].alumno+' '+'tiene'+ ' '+this.datosfaltas[i].cantidadFaltas+' '+ 'faltas!!!'    ,
  duration: 4000,
  position: 'top'
});

toast.onDidDismiss(() => {

});

toast.present();

                            } 
    });

    
  }

  applyDimensions() {
    const width = this.content.getContentDimensions().contentWidth - 50;
    const state = width >= 320;
    this.showXAxisLabel = state;
    this.showYAxisLabel = state;
    this.showLegend = state;
    this.view = [width, 150];
  }
  ionViewDidEnter() {

    this.db.list('/encuestas').subscribe(data=>
      {
        this.listadoEncuestas=data;
      });
    this.db.list("/tomarA").subscribe(data=>
      {
        this.listFaltantes=data;
      });
      this.db.list("/tomarB").subscribe(data=>
        {
          this.listFaltantesB=data;
        });
    this.applyDimensions();
    window.addEventListener('resize', () => {
      this.applyDimensions();
    }, false);
    if(this.aula=="4A" && this.materia=="PPS")
      {
        let contador=0;
        for (let i = 0; i < this.listFaltantes.length; i++) {
          const element = this.listFaltantes[i];
          if(element.contPresentes!=0)
          {
            contador++;
          }
        }
        this.informacion=[
          {
            'name':'Con al menos una falta',
            'value':contador
          },
          {
            'name':'Sin faltas',
            'value':this.listFaltantes.length-contador
          }
          ];
      }else if(this.aula=="4B" && this.materia=="PPS")
      {
        let contador=0;
        for (let i = 0; i < this.listFaltantesB.length; i++) {
          const element = this.listFaltantesB[i];
          if(element.contPresentes!=0)
          {
            contador++;
          }
        }
        this.informacion=[
          {
            'name':'Con al menos una falta',
            'value':contador
          },
          {
            'name':'Sin faltas',
            'value':this.listFaltantesB.length-contador
          }
          ];
        }else{
          let contador=0;
          let cantidad=0;
          for (let i = 0; i < this.listadoAlumnos.length; i++) {
            const element = this.listadoAlumnos[i];
            if(element.aula==this.aula && element.materia==this.materia)
            {
              cantidad=element.alumnos.length;
              contador=Math.round(Math.random()*cantidad);
              break;
            }
            
           
          }
          this.informacion=[
            {
              'name':'Con al menos una falta',
              'value':contador
            },
            {
              'name':'Sin faltas',
              'value':cantidad-contador
            }
            ];
        }
     
  }

  tomaLista(){
   // alert("voy a tomar lista");
   this.navCtrl.push(TomarListaPage,{aulaa:this.aula,materia:this.materia});
  }

  crearNotificacion(){
    console.log(this.aula);
    this.navCtrl.push(NotificacionPage,{aulaa:this.aula,materia:this.materia});
    
  }

  cargarLista(){
    this.navCtrl.push(CagarArchivoPage,{persona:"alumno"});
  //  alert("voy a cargar lista");
    //alert("voy a cargar lista");
  }

  mostrarQr(){
    //alert("voy a qr");
    this.navCtrl.push(MateriaPage,{aulaa:this.aula,materia:this.materia});
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
           
              
              this.navCtrl.push(QrEncuestasPage,{nombreEncuesta:this.texto});
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

  Encuestas()
  {
    this.navCtrl.push(EncuestasPage,{aula:this.aula,materia:this.materia}); 
  }




}
