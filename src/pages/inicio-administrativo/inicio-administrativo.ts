import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InicioAdministrativoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-administrativo',
  templateUrl: 'inicio-administrativo.html',
})
export class InicioAdministrativoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioAdministrativoPage');
  }


  //harcodeado para mostrar, despues se debe eliminar y tomarar las aulas de firebase
  listaAulas: any[] = [
    {
      "nombre": "1° A"
    },
    {
      "nombre": "1° B"
    },
    {
      "nombre": "2° A"
    },
    {
      "nombre": "2° B"
    },
    {
      "nombre": "3° A"
    },
    {
      "nombre": "3° B"
    },
    {
      "nombre": "4° A"
    },
    {
      "nombre": "4° B"
    }
  ];


  RedireccionAula(aula: string)
  {
    switch(aula)
    {
    
      case "1° A":
      alert("Se redireccionara al aula: 1° A ");
      //this.navCtrl.push();
      break;
      case "1° B":
      alert("Se redireccionara al aula: 1° B");
      //this.navCtrl.push();
      break;
      case "2° A":
      alert("Se redireccionara al aula: 2° A ");
      //this.navCtrl.push();
      break;
      case "2° B":
      alert("Se redireccionara al aula: 2° B ");
      //this.navCtrl.push();
      break;
      case "3° A":
      alert("Se redireccionara al aula: 3° A ");
      //this.navCtrl.push();
      break;
      case "3° B":
      alert("Se redireccionara al aula: 3° B ");
      //this.navCtrl.push();
      break;
      case "4° A":
      alert("Se redireccionara al aula: 4° A ");
      //this.navCtrl.push();
      break;
      case "4° B":
      alert("Se redireccionara al aula: 4° B ");
      //this.navCtrl.push();
      break;

    }
  }


}
