import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriasPage');
  }

  //harcodeado para mostrar, despues se debe eliminar y tomarar las aulamateriass de firebase
  listaMateriasAlumno: any[] = [
    {
      "materia": "Programacion 3"
    },
    {
      "materia": "Laboratorio 3"
    },
    {
      "materia": "Base de datos 1"
    },
    {
      "materia": "Practica profesional"
    },
    {
      "materia": "Ingles 2"
    },
  ];


  RedireccionMateria(materia: string)
  {
    
    switch(materia)
    {
     
    
      case "Programacion 3":
      alert("Se redireccionara a la materia: Programacion 3 ");
      //this.navCtrl.push();
      break;
      case "Laboratorio 3":
      alert("Se redireccionara a la materia: Laboratorio 3 ");
      //this.navCtrl.push();
      break;
      case "Base de datos 1":
      alert("Se redireccionara a la materia: Base de datos 1");
      //this.navCtrl.push();
      break;
      case "Practica profesional":
      alert("Se redireccionara a la materia: Practica profesional ");
      //this.navCtrl.push();
      break;
      case "Ingles 2":
      alert("Se redireccionara a la materia: Ingles 2");
      //this.navCtrl.push();
      break;
     

    }
  }
}
