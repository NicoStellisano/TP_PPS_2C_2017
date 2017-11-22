import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MateriasPage } from '../materias/materias';

/**
 * Generated class for the InicioAlumnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-alumno',
  templateUrl: 'inicio-alumno.html',
})
export class InicioAlumnoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioAlumnoPage');
  }

  listaAulasProfesor: any[] = [
    
      {
        "aula": "4° A"
      },
      {
        "aula": "4° B"
      }
     
    ];
  
    RedireccionAula(aula: string)
    {
      switch(aula)
      {
      
        case "2° B":
       // alert("Se redireccionara al aula: 2° B ");
       this.navCtrl.push(MateriasPage,{aulaa:aula});
        break;
        case "3° A":
       //redirecciono y paso el aula
        this.navCtrl.push(MateriasPage,{aulaa:aula});
        break;
        case "4° A":
        //alert("Se redireccionara al aula: 4° A ");
        this.navCtrl.push(MateriasPage,{aulaa:aula});
        break;
        case "4° B":
       // alert("Se redireccionara al aula: 4° B ");
        this.navCtrl.push(MateriasPage,{aulaa:aula});
        break;
  
      }
    }

}
