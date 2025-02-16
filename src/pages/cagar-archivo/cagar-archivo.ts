import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AlumnoItem } from '../../models/alumno-item/alumno-imte.interface';
import { AlumnoListaItem } from '../../models/alumno-lista/alumno-lista.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { GeneratedFile } from '@angular/compiler';
import { AulaAlumnoItem } from '../../models/aula-alumno-item/aula-alumno.interface';
import { DescargarArchivoPage } from '../descargar-archivo/descargar-archivo';
import { FireBaseServiceProvider } from '../../providers/fire-base-service/fire-base-service';
import { NativeAudio } from '@ionic-native/native-audio';
import { AdministrativoItem } from '../../models/administrativo-item/administrativo.inteface';

import { AlertController } from 'ionic-angular';
import { AsignarMateriaPage } from '../asignar-materia/asignar-materia';

export class GeochemComponent implements OnInit {
  
    static muestras:string[][]=[];
    static muestras2:string[][]=[];
    ngOnInit(){}
  }

@IonicPage()
@Component({
  selector: 'page-cagar-archivo',
  templateUrl: 'cagar-archivo.html',
})
export class CagarArchivoPage {

  //Atributos de descarga
  listaAlumnos:AlumnoItem[] = [];
  listaGen:AdministrativoItem[] = [];

  listaA = {} as AlumnoListaItem;
  
  listaAlumnoItem:AlumnoListaItem[]=[];
  abmAlumnos:any[]=[];
  nombreArchivo:string;
  sizeArchivo:string;
  aula:string = "";
  persona:string;
listaProfesores:any[]=[];
listaAdministrativos:any[]=[];;
  alumnoLista$: FirebaseListObservable<AlumnoItem[]>;
  alumnoListaItem$: FirebaseListObservable<AlumnoListaItem[]>;
materia:string="";
  banderita:boolean;

  constructor(public navCtrl: NavController, public modalCtrl:ModalController,public navParams: NavParams,private firebaseService: FireBaseServiceProvider,private database: AngularFireDatabase,private alertCtrl: AlertController,private nativeAudio: NativeAudio) {
    //this.aula = this.navParams.get('aulaa');
    this.persona = this.navParams.get('persona');
    if(this.persona=="alumno")
    {
      
    
    this.alumnoLista$ = this.database.list('alumno-lista');
    
    this.alumnoListaItem$ = this.database.list('alumno-lista');

    this.alumnoListaItem$.subscribe(alumLista =>{
      this.listaAlumnoItem = alumLista;
    });
  }else if(this.persona=="profesor")
  {
    this.database.list('personas/profesores').subscribe(data=>
      {
        this.listaProfesores=data;
      });
   
  }else if(this.persona=="administrativo")
  {
    this.database.list('personas/administrativos').subscribe(data=>
      {
        this.listaAdministrativos=data;
      });
  }
    this.nativeAudio.preloadComplex('1', 'assets/sonidos/1.mp3', 1, 1, 0);
    this.nativeAudio.play('1');

  }

  ionViewDidLoad() {
    this.firebaseService.getABMAlumnos().subscribe(data=>
      {
        this.abmAlumnos=data;
      });
    
  }
  
