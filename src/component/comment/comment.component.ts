import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';

import {MyPage} from "../../pages/my/my";

@Component({
  selector: 'comment',
  templateUrl: 'comment.component.html'
})
export class CommentComponent{
  constructor(public modalCtrl: ModalController){}

  openHomeModal(){
    let modal = this.modalCtrl.create(MyPage, { isMe :false } );
    modal.present();
  }
}
