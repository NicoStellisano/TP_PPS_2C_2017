import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { AngularFireDatabase } from 'angularfire2/database';
import  firebase  from 'firebase';
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { MateriaPage } from '../materia/materia';
import { ResultadosVotacionPage } from '../resultados-votacion/resultados-votacion';


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
encuestas:any[]=[];
hora;
encuestasRespuestas:any[]=[];
banderaVoto:boolean;
respuestaR:any;
respuestaS:any;
horaActual:Date;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public fireService : FireBaseServiceProvider
    , public db:AngularFireDatabase, 
    public alertCtrl:AlertController) {
    

    this.horaActual = new Date();
    

  }
  ionViewDidEnter() {
    
    this.db.list('/encuestas').
    subscribe( data => {
      if(data)
    this.encuestas=data;
});
this.banderaVoto=false;
setTimeout(() => {
  this.db.list('/encuestaRespuestas').
  subscribe( data => {
    if(data)
  this.encuestasRespuestas=data;
  });
}, 1000);

  }
  responder(e)
  {    console.log(e);
    
      let bandera:boolean=false;
      let date = new Date(e.horaFinalizacion);
      if(date>this.horaActual)
      {
    for (let i = 0; i < this.encuestasRespuestas.length; i++) {
      const element = this.encuestasRespuestas[i];
   console.log(e);
   console.log(element);
      if(element.mailUsuario==localStorage.getItem("mail") && element.nombreEncuesta==e.nombre)
    {
     
        
       
      
      bandera=true;
      let alert = this.alertCtrl.create({
        title: 'Info!',
        subTitle: 'Usted ya voto en esta encuesta!',
        cssClass:"miClaseDanger",
      buttons: ['Listo']
      });
      alert.present();
return;
    }
    }
    if(bandera==false)
    {
      if(e.formato=="Radio botones")
      {
        this.fireService.agregarRespEncuesta({nombreEncuesta:e.nombre,mailUsuario:localStorage.getItem("mail"),respuesta:this.respuestaR});
        
      }else if(e.formato=="Selección de opciones")
      {
        this.fireService.agregarRespEncuesta({nombreEncuesta:e.nombre,mailUsuario:localStorage.getItem("mail"),respuesta:this.respuestaS});
        
      }
      this.navCtrl.push(ResultadosVotacionPage,{nombreEncuesta:e.nombre});
      let alert = this.alertCtrl.create({
        title: 'Exito!',
        subTitle: 'Voto con exito!',
        cssClass:"miClaseAlert",
      buttons: ['Listo']
      });
      alert.present();
      bandera=true;
    }
  }else{
    bandera=true;
    let alert = this.alertCtrl.create({
      title: 'Info!',
      subTitle: 'La encuesta ya expiro!!',
      cssClass:"miClaseDanger",
    buttons: ['Listo']
    });
    alert.present();
  }
    
  }

  
  respuesta1(e)
  {
    let bandera:boolean=false;
    let date = new Date(e.horaFinalizacion);
    if(date>this.horaActual)
    {
    for (let i = 0; i < this.encuestasRespuestas.length; i++) {
      const element = this.encuestasRespuestas[i];
      
      if(element.mailUsuario==localStorage.getItem("mail") && element.nombreEncuesta==e.nombre)
    {
      
      bandera=true;
      let alert = this.alertCtrl.create({
        title: 'Info!',
        subTitle: 'Usted ya voto en esta encuesta!',
        cssClass:"miClaseDanger",
      buttons: ['Listo']
      });
      alert.present();
      break;
    }
    }
    
    if(bandera==false)
    {
      
      this.fireService.agregarRespEncuesta({nombreEncuesta:e.nombre,mailUsuario:localStorage.getItem("mail"),respuesta:e.respuesta1});
      let alert = this.alertCtrl.create({
        title: 'Exito!',
        subTitle: 'Voto con exito!',
        cssClass:"miClaseAlert",
      buttons: ['Listo']
      });
      alert.present();
      bandera=true;
      
    }
  }else{
    bandera=true;
    let alert = this.alertCtrl.create({
      title: 'Info!',
      subTitle: 'La encuesta ya expiro!!',
      cssClass:"miClaseDanger",
    buttons: ['Listo']
    });
    alert.present();
  }
  
    



    /*for(let i=0;i<this.encuestasRespuestas.length;i++)
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

 
*/


  }

  respuesta2(e)
  { let bandera:boolean=false;
    let date = new Date(e.horaFinalizacion);
    if(date>this.horaActual)
    {
    for (let i = 0; i < this.encuestasRespuestas.length; i++) {
      const element = this.encuestasRespuestas[i];
      
      if(element.mailUsuario==localStorage.getItem("mail") && element.nombreEncuesta==e.nombre)
    {
      
      bandera=true;
      let alert = this.alertCtrl.create({
        title: 'Info!',
        subTitle: 'Usted ya voto en esta encuesta!',
        cssClass:"miClaseDanger",
      buttons: ['Listo']
      });
      alert.present();
      break;
    }
    }
    
    if(bandera==false)
    {
      
      this.fireService.agregarRespEncuesta({nombreEncuesta:e.nombre,mailUsuario:localStorage.getItem("mail"),respuesta:e.respuesta2});
      let alert = this.alertCtrl.create({
        title: 'Exito!',
        subTitle: 'Voto con exito!',
        cssClass:"miClaseAlert",
      buttons: ['Listo']
      });
      alert.present();
      bandera=true;
      
    }
  }else{
    bandera=true;
    let alert = this.alertCtrl.create({
      title: 'Info!',
      subTitle: 'La encuesta ya expiro!!',
      cssClass:"miClaseDanger",
    buttons: ['Listo']
    });
    alert.present();
  }
  
    



    /*for(let i=0;i<this.encuestasRespuestas.length;i++)
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

 
    */}

}