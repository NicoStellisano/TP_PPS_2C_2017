import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MateriaPage } from '../materia/materia';

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
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.aula = this.navParams.get('aulaa');
  //console.log(this.aula);
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad MateriasPage');
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
