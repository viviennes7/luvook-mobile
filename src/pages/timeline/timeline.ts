import {Component} from '@angular/core';
import {BookBoard} from "../../datas/book-board";
import {BoardService} from "../../services/board.service";
import {TimelineService} from "../../services/timeline.service";
import {MemberService} from "../../services/member.service";

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html'
})
export class TimelinePage {
  private page: number = 0;
  private isMore: boolean = true;

  constructor(private boardService: BoardService,
              private timelineService: TimelineService,
              private memberService: MemberService) {
    this.getBookBoards();
  }

  doRefresh(refresher) {
    this.timelineService.bookBoards = [];
    this.isMore = true;
    this.page = 0;
    this.getBookBoards(refresher);
  }

  getBookBoards(refresher?, infiniteScroll?){
    this.boardService.getBoards(this.page).subscribe(res =>{
      let result = res.json();

      if(result.statusCode == 200) {
        result.data.forEach((item, index) =>{
          this.timelineService.bookBoards.push(item);
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
      }else if(result.statusCode == 401){
        alert(result.message);
        this.memberService.logout();
      }else{
        alert(result.message);
      }
    });
  }

  deleteBoardEvent(index){
    this.timelineService.bookBoards.splice(index, 1);
  }
}
