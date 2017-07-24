import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';

import {DetailviewModal} from "../common/detailview/detailview"
import {MyPage} from "../my/my";
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html'
})
export class TimelinePage {

  // isClickedHeart :boolean = false;
  // heartShape : string = 'heart-outline';
  // heartCount : number = 12;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController) {}

  // openDetailviewModal(){
  //   let modal = this.modalCtrl.create(DetailviewModal);
  //   modal.present();
  // }
  //
  // openHomeModal(){
  //   let modal = this.modalCtrl.create(MyPage, { isMe :false } );
  //   modal.present();
  // }
  //
  // ionViewWillEnter() {
  //   this.viewCtrl.showBackButton(false);
  // }
  //
  // clickHeart(){
  //   if(this.isClickedHeart){
  //     this.isClickedHeart = false
  //     this.heartShape = 'heart-outline';
  //     this.heartCount--;
  //   }else{
  //     this.isClickedHeart = true;
  //     this.heartShape = 'heart';
  //     this.heartCount++;
  //   }
  // }
}
