import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, LoadingController, Loading } from 'ionic-angular';

import { PhotoViewerUtil } from '../../utils/photo-viewer';
import { BookService } from '../../services/book.service';
import { Book } from '../../datas/book';

@Component({
  selector: 'modal-item',
  templateUrl: 'item.component.html'
})
export class ItemComponent {

  private isbn13:string;
  private book: Book = new Book();
  private loading: Loading;

  constructor(private viewCtrl: ViewController,
              private params: NavParams,
              private loadingCtrl: LoadingController,
              private bookService: BookService) {

    this.isbn13 = params.get("isbn13");
    this.getBook();
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

  private getBook(){
    this.bookService.get(this.isbn13).subscribe(res =>{
      let result = res.json();
      this.book = result;
    });
  }

  getDescription(){
    let description = this.book.description;
    if(!this.book.description){
      return
    }else{
      description = description.replace(/&lt;/g, "<");
      description = description.replace(/&gt;/g, ">");
      return description;
    }
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
