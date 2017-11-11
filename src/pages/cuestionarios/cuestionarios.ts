import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CuestionariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cuestionarios',
  templateUrl: 'cuestionarios.html',
})
export class CuestionariosPage {

  listaCuestionariosProfesor: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    //NO ES LA FUNCIONALIDAD CORRECTA
   /* this.listaCuestionariosProfesor=[
      {nombre:"Examen: ¿parcial o tp?"},
      {nombre:"¿Hacemos rifas para comprar maquinas?"}
   ];
   */

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuestionariosPage');
  }


  //NO ES LA FUNCION CORRECTA
  /*
  RedireccionCuestionario(cuestionario:string)
  {
    alert("se vera la informacion de este cuestionario");
    switch(cuestionario)
    {
      case "":
     //this.navCtrl.push();
      break;
    }
  }
  */

  RedireccionCrearCuestionario()
  {
    alert("aca el profesor podra crear cuestionarios");
  }

  MostrarCuestionariosProfesor()
  {
    alert("aca el profesor podra ver los cuestionarios");
  }

}
