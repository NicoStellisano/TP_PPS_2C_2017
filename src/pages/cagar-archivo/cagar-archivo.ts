import { Component,ElementRef,Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { FileOpener } from '@ionic-native/file-opener';

/**
 * Generated class for the CagarArchivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * $ ionic cordova plugin add cordova-plugin-file-opener2
 * $ npm install --save @ionic-native/file-opener
 * 
 */

@IonicPage()
@Component({
  selector: 'page-cagar-archivo',
  templateUrl: 'cagar-archivo.html',
})
export class CagarArchivoPage {

  @ViewChild('fileInp') fileInput: ElementRef;
  @Input() label: string;
  @Output() data = new EventEmitter<FormData>();
  dato:any; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CagarArchivoPage');
  }
  
  fileUpload(event) {
   /* let fd = new FormData();
    fd.append('file', event.srcElement.files[0]);
    
    console.log(fd.getAll);
    this.data.emit(fd);*/

    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.dato = event.target.result;
        //console.log(this.dato);
      }
     reader.readAsDataURL(event.target.files[0]);
    }
      let fileList: FileList = event.target.files;  
      let file: File = fileList[0];
      //console.log(file);
      //console.log(file.webkitRelativePath.split(";"));
      
      for (let index = 0; index < file.size; index++) {
          file[index].reader();
          console.log(file[index]);
      }
  }
  
  onClick() {
    this.fileInput.nativeElement.click();
  }

}
