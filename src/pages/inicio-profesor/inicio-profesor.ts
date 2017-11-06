import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InicioProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-profesor',
  templateUrl: 'inicio-profesor.html',
})
export class InicioProfesorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioProfesorPage');
  }

    //harcodeado para mostrar, despues se debe eliminar y tomarar las aulas de firebase
    listaAulasProfesor: any[] = [
      {
        "aula": "1° A"
      },
      {
        "aula": "3° A"
      },
      {
        "aula": "3° B"
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
