import { Injectable } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@Injectable()
export class PhotoViewerUtil{
  constructor(private photoViewer: PhotoViewer){}

  openPhotoViewer(src){
    this.photoViewer.show(src);
  }
}