  leeArchivos(numarchivo:number,file:any) {

    if(this.persona=="alumno")
    {
      this.firebaseService.getABMAlumnos().subscribe(data=>
        {
          this.abmAlumnos=data;
        });

  
    let alumno = {} as AlumnoItem;
    let lista:any[] = [];
    var fr = new FileReader();
    var arrayFilas:string[][];
    var archivoNom:string[][];

    //--------------------- Lectura del archivo -------------------------//
    fr.onload = function(e) {
      var text = fr.result;
      var rows = text.split("\n");
      arrayFilas=[];
      
      //guardo todas las filas en un array separando cada atributo que tenga ;
      for (var t=0;t<rows.length-1;t++) {
        if (rows[t].length!=0) {
          //console.log(rows[t].split(";"));
          arrayFilas.push(rows[t].split(";"));
        }
      }

      //Tomo cada elemento del arrayFilas y lo transformo en un alumnno para guardalos en listaAlumno
      for (let index = 0; index < arrayFilas.length; index++) {
        const elemento = arrayFilas[index];
        console.log(elemento);
        alumno.legajo = elemento[0].trim();
        alumno.nombre = elemento[1].trim();
        alumno.turno = elemento[2].trim();
        alumno.mail = elemento[3].trim();
        alumno.password = elemento[0].trim();
        alumno.contPresentes = 0;
        
        lista.push(alumno);

        alumno = {} as AlumnoItem;
      }

      if(numarchivo==0) {
        GeochemComponent.muestras=arrayFilas.slice();
      } else if (numarchivo==1) {
        GeochemComponent.muestras2=arrayFilas.slice();
      }
    };

    fr.readAsText(file,'ISO-8859-4');
    
    this.listaAlumnos = lista;
    //console.log(this.listaAlumnos);
    //console.log(file.name);
    //console.log(file.size);
    this.nombreArchivo = file.name;
    this.sizeArchivo = file.size/1000 + " Kb";

  }else if(this.persona=="profesor")
  {
    let admin = {} as AdministrativoItem;
    let lista:any[] = [];
    var fr = new FileReader();
    var arrayFilas:string[][];
    var archivoNom:string[][];

    //--------------------- Lectura del archivo -------------------------//
    fr.onload = function(e) {
      var text = fr.result;
      var rows = text.split("\n");
      arrayFilas=[];
      
      //guardo todas las filas en un array separando cada atributo que tenga ;
      for (var t=0;t<rows.length-1;t++) {
        if (rows[t].length!=0) {
          //console.log(rows[t].split(";"));
          arrayFilas.push(rows[t].split(";"));
        }
      }

      //Tomo cada elemento del arrayFilas y lo transformo en un alumnno para guardalos en listaAlumno
      for (let index = 0; index < arrayFilas.length; index++) {
        const elemento = arrayFilas[index];
        console.log(elemento);
        admin.DNI = elemento[0].trim();
        admin.Apellido = elemento[1].trim();
        admin.Nombre = elemento[2].trim();
        admin.Email = elemento[3].trim();
        admin.password = elemento[0].trim();
        admin.Perfil= "Profesor"
        
        lista.push(admin);

        admin = {} as AdministrativoItem;
      }

      if(numarchivo==0) {
        GeochemComponent.muestras=arrayFilas.slice();
      } else if (numarchivo==1) {
        GeochemComponent.muestras2=arrayFilas.slice();
      }
    };

    fr.readAsText(file,'ISO-8859-4');
    
    this.listaGen = lista;
    //console.log(this.listaAlumnos);
    //console.log(file.name);
    //console.log(file.size);
    this.nombreArchivo = file.name;
    this.sizeArchivo = file.size/1000 + " Kb";
    //this.firebaseService.updateProfesor(lista);
    //console.log(lista);
    //this.database.list('/SiFunca/').push(lista);

  }else if(this.persona=="administrativo")
  {
    let admin = {} as AdministrativoItem;
    let lista:any[] = [];
    var fr = new FileReader();
    var arrayFilas:string[][];
    var archivoNom:string[][];

    //--------------------- Lectura del archivo -------------------------//
    fr.onload = function(e) {
      var text = fr.result;
      var rows = text.split("\n");
      arrayFilas=[];
      
      //guardo todas las filas en un array separando cada atributo que tenga ;
      for (var t=0;t<rows.length-1;t++) {
        if (rows[t].length!=0) {
          //console.log(rows[t].split(";"));
          arrayFilas.push(rows[t].split(";"));
        }
      }

      //Tomo cada elemento del arrayFilas y lo transformo en un alumnno para guardalos en listaAlumno
      for (let index = 0; index < arrayFilas.length; index++) {
        const elemento = arrayFilas[index];
        console.log(elemento);
        admin.DNI = elemento[0].trim();
        admin.Apellido = elemento[1].trim();
        admin.Nombre = elemento[2].trim();
        admin.Email = elemento[3].trim();
        admin.password = elemento[0].trim();
        admin.Perfil= "Administrativo";
      
        
        lista.push(admin);

        admin = {} as AdministrativoItem;
      }

      if(numarchivo==0) {
        GeochemComponent.muestras=arrayFilas.slice();
      } else if (numarchivo==1) {
        GeochemComponent.muestras2=arrayFilas.slice();
      }
    };

    fr.readAsText(file,'ISO-8859-4');
    
    this.listaGen = lista;
    //console.log(this.listaAlumnos);
    //console.log(file.name);
    //console.log(file.size);
    this.nombreArchivo = file.name;
    this.sizeArchivo = file.size/1000 + " Kb";
    //
  }
}

  onFileSelect(input: HTMLInputElement) {
    var files = input.files;
    var len = files.length;
    for (var b=0;b<len;b++) {
      this.leeArchivos(b,files[b]);
    }
  }

