import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, Loading } from 'ionic-angular';

import { PostContentsPage } from './contents/contents';
import { ItemComponent } from '../../component/item/item.component';
import { BookService } from '../../services/book.service';
import {Book} from '../../datas/book';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  private query: string = "";
  private page: number = 1;
  private books: Array<Book> = [];
  private isMore: boolean = true;
  private loading: Loading;

  constructor(private navCtrl: NavController,
              private modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private bookService: BookService) {

    this.loading = this.loadingCtrl.create();
  }

  search(){
    this.page = 1;
    this.books = [];
    this.getBooks();
    this.isMore = true;
  }

  more(infiniteScroll){
    this.getBooks(infiniteScroll);
  }

  getBooks(infiniteScroll?){

    this.bookService.search(this.query, this.page).subscribe(res =>{
      let result = res.json().item;

      result.forEach((item, index) =>{
        this.books.push(item);
        if(infiniteScroll){
          infiniteScroll.complete();
        }
      });

      if(result.length < 10){
        this.isMore = false;
      }
      this.page++;
    });
  }

  locateContentsPage(book){
    this.navCtrl.push(PostContentsPage, {book:book});
  }

  openItemModal(isbn13){
    let modal = this.modalCtrl.create(ItemComponent, { isbn13:isbn13 } );
    modal.present();
  }
}
