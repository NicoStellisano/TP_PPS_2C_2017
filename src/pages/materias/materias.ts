import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  public nombreUsuario="Mauro";
public variableGlobal: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController, public db: AngularFireDatabase) {
      this.aula = this.navParams.get('aulaa');
this.curso=localStorage.getItem("curso");

console.log(this.curso);
      



      //PARA CARGAR EN FIREBASE FALTAS
/*
      this.db.list('/notificacionFalta').push({
        nombre: this.nombreUsuario,
        cantidadFaltas: 4,
        curso: this.aula    
      }).then( () => {
  
      })
      .catch( () => {
      });
    
*/

      this.db.list('/notificacionFalta').
      subscribe( data => {
      this.datosfaltas=data;
      //console.log(this.datos);


      for(let i=0;i<this.datosfaltas.length;i++){

        if(this.nombreUsuario==this.datosfaltas[i].nombre)
          {

        let alert = this.alertCtrl.create({
          title: "Aviso de faltas",
          cssClass:'miClaseDanger',
          subTitle: this.nombreUsuario+" tiene 4 faltas. A una de quedar LIBRE!" ,
        buttons: ['Aceptar']
      });
       alert.present();
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
      /*
      for(let i=0;i<this.datos.length;i++){
      let alert = this.alertCtrl.create({
        title: this.datos[i].titulo,
        subTitle: 'Alumnos de '+this.aula+' :'+this.datos[i].mensaje,
      buttons: ['OK']
    });
     alert.present();
  }

*/


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
