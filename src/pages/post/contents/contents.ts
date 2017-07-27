import { Component, ElementRef, Renderer } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import{ PostPage } from '../post';
import{ ImagePickerPage } from '../../image-picker/image-picker';
import{ ImagePicker } from '@ionic-native/image-picker';

@Component({
  selector: 'page-post-contents',
  templateUrl: 'contents.html'
})
export class PostContentsPage {

  stars: string[] = [
    'star-outline', 'star-outline', 'star-outline', 'star-outline', 'star-outline'
  ];
  selectedImgUris: any;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private elementRef:ElementRef,
              private renderer:Renderer,
              private imagePicker: ImagePicker) {}

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

  openGallery(): void {
    let options = {
      maximumImagesCount: 8,
      width: 500,
      height: 500,
      quality: 100,
    }

    this.imagePicker.getPictures(options).then(
      results => {
        this.selectedImgUris = results;
      },
      err => console.log('err')
    );
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
