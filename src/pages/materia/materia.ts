import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database';
import { AlumnoItem } from '../../models/alumno-item/alumno-imte.interface';
import { DescargarArchivoPage } from '../descargar-archivo/descargar-archivo';
/**
 * Generated class for the MateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materia',
  templateUrl: 'materia.html',
})
export class MateriaPage {

  materia:string;
  curso:string;
  public codigoScaneado = null;
  public datos;
  aulaMateria:any= {};
aulaParaQrProfesor;
perfil='';
aula:string;

listaAlumnos:AlumnoItem[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public barcodeScanner: BarcodeScanner,public db: AngularFireDatabase, public alertCtrl: AlertController) {
    this.materia = this.navParams.get('materiaa');
    //this.curso = this.navParams.get('aulaaa');
this.curso = localStorage.getItem("curso");
this.aulaParaQrProfesor = this.navParams.get('aulaa');
this.perfil=localStorage.getItem("Perfil");


  //  console.log("aulaaaaa: "+this.aulaParaQrProfesor);
    console.log("perfik: "+this.perfil);
    //CARGA DATOS EN FIREBASE
    /*
    this.db.list('/codigoQrMaterias').push({
      codigoQr: "4ABaseDeDatos",
      curso: "4° A",
      materia: "Base de datos 1",
      profesor: "Diego Vazquez",
      primerParcial:"4/8/2017",
      segundoParcial: "7/11/2017",
      final: "4/12/2017"
    //  alumnos:[{nombre:"Juan"},{nombre:"Maria"},{nombre:"Rodrigo"}]
    
    }).then( () => {
      
    })
    .catch( () => {
    });
    */

    this.db.list('/codigoQrMaterias').
    subscribe( data => {
    this.datos=data;
    });

/*
    this.lista(this.aula).subscribe(dato => {
      //console.log(dato.values().next().value.alumnos);
      //lista de alumnos en el aula
      this.listaAlumnos = dato.values().next().value.alumnos;
      console.log(this.listaAlumnos);
    });
*/
    

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriaPage');
  }

  scanCode() {

    this.barcodeScanner.scan().then(barcodeData => {
      this.codigoScaneado=null;
      this.codigoScaneado = barcodeData.text;

      if(this.perfil=="Profesor")
        {  
         
      this.navCtrl.push(DescargarArchivoPage,{aulaa:this.codigoScaneado});
       
        }
    
//if(this.perfil=='')
  //{
      for(let i=0;i<this.datos.length;i++)
        {
        
      if(this.datos[i].codigoQr==this.codigoScaneado)
        {
          if(this.materia==this.datos[i].materia && this.curso==this.datos[i].curso )
            {
          this.aulaMateria.curso=this.datos[i].curso;
          this.aulaMateria.profesor=this.datos[i].profesor;
          this.aulaMateria.materia = this.datos[i].materia;
          this.aulaMateria.primerParcial = this.datos[i].primerParcial;
          this.aulaMateria.segundoParcial = this.datos[i].segundoParcial;
          this.aulaMateria.final = this.datos[i].final;

          //MOSTRAR LISTA DE ALUMNOS
         /* this.aulaMateria.alumnos = [];
          for(let j=0;j<this.datos[i].alumnos.length;j++)
          {
            this.aulaMateria.alumnos.push(this.datos[i].alumnos[j]);
          }
      */
      return;
        }
        else
          {
            this.codigoScaneado=null;
            let alert = this.alertCtrl.create({
              title: "Error!",
              subTitle: "El codigo escaneado no pertenece al aula y/o materia",
              cssClass:"miClaseDanger",
            buttons: ['Aceptar']
          });
           alert.present();
  
            return;
          }
        
        }

        
        }

        
    //  }//aca cerrar if de perfil alumnoi




    }, (err) => {
      console.log('Error: ', err);
  });


}

lista(aula){
  
  return this.db.list('/alumno-lista/' ,{
          query: {
            orderByChild :"aula",
            equalTo:aula
          }
         });
}

}
