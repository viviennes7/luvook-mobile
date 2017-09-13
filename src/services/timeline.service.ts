import { Injectable } from '@angular/core';
import {BookBoard} from "../datas/book-board";

@Injectable()
export class TimelineService{
  bookBoards:Array<BookBoard> = [];

  constructor(){}


}
