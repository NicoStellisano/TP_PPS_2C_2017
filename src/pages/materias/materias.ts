import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { MateriaPage } from '../materia/materia';
import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database';
import { SettingProvider } from '../../providers/setting/setting';
import { ActionSheetController } from 'ionic-angular';


import { TemaCustom } from '../../models/tema-custom/tema-custom';
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
  
  selectTheme:String;
  miTema:TemaCustom;
  tema:string="";
  //HAY QUE CAMBIARLO POR ALGO REAL
  
public variableGlobal: any;
    constructor(public navCtrl: NavController,private setting: SettingProvider,public actionSheetCtrl: ActionSheetController, public navParams: NavParams, private alertCtrl:AlertController, public db: AngularFireDatabase,private toastCtrl:ToastController ) {
      
    //tema custom
    this.miTema = {colorFondo:"",colorLetra:"",colorBoton:"",colorNav:"",sizeLetra:"",tipoLetra:"",radioButton:"",iconoAgregar:"",iconoTema:""};
    this.tema = localStorage.getItem('tema');
    localStorage.setItem('home',"alumno");
    console.log("-- *** Tema constructor: "+this.tema);
   
    if(this.tema == "custom"){
      console.log("Ingresa a custom");
      this.miTema = JSON.parse(localStorage.getItem('miTema'));
      if(this.miTema.iconoTema == ""){
        this.miTema.iconoTema = "brush";
      }
    }else{
      localStorage.removeItem('miTema');
      this.miTema = {colorFondo:"",colorLetra:"",colorBoton:"",colorNav:"",sizeLetra:"",tipoLetra:"",radioButton:"",iconoAgregar:"",iconoTema:""};
      this.miTema.iconoAgregar = "basket";
      this.miTema.iconoTema = "brush";
      console.log(this.miTema);
            
    }
    
      
      console.log("--------------- Estoy en aula materias ------------------");
      this.setting.getActiveProfesional().subscribe(val => this.selectTheme = val);
      this.aula = this.navParams.get('aulaa');
this.curso=localStorage.getItem("curso");

console.log(this.curso);
      



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
  

     temaArgentina(){
      //localStorage.clear();
      
      localStorage.removeItem('tema');
      //localStorage.removeItem('miTema');
      localStorage.setItem('tema',"argentina");
      this.setting.setActiveProfesional('argentina-theme');
    }
  
    temaProfesional(){
      //localStorage.clear();
      
      localStorage.removeItem('tema');
      //localStorage.removeItem('miTema');
      localStorage.setItem('tema',"profesional");
      this.setting.setActiveProfesional('profesional-theme');
    }
  
    temaNaif(){
      //localStorage.clear();
      
      localStorage.removeItem('tema');
      
      //localStorage.removeItem('miTema');
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

    ionViewDidLoad() {



      
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
}
