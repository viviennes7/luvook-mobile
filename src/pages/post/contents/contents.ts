import { Component, ElementRef, Renderer } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-post-contents',
  templateUrl: 'contents.html'
})
export class PostContentsPage {

  constructor(public navCtrl: NavController,
              private elementRef:ElementRef,
              private renderer:Renderer ) {}

  ngAfterViewInit() {
    this.renderer
      .listen(this.elementRef.nativeElement.querySelector('.post-contents .item-inner'), 'click', () => {
        let textarea = this.elementRef.nativeElement.querySelector('.contents-textarea');
        textarea.focus();
      });
  }
}
