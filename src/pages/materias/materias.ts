import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MateriaPage } from '../materia/materia';
import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database';
import {BarcodeScanner,BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { QrEncuestasPage } from '../qr-encuestas/qr-encuestas';
import { LoginPage } from '../login/login';

import { AlertController } from 'ionic-angular';
/**
 * Generated class for the MateriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materias',
  templateUrl: 'materias.html',
})
export class MateriasPage {

  public aula:string;
  curso;
  public datos;
  public datosfaltas;
  texto:any;
  formato:any;
  cancelado:any;
  listadoAlumnos:any[] =[];
  listadoEncuestas:any[]=[];
  //HAY QUE CAMBIARLO POR ALGO REAL
  
public variableGlobal: any;
    constructor(public navCtrl: NavController,
      private barcode:BarcodeScanner, public navParams: NavParams, 
      private alertCtrl:AlertController, public db: AngularFireDatabase,
      private toastCtrl:ToastController ) {
      this.aula = this.navParams.get('aulaa');
this.curso=localStorage.getItem("curso");

console.log(this.curso);
      

this.db.list('/alumno-lista').subscribe(data=>
  {
    this.listadoAlumnos=data;
    
  }); 

      this.db.list('/notificacionFalta').
      subscribe( data => {
      this.datosfaltas=data;
      console.log(this.datosfaltas);

      for(let i=0;i<this.datosfaltas.length;i++){

        if(localStorage.getItem("mail")==this.datosfaltas[i].mail)
          {

            let toast = this.toastCtrl.create({
              message: 'El alumno'+' '+this.datosfaltas[i].alumno+' '+'tiene'+ ' '+this.datosfaltas[i].cantidadFaltas+' '+ 'faltas!!!'    ,
              duration: 4000,
              position: 'top'
            });
          
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
             
            });
          
            toast.present();
        }

                              } 
      });

      
    }
    ionViewWillLeave() {
      // alert("salio");
 this.variableGlobal.unsubscribe();
 
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
    ionViewDidLoad() {

      this.db.list('/encuestas').subscribe(data=>
        {
          this.listadoEncuestas=data;
        });

      
     this.variableGlobal= this.db.list('/notificacionesProfesor').
      subscribe( data => {
      this.datos=data;
      //console.log(this.datos);

      if(this.curso== "4A")
        {

      for(let i=0;i<this.datos.length;i++){

        if(this.curso==this.datos[i].curso)
          {

        let alert = this.alertCtrl.create({
          title: this.datos[i].titulo,
          subTitle: 'Alumnos de '+this.curso+' :'+this.datos[i].mensaje,
          cssClass:"miClaseAlert",
        buttons: ['Aceptar']
      });
       alert.present();
        }

                              } 



      }

  


      if(this.curso== "4B")
        {

      for(let i=0;i<this.datos.length;i++){

        if(this.curso==this.datos[i].curso)
          {

        let alert = this.alertCtrl.create({
          title: this.datos[i].titulo,
          subTitle: 'Alumnos de '+this.curso+' :'+this.datos[i].mensaje,
          cssClass:"miClaseAlert",
        buttons: ['Aceptar']
      });
       alert.present();
        }

                              } 



      }

      });



    }
  
    //harcodeado para mostrar, despues se debe eliminar y tomarar las aulamateriass de firebase
    listaMateriasAlumno: any[] = [ 
      {
        "materia": "PPS"
      }
    
    ];
  
  
    RedireccionMateria(materia: string)
    {
      
      switch(materia)
      {
       
        case "PPS":
       
        this.navCtrl.push(MateriaPage,{materiaa:materia,aulaa:this.aula});
        break;
       
       
  
      }
    }
    logout()
    {
      localStorage.clear();
      this.navCtrl.setRoot(LoginPage);
    }
}
