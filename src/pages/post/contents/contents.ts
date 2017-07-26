import { Component, ElementRef, Renderer } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import{ PostPage } from '../post';
import{ PhotoLibraryPage } from '../../photo-library/photo-library';

@Component({
  selector: 'page-post-contents',
  templateUrl: 'contents.html'
})
export class PostContentsPage {

  stars: string[] = [
    'star-outline', 'star-outline', 'star-outline', 'star-outline', 'star-outline'
  ];

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private elementRef:ElementRef,
              private renderer:Renderer ) {}

  openPhotoLibraryModal(){
    let modal =this.modalCtrl.create(PhotoLibraryPage);
    modal.present();
  }

  ngAfterViewInit() {
    this.renderer
      .listen(this.elementRef.nativeElement.querySelector('.post-contents .item-inner'), 'click', () => {
        let textarea = this.elementRef.nativeElement.querySelector('.contents-textarea');
        textarea.focus();
      });
  }

  saveBoard(){
    this.navCtrl.setRoot(PostPage);
  }

  onClickStar(num){
    this.initStar();

    for(let i=0; i<num; i++){
      this.stars[i] = 'star';
    }
  }

  initStar(){
    for(let i = 0; i < 5; i++){
      this.stars[i] = 'star-outline';
    }
  }
}