  cargarLista(){
    this.banderita=false;
if(this.persona=="alumno")
{

    var rows = this.nombreArchivo.split("-");
    console.log(rows);
    this.listaA.materia=rows[0];
    this.listaA.aula =rows[1];
    this.aula=rows[1];
    this.materia=rows[0];
    this.listaA.alumnos=this.listaAlumnos;
    
    
    let cont:number;
    cont = this.listaAlumnoItem.length;
    let listaAx:any[]=[];
    let banderaGlobal=false;
    for (let o = 0; o < this.listaAlumnoItem.length; o++) {
      let element = this.listaAlumnoItem[o];
      if(element.aula==this.listaA.aula && element.materia==this.listaA.materia)
      {
        let listaAux:any[]=[];
        listaAux=this.listaAlumnoItem;
        listaAux[o].alumnos=this.listaA.alumnos;
      
        this.firebaseService.agregarLista(listaAux);
        this.banderita=true;
       
      
        for (let u = 0; u < this.listaA.alumnos.length; u++) {
          
           const elementu = this.listaA.alumnos[u];
           
         for (let h = 0; h < this.abmAlumnos.length; h++) {
           const elementh = this.abmAlumnos[h];
           let bandera=false;
            
             if(elementh.mail==elementu.mail)
             {
               this.abmAlumnos[h]=elementu;
               bandera=true;
               banderaGlobal=true;
               break;
             }
           
           }
           if(!banderaGlobal)
           {
             this.abmAlumnos.push(elementu);
           }
           
         }
         listaAx=this.abmAlumnos;
         this.firebaseService.updateABMAlumno(listaAx);
  break;        

      }
      
    }
    if(this.banderita==false)
    { if(this.aula!="GENERAL" && this.materia!="GENERAL")
    {

    
      let listaAx:any[]=[];
      this.firebaseService.agregarListaDENAZI(this.listaA,cont);
    }
      for (let u = 0; u < this.listaA.alumnos.length; u++) {
        let banderaGlobal=false;
        const elementu = this.listaA.alumnos[u];
        
      for (let h = 0; h < this.abmAlumnos.length; h++) {
        const elementh = this.abmAlumnos[h];
        let bandera=false;
         
          if(elementh.mail==elementu.mail)
          {
            this.abmAlumnos[h]=elementu;
            bandera=true;
            banderaGlobal=true;
            break;
          }
         
        }
        if(!banderaGlobal)
        {
          this.abmAlumnos.push(elementu);
        }
        
      }
      listaAx=this.abmAlumnos;
      this.firebaseService.updateABMAlumno(listaAx);
      
      
    }
    
    console.log(this.aula);
    if(this.aula == "4A" && this.materia=="PPS"){
      console.log("entro a A");
      this.listaAlumnos.forEach(alumno => {
        this.firebaseService.agregarListaA(alumno);
      });
    }else if(this.aula=="4B" && this.materia=="PPS"){
      console.log("entro a B");
      this.listaAlumnos.forEach(alumno => {
        this.firebaseService.agregarListaB(alumno);
      });
    }

//    this.presentAlert("Guardar Lista","Se guado correcetamente la lista");
    let alert = this.alertCtrl.create({
      title: "Guardar Lista",
      subTitle: "La lista se guardó correctamente",
      cssClass:"miClaseAlert",
    buttons: [{text:'Aceptar',
    handler: () => {
      if(this.aula!="GENERAL" && this.materia!="GENERAL")
      {
      let profileModal = this.modalCtrl.create(AsignarMateriaPage, {materia:this.listaA.materia,aula:this.listaA.aula});
      profileModal.present();
      }
    }
    }
   ]
  });
   alert.present();

 
   
   
    
  }else if(this.persona=="profesor")
  {
    console.log('---------- ingreso a profesores carga ---------');
    this.firebaseService.updateProfesor(this.listaGen);
    //this.database.list('/profesores/').push(this.listaGen);
    let alert = this.alertCtrl.create({
      title: "Guardar Lista",
      subTitle: "La lista se guardó correctamente",
      cssClass:"miClaseAlert",
    buttons: [{text:'Aceptar'}]});
    alert.present();
    
  }else if(this.persona=="administrativo")
  {
    console.log('---------- ingreso a administrativos carga ---------');
    this.firebaseService.updateAdministrativo(this.listaGen);
    let alert = this.alertCtrl.create({
      title: "Guardar Lista",
      subTitle: "La lista se guardó correctamente",
      cssClass:"miClaseAlert",
    buttons: [{text:'Aceptar'}]});
    alert.present();
    //this.database.list('/administrativos/').push(this.listaGen);
  }
}

  descargarArchivo(){
    let miAula:string;

    this.listaAlumnoItem.forEach(aula => {
      console.log(aula);
      if(aula.aula == this.aula){
        miAula = aula.aula;
      }
    });

    if(miAula == this.aula){
      //alert("Ir a descarga");
      this.navCtrl.push(DescargarArchivoPage,{aulaa:this.aula});
    }else{
      //alert("No hya nada que descargar");
     // this.presentAlert("Sin alumnos","No hay nada que descargar");
      let alert = this.alertCtrl.create({
        title: "Sin Alumnos",
        subTitle: "No hay nada que descargar",
        cssClass:"miClaseDanger",
      buttons: ['Aceptar']
    });
     alert.present();
    }
    
  }

  presentAlert(titulo,subtitulo) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: subtitulo,
      cssClass:"miClaseAlert",
      buttons: ['Aceptar']
    });
    alert.present();
  }

}


