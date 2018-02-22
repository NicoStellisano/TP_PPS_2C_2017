import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database';
import { AlumnoItem } from '../../models/alumno-item/alumno-imte.interface';
import { DescargarArchivoPage } from '../descargar-archivo/descargar-archivo';
import { NativeAudio } from '@ionic-native/native-audio';
import { RespuestaEncuestaPage } from '../respuesta-encuesta/respuesta-encuesta';
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

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public barcodeScanner: BarcodeScanner,
     public db: AngularFireDatabase, 
     public alertCtrl: AlertController,private nativeAudio: NativeAudio) {
    this.materia = this.navParams.get('materiaa');
this.curso = localStorage.getItem("curso");
this.aulaParaQrProfesor = this.navParams.get('aulaa');
this.perfil=localStorage.getItem("Perfil");


    console.log("perfik: "+this.perfil);
    
   

    this.db.list('/codigoQrMaterias').
    subscribe( data => {
    this.datos=data;
    });


    
this.nativeAudio.preloadComplex('2', 'assets/sonidos/2.mp3', 1, 1, 0);
this.nativeAudio.play('2');
    
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
    

      for(let i=0;i<this.datos.length;i++)
        {
        
      if(this.datos[i].codigoQr==this.codigoScaneado)
        {
          if(this.curso==this.datos[i].curso )
            {
          this.aulaMateria.curso=this.datos[i].curso;
          this.aulaMateria.profesor=this.datos[i].profesor;
          this.aulaMateria.materia = this.datos[i].materia;
          this.aulaMateria.primerParcial = this.datos[i].primerParcial;
          this.aulaMateria.segundoParcial = this.datos[i].segundoParcial;
          this.aulaMateria.final = this.datos[i].final;

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

encuestas()
{
  this.navCtrl.push(RespuestaEncuestaPage);
}

}
