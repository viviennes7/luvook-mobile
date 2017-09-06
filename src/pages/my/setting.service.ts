import {Injectable} from "@angular/core";

import {MemberService} from "../../services/member.service";

@Injectable()
export class SettingService{
  profileImg: string;
  nickname: string;

  constructor(private memberService: MemberService){}

  initializeMyPage(){
    this.profileImg = this.memberService.myInfo.getProfileImg();
    this.nickname = this.memberService.myInfo.nickname;
  }
}
