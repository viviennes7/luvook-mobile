import { Injectable } from '@angular/core';
import { App } from 'ionic-angular';

import {Member} from '../datas/member';
import {JwtService} from './jwt.service';
import {TimelineService} from './timeline.service';
import {LoginPage} from '../pages/login/login';

@Injectable()
export class MemberService{
  myInfo: Member;

  constructor(private jwtService: JwtService,
              private timelineService: TimelineService,
              private appCtrl: App){}


  logout(){
    this.timelineService.bookBoards = [];
    this.jwtService.set(null);
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }
}
