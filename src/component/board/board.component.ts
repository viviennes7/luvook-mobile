import {Component, Input} from '@angular/core';
import {ModalController, ViewController} from 'ionic-angular';

import {DetailViewComponent} from "../../component/detailview/detailview.component";
import {MyPage} from "../../pages/my/my";
import {ItemComponent} from '../../component/item/item.component';
import {CommentPage} from '../../pages/comment/comment';
import {BookBoard} from '../../datas/book-board';
import {BoardService} from "../../services/board.service";

@Component({
  selector: 'board',
  templateUrl: 'board.component.html'
})
export class BoardComponent {

  @Input()
  isDetail: boolean;

  @Input()
  bookBoard: BookBoard;

  private heartShape : string = 'heart-outline';

  constructor(private modalCtrl: ModalController,
              private viewCtrl: ViewController,
              private boardService: BoardService) {}

  ngOnInit() {
    if(this.bookBoard.isClickedHeart){
      this.heartShape = 'heart';
    }else{
      this.heartShape = 'heart-outline';
    }
  }

  openDetailViewModal(){
    if(!this.isDetail){
      let modal = this.modalCtrl.create(DetailViewComponent,{bookBoard:this.bookBoard});
      modal.present();
    }
  }

  openHomeModal(){
    let modal = this.modalCtrl.create(MyPage, { isMe :false, member:this.bookBoard.member } );
    modal.present();
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  openItemModal(){
    let modal = this.modalCtrl.create(ItemComponent, { isbn13:this.bookBoard.isbn13 });
    modal.present();
  }

  openCommentModal(){
    let modal = this.modalCtrl.create(CommentPage, {boardId: this.bookBoard.boardId});
    modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  clickHeart(){
    this.boardService.toggleHeart(this.bookBoard.boardId).subscribe(res =>{
      let result = res.json();
      if(result.statusCode == 200){
        if(this.bookBoard.isClickedHeart){
          this.bookBoard.isClickedHeart = false;
          this.heartShape = 'heart-outline';
          this.bookBoard.heartCount--;
        }else{
          this.bookBoard.isClickedHeart = true;
          this.heartShape = 'heart';
          this.bookBoard.heartCount++;
        }
      }else{
        alert(result.message);
      }
    });
  }
}
