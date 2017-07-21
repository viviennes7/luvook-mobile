import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';

import {DetailviewModal} from "../common/detailview/detailview"
import {MyPage} from "../my/my";
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html'
})
export class TimelinePage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController) {}

  openDetailviewModal(){
    let modal = this.modalCtrl.create(DetailviewModal);
    modal.present();
  }

  openHomeModal(){
    let modal = this.modalCtrl.create(MyPage);
    modal.present();
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  alert(){
    alert(123);
  }
}
