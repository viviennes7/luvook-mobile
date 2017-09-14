import { Component, ElementRef, Renderer } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import { NavController, ModalController, NavParams, ViewController } from 'ionic-angular';
import{ ImagePicker } from '@ionic-native/image-picker';
import{ PostPage } from '../post';
import{ ImagePickerPage } from '../../image-picker/image-picker';

import {Book} from '../../../datas/book';
import {BookBoard} from '../../../datas/book-board';
import {HttpService} from '../../../services/http.service';
import {TimelineService} from '../../../services/timeline.service';
import {MemberService} from '../../../services/member.service';
import { PhotoViewerUtil } from '../../../utils/photo-viewer';

@Component({
  selector: 'page-post-contents',
  templateUrl: 'contents.html'
})
export class PostContentsPage {
  private contents: string = "";
  private book: Book;
  private stars: string[] = [];
  private starCount: number = 0;
  private selectedImgUris = new Array();

  constructor(private navCtrl: NavController,
              private modalCtrl: ModalController,
              private elementRef:ElementRef,
              private renderer:Renderer,
              private imagePicker: ImagePicker,
              private photoViewerUtil: PhotoViewerUtil,
              private params: NavParams,
              private http: Http,
              private timelineService: TimelineService,
              private memberService: MemberService,
              private viewCtrl: ViewController) {
    this.book = params.get("book");
    this.initStar();
  }

  saveBoard(){
    if(this.contents == ""){
      alert("내용을 입력해주세요.");
      return;
    }

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('title', this.book.title);
    urlSearchParams.append('categoryId', this.book.categoryId);
    urlSearchParams.append('cover', this.book.cover);
    urlSearchParams.append('isbn', this.book.isbn);
    urlSearchParams.append('isbn13', this.book.isbn13);
    urlSearchParams.append('contents', this.contents);
    urlSearchParams.append('grade', this.starCount.toString());

    let params = urlSearchParams.toString()

    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded',"Authorization":HttpService.AUTH});

    this.http
        .post(HttpService.BASE_URL + "/board/book", params, { headers:headers })
        .subscribe(res =>{
          let result = res.json();
          if(result.statusCode == 200){
            this.timelineService.bookBoards.unshift(result.data);
            this.viewCtrl.dismiss();
          }else if(result.statusCode == 401){
            alert(result.message);
            this.memberService.logout();
          }else{
            alert(result.message);
          }
        });
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
        rowCount = Math.floor(rowCount);
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
    this.starCount = num;

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
