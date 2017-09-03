import {Component} from '@angular/core';
import {BookBoard} from "../../datas/book-board";
import {BoardService} from "../../services/board.service";

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html'
})
export class TimelinePage {

  private bookBoards:Array<BookBoard> = [];
  private page: number = 0;
  private isMore: boolean = true;

  constructor(private boardService: BoardService) {
    this.getBookBoards();
  }

  doRefresh(refresher) {
    this.bookBoards = [];
    this.isMore = true;
    this.page = 0;
    this.getBookBoards(refresher);
  }

  getBookBoards(refresher?, infiniteScroll?){
    this.boardService.getBoards(this.page).subscribe(res =>{
      let result = res.json();

      if(result.statusCode == 200) {
        result.data.forEach((item, index) =>{
          this.bookBoards.push(item);
        });
        this.page++;

        if(result.data.length < 10){
          this.isMore = false;
        }

        if (refresher) {
          refresher.complete();
        }
        if(infiniteScroll){
          infiniteScroll.complete();
        }
      }else{
        alert(result.message);
      }
    });
  }

  deleteBoardEvent(index){
    this.bookBoards.splice(index, 1);
  }
}
