import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostContentsPage } from './contents/contents';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  constructor(public navCtrl: NavController) {}

  locateContentsPage(){
    this.navCtrl.push(PostContentsPage);
  }
}
