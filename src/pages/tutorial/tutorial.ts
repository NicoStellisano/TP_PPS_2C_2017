import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';


/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
img:string;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,public viewCtrl: ViewController) {
this.img=this.navParams.get('img');

  }

  ionViewDidLoad() {
    //(<HTMLInputElement>document.getElementById('content2')).style.backgroundImage="url('assets/"+this.img+"')";
        (<HTMLInputElement>document.getElementById('content2')).src="assets/"+this.img;

  }
  dismiss()
  {
    this.viewCtrl.dismiss();
  }

}
