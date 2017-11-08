import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InicioProfesorPage} from '../inicio-profesor/inicio-profesor';

/**
 * Generated class for the MateriasProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materias-profesor',
  templateUrl: 'materias-profesor.html',
})
export class MateriasProfesorPage {

  aula: string;
  listaMateriasProfesor: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.aula= this.navParams.get('aulaa');
   // alert(this.aula);

   switch (this.aula)
   {
    case "2° B":

     break;
     case "3° A":
     this.listaMateriasProfesor=[
      {"materia":"Laboratorio 3"},
      {"materia":"Programacion 3"}
    ];

     break;
     case "4° A":
     this.listaMateriasProfesor=[
      {"materia":"Laboratorio 4"},
      {"materia":"Practica Profesional"}
    ];
     break;
     case "4° B":
     this.listaMateriasProfesor=[
      {"materia":"Practica Profesional"},
    ];

     break;
   }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriasProfesorPage');
  }

  RedireccionMaterias()
  {

  }
  RedireccionMateria(materia:string)
  {
    
      switch(materia)
      {
      
        case "Programacion 3":
        alert("Se redireccionara a la materia: Programacion 3");
       //this.navCtrl.push();
        break;
        case "Laboratorio 3":
        alert("Se redireccionara a la materia: Laboratorio 3");
       // this.navCtrl.push();
        break;
        case "Practica Profesional":
        alert("Se redireccionara a la materia: Practica Profesional");
        // this.navCtrl.push();
        break;
        case "Laboratorio 4":
        alert("Se redireccionara a la materia: Laboratorio 4");
        // this.navCtrl.push();
        break;
  
      }
    
  }

}
