import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';

import {DetailViewComponent} from "../../component/detailview/detailview.component";
import {MyPage} from "../my/my";
import {BookBoard} from "../../datas/book-board";
import {BoardService} from "../../services/board.service";

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html'
})
export class TimelinePage {

  private bookBoards:Array<BookBoard> = [];
  private page: number = 0;

  constructor(private boardService: BoardService) {
    this.getBookBoards();
  }

  getBookBoards(){
    this.boardService.getBookBoards(this.page).subscribe(res =>{
      let result = res.json().data;
      this.bookBoards = result;
      this.page++;
    });
  }
}
