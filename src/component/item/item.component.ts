import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { PhotoViewerUtil } from '../../utils/photo-viewer';

@Component({
  selector: 'modal-item',
  templateUrl: 'item.component.html'
})
export class ItemComponent {
  constructor(public viewCtrl: ViewController,
              private photoViewerUtil: PhotoViewerUtil) {}
  dismiss(){
    this.viewCtrl.dismiss();
  }
}
