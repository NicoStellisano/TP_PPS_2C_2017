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
  public datos;
  
    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController, public db: AngularFireDatabase) {
      this.aula = this.navParams.get('aulaa');


      
      this.db.list('/notificacionesProfesor').
      subscribe( data => {
      this.datos=data;
      //console.log(this.datos);

      if(this.aula== "4° A")
        {

      for(let i=0;i<this.datos.length;i++){

        if(this.aula==this.datos[i].curso)
          {

        let alert = this.alertCtrl.create({
          title: this.datos[i].titulo,
          subTitle: 'Alumnos de '+this.aula+' :'+this.datos[i].mensaje,
        buttons: ['OK']
      });
       alert.present();
        }

                              } 



      }

  


      if(this.aula== "4° B")
        {

      for(let i=0;i<this.datos.length;i++){

        if(this.aula==this.datos[i].curso)
          {

        let alert = this.alertCtrl.create({
          title: this.datos[i].titulo,
          subTitle: 'Alumnos de '+this.aula+' :'+this.datos[i].mensaje,
        buttons: ['OK']
      });
       alert.present();
        }

                              } 



      }

      });

    


      
    }
  
    ionViewDidLoad() {
     
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
        "materia": "Laboratorio 4"
      },
     
      {
        "materia": "Base de datos 1"
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
