import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { TimelinePage } from "../timeline/timeline";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  constructor(public modalCtrl: ModalController) {}

  locateMainPage(){
    let modal = this.modalCtrl.create(TimelinePage);
    modal.present();
  }
}
