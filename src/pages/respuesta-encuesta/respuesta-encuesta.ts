import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireDatabase } from 'angularfire2/database';
import  firebase  from 'firebase';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { MateriaPage } from '../materia/materia';


/**
 * Generated class for the RespuestaEncuestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-respuesta-encuesta',
  templateUrl: 'respuesta-encuesta.html',
})
export class RespuestaEncuestaPage {
encuestas;
encuestasRespuestas;
banderaVoto=0;

  constructor(public navCtrl: NavController, public navParams: NavParams,public fireService : FireBaseServiceProvider, public db:AngularFireDatabase, public alertCtrl:AlertController) {
    this.db.list('/encuestas').
    subscribe( data => {
    this.encuestas=data;
});

this.db.list('/encuestaRespuestas').
subscribe( data => {
this.encuestasRespuestas=data;
});

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RespuestaEncuestaPage');
  }

  /*
  respuesta1(e)
  {
    
    for(let i=0;i<this.encuestasRespuestas.length;i++)
      {
       
       

      
        
          if( this.encuestasRespuestas[i].nombreEncuesta == e.nombre && this.encuestasRespuestas[i].voto== "true")
            {
              
              let alert = this.alertCtrl.create({
                title: 'Info!',
                subTitle: 'Usted ya voto en esta encuesta!',
                cssClass:"miClaseAlert",
              buttons: ['Listo']
              });
              alert.present();
              return;
              
            }
              
              console.log("no voto, va a votar")
              this.fireService.agregarRespEncuesta({nombreEncuesta:e.nombre,mailUsuario:localStorage.getItem("mail"),respuesta:e.respuesta1,voto:"true"});
              
              let alert = this.alertCtrl.create({
                title: 'Exito!',
                subTitle: 'Voto con exito!',
                cssClass:"miClaseAlert",
              buttons: ['Listo']
              });
              alert.present();
              this.navCtrl.push(MateriaPage);
              return;
            
          

            
      }

 



  }

  respuesta2(e)
  {
    for(let i=0;i<this.encuestasRespuestas.length;i++)
      {
        console.log(this.encuestasRespuestas[i].mailUsuario);
        console.log(localStorage.getItem("mail"));

        if(this.encuestasRespuestas[i].mailUsuario==localStorage.getItem("mail") && this.encuestasRespuestas[i].nombreEncuesta == e.nombre )
          {
            this.banderaVoto=1;
            let alert = this.alertCtrl.create({
              title: 'Info!',
              subTitle: 'Usted ya voto en esta encuesta!',
              cssClass:"miClaseAlert",
            buttons: ['Listo']
            });
            alert.present();
            return;
          }
         
        }

        if(this.banderaVoto==0)
          {
            this.fireService.agregarRespEncuesta({nombreEncuesta:e.nombre,mailUsuario:localStorage.getItem("mail"),voto:e.respuesta1});
            
            let alert = this.alertCtrl.create({
              title: 'Exito!',
              subTitle: 'Voto con exito!',
              cssClass:"miClaseAlert",
            buttons: ['Listo']
            });
            alert.present();
            
          }

  }
  */

}
