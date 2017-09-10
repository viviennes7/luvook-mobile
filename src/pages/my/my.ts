import { Component, Injectable } from '@angular/core';
import { NavController, ModalController, AlertController, App,NavParams } from 'ionic-angular';

import { SettingPage } from './setting/setting';
import { DetailViewComponent } from "../../component/detailview/detailview.component";
import { LoginPage } from '../login/login';

import { PhotoViewerUtil } from '../../utils/photo-viewer';
import { JwtService } from '../../services/jwt.service';
import { MemberService } from '../../services/member.service';
import {SettingService} from './setting.service';
import {Member} from "../../datas/member";
import {BookBoard} from "../../datas/book-board";
import {BoardService} from "../../services/board.service";
import {PhotoViewer} from "@ionic-native/photo-viewer";

@Component({
  selector: 'page-my',
  templateUrl: 'my.html'
})
export class MyPage {
  isMe:boolean = true;
  member:Member;
  bookBoards = [];

  constructor(private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private appCtrl: App,
              private params: NavParams,
              private jwtService: JwtService,
              private memberService: MemberService,
              private boardService: BoardService,
              public photoViewer: PhotoViewer) {
    this.initialize();
  }

  doRefresh(refresher) {
    this.bookBoards = [];
    this.getBoardsByMember(refresher);
  }

  initialize(){
    let isMe = this.params.get("isMe");
    isMe === undefined ? this.isMe = true : this.isMe = false;

    let member = this.params.get("member");
    if(member){
      this.member = member;
    }else{
      this.member = this.memberService.myInfo;
    }

    this.getBoardsByMember();

  }

  openSettingModal() {
    let modal = this.modalCtrl.create(SettingPage);
    modal.present();
  }

  openDetailViewModal(bookBoard){
    let modal = this.modalCtrl.create(DetailViewComponent, {bookBoard:bookBoard});
    modal.present();
  }

  openPhotoViewer(){
    alert("열기 : " + this.member.profileImg);
    this.photoViewer.show(this.member.profileImg);
    // this.photoViewerUtil.openPhotoViewer("http://image.aladin.co.kr/product/11380/17/coversum/8936474391_2.jpg");
    // this.photoViewerUtil.openPhotoViewer(this.member.profileImg);
  }

  getBoardsByMember(refresher?){
    this.boardService.getBoardsByMember(this.member.memberId).subscribe(res => {
      let result = res.json();

      if(result.statusCode == 200){
        let dataLength = result.data.length;
        let rowCount = 0;
        if(dataLength % 4 == 0){
          rowCount = dataLength/4;
        }else{
          rowCount = (dataLength/4) + 1;
        }
        rowCount = Math.floor(rowCount);
        this.bookBoards = new Array();
        for(let i = 0; i < rowCount; i++){
          let rowAry = new Array();
          for(let j = i*4; ; j++){
            if( (j%4 == 0&& j != i*4) || j == dataLength){
              break;
            }else{
              rowAry.push(result.data[j]);
            }
          }
          this.bookBoards[i] = rowAry;
        }
        if(refresher){
          refresher.complete();
        }
      }else{
        alert(result.message);
      }
    });
  }


  logoutConfirm(){
    let confirm = this.alertCtrl.create({
      title: "로그아웃하시겠습니까?",
      buttons: [
        {
          text: 'Yes',
          handler: () =>{
            this.jwtService.set(null);
            this.appCtrl.getRootNav().setRoot(LoginPage);
          }
        },
        {
          text:'No',
          handler: () =>{
            console.log("No");
          }
        }
      ]
    });
    confirm.present();
  }
}
