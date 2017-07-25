import { Component, ElementRef, Renderer } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-post-contents',
  templateUrl: 'contents.html'
})
export class PostContentsPage {

  stars: string[] = [
    'star-outline', 'star-outline', 'star-outline', 'star-outline', 'star-outline'
  ];

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
