import { Component, ElementRef, Renderer } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import{ PostPage } from '../post';
import{ ImagePickerPage } from '../../image-picker/image-picker';
import{ ImagePicker } from '@ionic-native/image-picker';

import { PhotoViewerUtil } from '../../../utils/photo-viewer';

@Component({
  selector: 'page-post-contents',
  templateUrl: 'contents.html'
})
export class PostContentsPage {

  stars: string[] = [
    'star-outline', 'star-outline', 'star-outline', 'star-outline', 'star-outline'
  ];
  selectedImgUris = new Array();

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private elementRef:ElementRef,
              private renderer:Renderer,
              private imagePicker: ImagePicker,
              private photoViewerUtil: PhotoViewerUtil
              ) {}

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
    }

    this.imagePicker.getPictures(options).then(
      result=> {
        let rowCount = 0;
        if(result.length % 4 == 0){
          rowCount = result.length/4;
        }else{
          rowCount = (result.length/4) + 1;
        }
        rowCount = Math.round(rowCount);
        this.selectedImgUris = new Array();
        for(let i = 0; i < rowCount; i++){
          let rowAry = new Array();
          for(let j = i*4; ; j++){
            if( (j%4 == 0&& j != i*4) || j == result.length){
              break;
            }else{
              rowAry.push(result[j]);
            }
          }
          this.selectedImgUris[i] = rowAry;
        }
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
