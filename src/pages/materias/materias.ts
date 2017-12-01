import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { MateriaPage } from '../materia/materia';
import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database';

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

  //HAY QUE CAMBIARLO POR ALGO REAL
  
public variableGlobal: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController, public db: AngularFireDatabase,private toastCtrl:ToastController ) {
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
        "materia": "Laboratorio 4"
      },


      
      {
        "materia": "Practica profesional"
      }
    
    ];
  
  
    RedireccionMateria(materia: string)
    {
      
      switch(materia)
      {
       
      
        case "Programacion 3":
        alert("Se redireccionara a la materia: Programacion 3 ");
        this.navCtrl.push(MateriaPage,{aulaaa:this.aula});
        break;
        case "Laboratorio 3":
        
        this.navCtrl.push(MateriaPage,{materiaa:materia,aulaaa:this.aula});
        break;
        case "Base de datos 1":
        
        this.navCtrl.push(MateriaPage,{materiaa:materia,aulaaa:this.aula});
        break;
        case "Practica profesional":
       
        this.navCtrl.push(MateriaPage,{materiaa:materia,aulaaa:this.aula});
        break;
        case "Laboratorio 4":
        this.navCtrl.push(MateriaPage,{materiaa:materia,aulaaa:this.aula});
        break;
       
  
      }
    }
}
