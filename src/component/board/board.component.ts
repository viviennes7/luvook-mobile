import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ModalController, ViewController, ActionSheetController, Platform} from 'ionic-angular';

import {DetailViewComponent} from "../../component/detailview/detailview.component";
import {MyPage} from "../../pages/my/my";
import {ItemComponent} from '../../component/item/item.component';
import {CommentPage} from '../../pages/comment/comment';
import {BookBoard} from '../../datas/book-board';
import {BoardService} from "../../services/board.service";
import {MemberService} from "../../services/member.service";
@Component({
  selector: 'board',
  templateUrl: 'board.component.html'
})
export class BoardComponent {
  @Input()
  isDetail: boolean;

  @Input()
  bookBoard: BookBoard;

  @Output()
  deleteBoardEvent = new EventEmitter();

  private heartShape : string = 'heart-outline';

  constructor(private modalCtrl: ModalController,
              private viewCtrl: ViewController,
              private memberService: MemberService,
              private boardService: BoardService,
              private actionSheetCtrl: ActionSheetController,
              private platform: Platform) {}

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

  deleteBoard(){
    this.boardService.deleteBoard(this.bookBoard.boardId).subscribe(res =>{
      let result = res.json();

      if(result.statusCode == 200){
        this.deleteBoardEvent.emit();
      }else{
        alert(result.message);
      }
    });
  }

  presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     buttons: [
       {
         text: '수정하기',
         icon: !this.platform.is('ios') ? 'pricetag' : null,
         handler: () => {
           alert("준비중입니다.");
         }
       },
       {
         text: '삭제하기',
         icon: !this.platform.is('ios') ? 'trash' : null,
         handler: () => {
           var isRemove = confirm("삭제하시겠습니까?");
           if(isRemove){
             this.deleteBoard();
           }
         }
       },
     ]
   });

   actionSheet.present();
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
